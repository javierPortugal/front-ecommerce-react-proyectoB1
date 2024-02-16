import { useState, useEffect } from "react";
import { getProducts } from "../../services/Ecommerce.service";

function ListaProductos() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
            .then(response => {
                console.log(response.data.data);
                setProducts(response.data.data);
            })
            .catch(eror => {
                console.log(eror);
            })
    }, []);

    return (
        <>
            <div className="container  page">
                <h1>Productos</h1>
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <div classname="col-xs-12 col-sm-6 col-md-4 col-lg-4" key={product._id}>
                                    <div className="card mb-3">
                                        <img
                                            src={product.image}  alt="no_image"
                                            style={{maxHeight: "20 rem", minHeight: "20 rem", maxWidth: "30%"}}
                                        />
                                        <div className="card-body" style = {{heigh:"18rem",
                                          overflow: "hidden"}}>
                                            <h3>${product.price}</h3>
                                            <h4 className="card-title">{product.name}</h4>
                                            <small>{product.sku}</small>
                                            <p className="card-text">{product.description}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    );
}

export default ListaProductos;