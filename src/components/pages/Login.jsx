import portus from '../../src/img/portuslab-black.png';
import {useState} from "react";
import { loginService } from "../../services/Auth.service";

import { useAuth } from "../context/AuthContext";


function Login() {

    const { fnlogin } = useAuth();

    const [formulario, setFormulario]= useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event)=> {
        event.preventDefault();
        console.log(formulario);

        loginService(formulario)
        .then(response => {
            const token = response.data.data;
            fnlogin(token);
        }).catch(error =>{
            console.log(error);
        })   
    }

    return ( 
        
        <div className="container fondo page">
            
            <div className="row">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card ">
                        <img
                            src={portus} className="img-fluid"
                            alt="no_image"
                            style={{ maxHeight: "20rem", minHeight: "10rem" }}
                        />
                    </div>
                </div>

                

        </div>
           
           
            <h1 className="text-start mb-5 pt-4 ">Ingresa tus datos para acceder!</h1>
            

            <form onSubmit={enviarDatos}>
                <div className="mb-3 col-4">
                    <label htmlFor="exampleInputEmail1" 
                    className="form-label">Dirección Email</label>
                    <input type="email" 
                    className="form-control" 
                    id="email"
                    name="email"
                    onChange={handleInputChange} value={formulario.email} />
                    <div id="emailHelp" 
                    className="form-text">Nunca Compartiremos tu información personal a nadie !. </div>
                </div>

                <div className="mb-3 col-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
                    onChange={handleInputChange} 
                    value={formulario.password} />
                </div>
                
                <button type="submit" className="btn btn-primary">Acceder</button>
            </form>
            
        </div>

    );
}

export default Login;