const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  createBook,
  deleteBook,
  findBookById,
  updateBook,
} = require("../models/book");

router.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();
    console.log(books);
    res.send(books);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const newBook = {
      id: req.body.id,
      bookname: req.body.bookname,
      datatype: req.body.datatype,
    };
    const book = await createBook(newBook);
    console.log(book);
    res.send(book);
  } catch (error) {
    console.log(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const updateItem = {
      id: req.body.id,
      bookname: req.body.bookname,
      datatype: req.body.datatype,
    };
    const book = await updateBook(updateItem);
    res.send(book);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = await deleteBook(req.params.id);
    console.log("book deleted");
    res.send(id);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await findBookById(req.params.id);
    console.log(book);
    res.send(book);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
