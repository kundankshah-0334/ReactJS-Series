import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config();

const Conn = () => {
    // const URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASS}@cluster0.7orc3b1.mongodb.net/CRUD?retryWrites=true&w=majority`;
    const URL = `mongodb+srv://kundanlal96580:8IZ9r4OdNB4I1lWt@cluster0.jdgqor7.mongodb.net/?retryWrites=true&w=majority`;
    try{
        mongoose.connect(URL , { useUnifiedTopology : true , useNewUrlParser : true });
        console.log("connected");  
      }catch(e){
        console.log("not connectede");
      }
}

export default Conn;