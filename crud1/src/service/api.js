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