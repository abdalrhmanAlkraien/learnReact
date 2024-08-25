import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const url = "https://fakestoreapi.com/products/";
  const [product, setProduct] = useState({});
  const param = useParams();

  useEffect(() =>
                {fetch(url.concat(param.productId))
                    .then((response) => response.json())
                    .then((data) => setProduct(data))}
  ,[]);

  console.log(param);
  return <>
    <div className="card" style={{ width: "18rem" }}>
          <img
            src={product.image}
            className="card-img-top product-image"
            alt = {product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><b>{product.price}</b></p>
          </div>
    </div>
  </>;
  
}

export default ProductDetails;
