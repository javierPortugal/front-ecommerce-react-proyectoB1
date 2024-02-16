
import axios from 'axios';
const WS_PATH = import.meta.env.VITE_URL_API;
//const WS_PATH = "https://api-s18-proyecto.onrender.com";

const getProducts = async (data) => {
    console.log("Entro a products");
    const response = await axios.get(WS_PATH +'/products');
   
    return response;
    
};

export {getProducts};





