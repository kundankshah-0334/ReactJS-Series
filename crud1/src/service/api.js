import axios from 'axios';

const URL = "";

export const adduser = async (data) => {
    try{
      await axios.post(`${URL}/add` , data) ;
    }catch(e){

    }
}