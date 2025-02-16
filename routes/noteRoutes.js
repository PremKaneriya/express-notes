const express = require("express");
const { getNotes, createNote, deleteNote } = require("../controllers/noteController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getNotes);
router.post("/", authMiddleware, createNote);
router.delete("/:id", authMiddleware, deleteNote);

module.exports = router;
