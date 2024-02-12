
import axios from 'axios';
const WS_PATH = "https://api-ecommerce-proyectob1.onrender.com";
//const WS_PATH = "https://api-s18-proyecto.onrender.com";

const loginService = async (data)=>{
    console.log("Entro a Login Service");
    const response = await axios.post(WS_PATH +'/login', data);
   //const WS_PATH_CMPLT = (WS_PATH + '/login');
   //console.log(WS_PATH_CMPLT);
    //const response = await axios.post ("https://api-ecommerce-proyectob1.onrender.com/login", data);
    //const response = await axios.post (WS_PATH_CMPLT, data);
    return response;
    
};

export {loginService};





