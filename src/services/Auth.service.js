
import axios from 'axios';
const WS_PATH = import.meta.env.VITE_URL_API;
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


//Registro de usuario
const signUpService = async (data)=>{
    console.log("Entro a signup Service");
    const response = await axios.post(WS_PATH +'/users', data);
    return response;
    
};

//perfil de usuario
const profileService = async (data)=>{
    console.log("Entro a profile Service");
    //como mando token de storage
    const config = {
        headers:{
            Authorization:`Bearer ${window.localStorage.getItem(import.meta.env.VITE_TKN_NAME)}`
        }

    };
    const response = await axios.get(WS_PATH +'/users', config);
    return response;
    
};

const updateProfileService = async (data) => {
    console.log("Entro a updateProfileService");
    const config = {
        headers: {
            Authorization: `Bearer ${window.localStorage.getItem(import.meta.env.VITE_TKN_NAME)}`
        }
    };
    const response = await axios.put(WS_PATH + '/users', data, config);
    return response;
};

export {
    loginService, 
    signUpService, 
    profileService,
    updateProfileService
};





