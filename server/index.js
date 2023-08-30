import  express from "express";
const app = express();
import Conn from "./database/dbs.js";
const PORT = 8000;
import cors from "cors";
import Routes from "./routes/Route.js"

import bodyParser from "body-parser";

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors());
app.use('/', Routes);
Conn();

app.listen(PORT , ()=>{console.log(`Server is runnig on ${PORT}`)})