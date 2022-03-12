const { Router } = require("express");
const router = Router();
const LogEntry = require("../../server/src/models/LogEntry");

router.get("/", async (req, res) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error.name);
  }
});

router.delete("/", async (req, res) => {
  try {
    const entries = await LogEntry.deleteMany();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
