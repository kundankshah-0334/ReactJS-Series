import axios from 'axios';

const URL = "http://localhost:8000";

export const adduser = async (data) => {
    try{
      await axios.post(`${URL}/add` , data) ;
    }catch(e){
      console.log(e);

    }
}