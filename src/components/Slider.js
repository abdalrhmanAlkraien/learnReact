import image1 from '../images/image1.jpg'
import '../components/Slider.css'
function Slider() {
  return (
    <>
  
    <div className='container'>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {image1} className="d-block w-100 slider-img-size" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/06/21/88/92/360_F_621889237_RrEunt4ybaBYfrJElszI0JbELSyTHx9W.jpg" className="d-block w-100 slider-img-size" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" className="d-block w-100 slider-img-size" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

  </>
  );
}

export default Slider;
