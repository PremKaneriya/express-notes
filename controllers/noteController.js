const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = new Note({ userId: req.user.id, title, content });
    await newNote.save();

    res.json({ message: "Note created", note: newNote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
