import { useState } from "react";
import { submissionAPI } from "../services/api";

function Submissions() {
  const [candidateName, setCandidateName] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [message, setMessage] = useState("");

  const submitGithub = async () => {
    try {
      await submissionAPI.post("/submissions/github", {
        candidateName,
        githubLink
      });

      setMessage("Submission successful");
    } catch (error) {
      setMessage("Submission failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Submit Coding Challenge</h1>

      <input
        placeholder="Candidate Name"
        value={candidateName}
        onChange={(e) => setCandidateName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="GitHub Repository Link"
        value={githubLink}
        onChange={(e) => setGithubLink(e.target.value)}
      />

      <br /><br />

      <button onClick={submitGithub}>
        Submit GitHub Link
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Submissions;