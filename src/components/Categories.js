import { useEffect, useState } from "react";

function Categories() {
  const [category, setCategory] = useState([]);

  // create a new useEffect with category to change the active categoiy.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setCategory(data);
      });
  }, []);

  const viewContent = () => {
    return category.map((element, index) => {
      if (index == 0) {
        return (
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              {element}
            </a>
          </li>
        );
      } else {
        return (
          <li className="nav-item">
            <a className="nav-link" href="#">
              {element}
            </a>
          </li>
        );
      }
    });
  };

  const categoiesView = () => {
    console.log(viewContent());
    return <ul className="nav nav-tabs">{viewContent()}</ul>;
  };

  return (
    <>
      <div className="container" style={{marginTop: '10px'}}>{categoiesView()}</div>
    </>
  );
}

export default Categories;
