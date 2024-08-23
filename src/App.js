import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import Slider from './components/Slider';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route element = {<><Slider/>
      <Products/></>} path='/'/>
      <Route path='/about' element = {<About/>} />
      <Route path='/product/:productId' element = {<ProductDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
