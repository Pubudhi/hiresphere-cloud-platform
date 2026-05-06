const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const profiles = [];

app.get("/health", (req, res) => {
  res.json({ status: "profile-service running" });
});

app.post("/profiles", (req, res) => {
  const profile = {
    id: Date.now().toString(),
    name: req.body.name,
    type: req.body.type, // CANDIDATE or INTERVIEWER
    domain: req.body.domain,
    interviewType: req.body.interviewType,
    experienceLevel: req.body.experienceLevel,
    availability: req.body.availability,
    rating: req.body.rating || 0
  };

  profiles.push(profile);
  res.status(201).json(profile);
});

app.get("/profiles", (req, res) => {
  res.json(profiles);
});

app.get("/profiles/interviewers", (req, res) => {
  const interviewers = profiles.filter(p => p.type === "INTERVIEWER");
  res.json(interviewers);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Profile service running on port ${PORT}`);
});