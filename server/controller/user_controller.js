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
        console.log(SingleUser);
    }catch(e){
        res.status(404).json(e);
    }
} 
export const editUser = async (req , res) => {
    let user = req.body;
    const editUser = new User(user);
    console.log(user);
    try{
         await User.updateOne({ _id : req.params.id } , editUser);
        res.status(201).json(editUser);
       
    }catch(e){
        res.status(409).json(e);
    }
} 
// export const deleteUser = async (req , res) => {
 
//     try{
//          await User.findByIdAndDelete({ _id : req.params.id } , editUser);
   
       
//     }catch(e){
//         res.status(409).json(e);
//     }
// } 

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};
