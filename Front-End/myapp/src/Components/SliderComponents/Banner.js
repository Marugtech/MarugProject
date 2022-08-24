import Carousel from 'react-bootstrap/Carousel';
import './../SliderComponents/Banner.css';
import Bannerimg1 from './../../assets/Banner/Banner-img-1.jpeg'
import Bannerimg2 from './../../assets/Banner/banner-img-2.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Banner() {
  return (
    <div className='baner-bg'>
      <Container>
        <Carousel className='' indicators={false} controls={false}>
          <Carousel.Item interval={1000}>
            <Row className='Banner-Img'>
              <Col xs={6} md={3}>
                <h2 className='bnr-text-h2'>Enjoying Our</h2>
                <h1 className='bnr-text-h1'>Best Offer</h1>
                <p className='bnr-text-h1'>With quick delivery</p>
                <Button style={{ backgroundColor: '#d10000', boxShadow: 'none', borderStyle: 'none' }} className='bnr-btn'>Order Now</Button>
              </Col>
              <Col xs={6} md={3}>
                <img className="bnr-img" src={Bannerimg1} alt="First slide" />
              </Col>
              <Col xs={6} md={3}>
                <img className="bnr-img center-img" src={Bannerimg2} alt="First slide" />
              </Col>
              <Col xs={6} md={3}>
                <img className="bnr-img right-img" src={Bannerimg1} alt="First slide" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Row className='Banner-Img'>
              <Col xs={6} md={3}>
                <h2 className='bnr-text-h2'>Enjoying Our</h2>
                <h1 className='bnr-text-h1'>Just today</h1>
                <p className='bnr-text-h1'>With quick delivery</p>
                <Button style={{ backgroundColor: '#d10000', boxShadow: 'none', borderStyle: 'none' }} className='bnr-btn'>Order Now</Button>
              </Col>
              <Col xs={6} md={3}>
                <img className="bnr-img" src={Bannerimg2} alt="First slide" />
              </Col>
              <Col xs={6} md={3}>
                <img className="bnr-img center-img" src={Bannerimg1} alt="First slide" />
              </Col>
              <Col xs={6} md={3}>
                <img className="bnr-img right-img" src={Bannerimg2} alt="First slide" />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Banner;