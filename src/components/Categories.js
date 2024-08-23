import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Categories(props) {

  const [categories, setCategories] = useState([]);


  const activeCategory = (category) => {

    console.log(category);
    console.log("props value", props.cateItem)
    props.setCate(category)
  };

  // create a new useEffect with category to change the active categoiy.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        return setCategories(data);
      });
  }, []);

  useEffect(() => {

  })
  const viewContent = () => {
    return categories.map((element, index) => {

      if (props.cateItem == null) {

        return (<li className="nav-item">
          <Button key={element} className="nav-link" href="/#" onClick= {()=> {activeCategory(element)}}>
            {element}
          </Button>
        </li>)
      } else if (element == props.cateItem) {

        return (<li className="nav-item">
          <Button key={element} className="nav-link active" href="/#" onClick= {()=> {activeCategory(element)}}>
            {element}
          </Button>
        </li>)
      } else {

        return (<li className="nav-item">
          <Button key={element} className="nav-link" href="/#" onClick= {()=> {activeCategory(element)}}>
            {element}
          </Button>
        </li>)
      }
    });
  };

  const categoiesView = () => {
    return <ul className="nav nav-tabs">{viewContent()}</ul>;
  };

  return (
    <>
      <div className="container" style={{ marginTop: '10px' }}>{categoiesView()}</div>
    </>
  );
}

export default Categories;
