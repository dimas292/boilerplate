import {getBookAll, getBookByID} from "./handler.js";

const route = (app) => {
  app.route('/books')
    .get(async(req, res) => {
      try {
        await getBookAll(req, res)
      } catch (error) {
        res.status(400).send({error : error.message})
      }
    })
  app.route('/books/:id')
    .get(async(req, res) => {
      try {
        await getBookByID(req, res)
      } catch (error) {
        res.status(400).send({error : 'Buku tidak ditemukan'})
      }
    })
};

export default route