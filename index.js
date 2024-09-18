import express from 'express';
import 'dotenv/config'
import route from './books/routes.js'

const app = express();
app.use(express.json());
// route
route(app);
const port = parseInt(process.env.PORT);
app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});