

//JWT Token döndüren login APİ endpointi burda yazcaz

import axios from "axios";
import { UserCredentials } from "../../types/AuthTypes";



export const userLogin=async(userInfos:UserCredentials)=>{

  const url = 'https://recruitment-api.vercel.app/login';
  const data = {
    username: userInfos?.username,
    password: userInfos?.password
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return {status:true, data:response.data};
  } catch (error) {
    return {status:false, data:error}
  }
}