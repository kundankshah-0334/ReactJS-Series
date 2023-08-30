import User from "../schema/user-schema.js";


export const adduser = async (req , res) => {
    const user_data = req.body;



    const new_user = new User(user_data);

    try{
        await new_user.save();
        res.status(201).json(new_user);
    }catch(e){
        res.status(409).json({message : e.message});
        
    }
} 