const express = require("express");
const cors = require("cors");
const multer = require("multer");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const submissions = [];

app.get("/health", (req, res) => {
  res.json({ status: "submission-service running" });
});

app.post("/submissions/github", (req, res) => {
  const submission = {
    id: Date.now().toString(),
    candidateName: req.body.candidateName,
    githubLink: req.body.githubLink
  };

  submissions.push(submission);

  res.status(201).json(submission);
});

app.post("/submissions/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename
  });
});

app.get("/submissions", (req, res) => {
  res.json(submissions);
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Submission service running on port ${PORT}`);
});