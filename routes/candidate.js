const express = require("express");
const router = express.Router();
const {
  getAllCandidate,
  loginCandidate,
  getCandidateInformation
} = require("./../controller/candidate");

router.get("/getAllCandidate", async (req, res) => {
  const response = await getAllCandidate();
  res.send(response);
});

router.post("/loginCandidate", async (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  try {
    const response = await loginCandidate(email, password);
    res.send(response); // Sending the response back on success
  } catch (error) {
    res.status(404).json({ error: error.message }); // Sending error message in JSON format
  }
});

router.get("/getCandidateInformation", async (req, res) => {
  const candidateId = req.query.userId;
  console.log(candidateId)
  try {
    const resposne = await getCandidateInformation(candidateId);
    res.send(resposne);
  } catch (error) {
    res.status(404).json({ error: error.message }); // Sending error message in JSON format
  }
});

module.exports = router;
