import React, { Component } from 'react'
import imgsrc1 from './images/anand.jpg';
import imgsrc2 from './images/devta.jpg';
import imgsrc3 from './images/gaban.png';
import imgsrc4 from './images/godan.jpg';
import imgsrc5 from './images/kamayani.jpg';
import imgsrc6 from './images/lala.jpg';
import imgsrc7 from './images/redhorse.jpg';
import imgsrc8 from './images/vitamin.jpg';
import imgsrc9 from './images/richhindi.jfif';

import './gallery.css'

class Hindi extends React.Component {
    render() {
        return (
          <div>
            <br/>
          <p style={{color:'red' ,textAlign:'center',fontSize:'18px'}}>Love Hindi books??Get it here</p>

          <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
          <br/>
            <div class="carousel-inner" role="listbox">
          
              <div class="carousel-item active">
          



              <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc5} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Kamayani</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span> <br/> Author : Jayshankar Prasad <br/>Price : 150/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a>
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc6} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Lala Harpal ke Joote</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span> <br/> Author : Subhash Chandra Kushwaha  <br/>Price : 99/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc7} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Kala Ghoda</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span> <br/> Author : Ashwini Malhotra <br/>Price : 199/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 


              <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc1} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Anand Math</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span><br/> 
            Author : Bankimchandra Chatterjee <br/>Price : 250/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a>
          </div>
        </div>
      </div>  

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc2} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Gunahon ka Devta</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span> <br/> Author : Dharmavir Bharti  <br/>Price : 120/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc3} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Gaban</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span> <br/> Author : Premchand <br/>Price : 120/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc4} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Godan</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span> <br/> Author : Jai Ratan & P. Lal <br/>Price : 140/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

     

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc8} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Vitamin Zindagi</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span> <br/> Author : Lalit Kumar <br/>Price : 160/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 
                </div>
                </div>
                </div>
                </div>
        );
    }
}

export default Hindi
