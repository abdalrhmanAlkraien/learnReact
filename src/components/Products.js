import { useEffect, useState } from "react";
import "../components/Prodcuts.css";
import { Link } from "react-router-dom";
import Categories from '../components/Categories';


function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((request) => request.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    console.log("from Products " + category)
    if(category)
    fetch("https://fakestoreapi.com/products/category" + "/" + category)
      .then((request) => request.json())
      .then((data) => setProducts(data));

  }, [category]);

  function prepareProductView() {
    return products.map((product) => (
      <div className="col">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={product.image}
            className="card-img-top product-image"
            alt = {product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{checkDescription(product.description)}</p>
            <p className="card-text"><b>{product.price}</b></p>
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
    ));
  }

  const checkDescription = (desc)=> desc.size < 150 ? desc : desc.slice(0,150) 

//   const prepareSpinnerView = () => {
//     <div className="d-flex justify-content-center">
//       <div className="spinner-border" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     </div>;
//   };

  return (
    <> 
      <div className="container text-center"  >
      <div><Categories cateItem= {category} setCate = {setCategory}/></div>
        <div className="row" style={{ margin: "50px 0 0 0" }}>
        {prepareProductView()}
        </div>
      </div>
    </>
  );
}

export default Products;
