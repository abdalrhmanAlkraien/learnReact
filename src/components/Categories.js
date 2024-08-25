import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Categories(props) {

  const [categories, setCategories] = useState([]);


  const activeCategory = (category) => {

    console.log(category);
    console.log("props value", props.cateItem)
    if(category)
      props.setCate(category)
  };

  // create a new useEffect with category to change the active categoiy.
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.push("All")
        return setCategories(data);
      });
  }, []);

  const viewContent = () => {
    return categories.map((element, index) => {
      
      console.log(props.cateItem)
      if (element == props.cateItem) {

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
