const express = require("express");
const app = express();
const book = require("./routes/book");

app.use(express.json());
app.use("/api/books", book);

app.listen(3000, () => {
  console.log("Server is running at port 3000.");
});
