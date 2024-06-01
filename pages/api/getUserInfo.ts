import axios from "axios";


export const getInfo=async(token:string)=>{

    const url = 'https://recruitment-api.vercel.app/get-info';
    
  
    try {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
          }
        });
        return { status: true, data: response.data };
      } catch (error) {
        return { status: false, data: error };
      }
  }