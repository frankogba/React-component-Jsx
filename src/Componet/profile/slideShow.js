import React  from 'react';
import {Carousel } from 'react-bootstrap';
import PhotoImage1 from '../../Asset/lagostress.jpg';
import PhotoImage2 from '../../Asset/joyful.jpg';
import PhotoImage3 from '../../Asset/ReactImg.jpg';


function slideShow () {
  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PhotoImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>The ever bustling and hustling of ilu Eko.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PhotoImage2}
          alt="Second slide"/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>itesiwaju omo Eko lo.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PhotoImage3}
          alt="Third slide"
           />

          <Carousel.Caption>
          <h3>third slide label</h3>
          <p> Oluwa ni nsola.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default slideShow;
