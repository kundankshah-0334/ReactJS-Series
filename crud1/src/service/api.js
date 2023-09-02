import axios from 'axios';

const URL = "http://localhost:8000";

export const adduser = async (data) => {
    try{
      await axios.post(`${URL}/add` , data) ;
    }catch(e){
      console.log(e);

    }
}

export const getUser = async () => {
    try{
      return await axios.get(`${URL}/all`) ;
    }catch(e){
      console.log(e);
    }
}
export const getSingleUser = async (id) => {
    try{
      return await axios.get(`${URL}/${id}`) ;
    }catch(e){
      console.log(e);
    }
}

export const editUser = async (user ,id) => {
  try{
    const response = await axios.post(`${URL}/${id}`, user);
    return response.data;
  } catch(e){
    console.log("error last error");
  }
}

// export const deleteUser = async (id) => {
//   try{
//     return await axios.delete(`${URL}/${id}`);
  
//   } catch(e){
//     console.log("delete last error");
//   }
// }


export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data; // Return the deleted item or a success message if needed.
  } catch (error) {
    console.error(`Error deleting user with ID ${id}: ${error.message}`);
    throw error; // Re-throw the error to let the caller handle it.
  }
};
