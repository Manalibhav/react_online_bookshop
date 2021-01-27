import React, { Component } from 'react'
import i1 from './images/wof.jpg';
import i2 from './images/will.jpg';
import imgsrc1 from './images/wof.jpg';
import imgsrc2 from './images/diet.jpg';
import imgsrc3 from './images/ge.jpg';
import './gallery.css'
class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
            <div class="row">
  <div class="column">
  <div class="container">
  <div class="card">
    <img src={imgsrc1} alt="Snow" style={{width:'50%'}}/>
    <div class="card-body">
      <h5 class="card-title">Wings of Fire</h5>
      <p class="card-text">Rating : ***** <br/> Author : Dr. APJ Abdul Kalam  <br/>Price : 2000/-</p>
      <a href="#" class="btn btn-primary">Add to Cart</a> &nbsp;
      <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
  </div>
  </div>
  </div>
  <div class="column">
    <img src={imgsrc2} alt="Forest" style={{width:'50%'}}/>
  </div>
  <div class="column">
    <img src={imgsrc3} alt="Mountains" style={{width:'50%'}}/>
  </div>
</div>
</div>
        );
    }
}

export default Gallery
