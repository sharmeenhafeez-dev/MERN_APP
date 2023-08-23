import Carousel from 'react-bootstrap/Carousel';
import './slider.css'; 

function Slider() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/excited-girl-open-up-shopping-bags-gasping-amazed-checking-out-gifts-her-with-happy-face-sta_1258-120743.jpg?w=900&t=st=1692041693~exp=1692042293~hmac=b4f707c2e4f8d8b7d1b789c05b2140cb74d035f43262d9739dd98a74777d842e"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.gcimagazine.com/files/base/allured/all/image/2021/02/gci.mintel_2021_global_consumer.png?auto=format%2Ccompress&q=70&w=700"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20210711/original/pngtree-beauty-skin-care-e-commerce-banner-picture-image_1115689.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
