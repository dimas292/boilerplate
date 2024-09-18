import { findAll, findByID } from "./repository.js";

const getBookAll = async (req, res) => {
  try {
    const booksData = await findAll();
    res.send({ message: "get all books", data: booksData });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
const getBookByID = async(req, res) => {
  try {
      const bookData = await findByID(req.params.id);
      console.log(bookData);
      res.send({ message: "get book by id", data: bookData });
  } catch (error) {
      res.status(400).send({ error: error.message });
  }
};
export { getBookAll, getBookByID };
