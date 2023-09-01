import User from "../schema/user-schema.js";


export const adduser = async (req , res) => {
    const user = req.body;
    const new_user = new User(user);
    try{
        await new_user.save();
        res.status(201).json(new_user);
    }catch(e){
        res.status(409).json({message : e.message});
        
    }
} 

export const getuser = async (req , res) => {
    try{
        const getUser = await User.find({});
        res.status(201).json(getUser);
    }catch(e){
        res.status(404).json(e);
    }
} 
export const getSingleUser = async (req , res) => {
    try{
        const SingleUser = await User.find({_id : req.params.id});
        res.status(201).json(SingleUser);
        console.log('SingleUser');
    }catch(e){
        res.status(404).json(e);
    }
} 
