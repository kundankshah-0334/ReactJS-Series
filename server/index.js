import  express from "express";
const app = express();
import Conn from "./database/dbs.js";
const PORT = 8000;
import cors from "cors";
import Routes from "./routes/Route.js"

app.use(cors());
app.use('/', Routes);
Conn();

app.listen(PORT , ()=>{console.log(`Server is runnig on ${PORT}`)})