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