import { useEffect, useState } from "react"
import '../components/Prodcuts.css'

function Products() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((request) => request.json()).then((data) => setProducts(data))
    },[])


    function prepareProductView() {

        return products.map(product => (
            <div className="card" style={{width : '18rem'}}>
                <img src={product.image} className="card-img-top product-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        ));
    }

    const prepareSpinnerView = () => {

        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <>
            <div className="container" style={{padding: '10px 0 0 0'}}>
                {prepareProductView()}
            </div>
        </>
    )
}

export default Products;