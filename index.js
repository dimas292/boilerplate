import express from 'express';
import 'dotenv/config'
import route from './books/routes.js'

const app = express();
// route
route(app);
const port = parseInt(process.env.PORT);
app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});