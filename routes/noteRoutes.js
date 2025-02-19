const express = require("express");
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getNotes);
router.post("/", authMiddleware, createNote);
router.delete("/:id", authMiddleware, deleteNote);
router.patch("/:id", authMiddleware, updateNote);

module.exports = router;
