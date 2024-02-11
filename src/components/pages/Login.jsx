import {useState} from "react";

function Login() {
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

    }

    return ( 
        <div className="container">
            <h1 className="text-center mb-5">Login</h1>
            <form onSubmit={enviarDatos}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" 
                    className="form-label">Email address</label>
                    <input type="email" 
                    className="form-control" 
                    id="email"
                    onChange={handleInputChange} value={formulario.email} />
                    <div id="emailHelp" 
                    className="form-text">Nunca Compartiremos tu información personal a nadie !. </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="password"
                    onChange={handleInputChange} 
                    value={formulario.password} />
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
            </form>



        </div>

    );
}

export default Login;