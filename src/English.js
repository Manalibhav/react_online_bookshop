import React, { Component } from 'react'
import imgsrc1 from './images/good.jpg';
import imgsrc2 from './images/wings.jpeg';
import imgsrc3 from './images/richpoor.jpg';
import imgsrc5 from './images/still.jpeg';
import imgsrc6 from './images/diet.jpg';
import imgsrc7 from './images/journ.jpeg';
import imgsrc8 from './images/kite.jpg';
import imgsrc9 from './images/safe.jfif';

import './gallery.css'

class English extends React.Component {
    render() {
        return (
<div>
  <br/>
          <p style={{color:'red' ,textAlign:'center',fontSize:'18px'}}>Love English books??Get it here</p>

          <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
          <br/>
            <div class="carousel-inner" role="listbox">

              <div class="carousel-item active">
              <div class="col-md-3" style={{width:"22+rem", height:"25+rem"}}>
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc3} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Rich Dad Poor Dad</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span><br/> Author : Robert T. Kiyosaki  <br/>Price : 350/-</p>
            <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>


               

                <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc8} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">The Kite Runner</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span><br/> Author : Khaled Hosseini  <br/>Price : 120/-</p>
          <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>

       
      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc9} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Safe With Me</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span><br/> Author : K.L. Slater <br/>Price : 199/-</p>
            <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>

               

      <div class="col-md-3">
                 <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
                    <img class="card-img-top" src={imgsrc1} alt="Card image cap"/>
                    <div class="card-body">
                      <h4 class="card-title">Good Vibes, Good Life</h4>
                      <p class="card-text">Rating : 
                      <span class="fa fa-star checked" style={{color:"orange"}}></span>
          <span class="fa fa-star checked" style={{color:"orange"}}></span>
          <span class="fa fa-star checked" style={{color:"orange"}}></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span><br/>Author : Vex King  <br/>Price : 200/-</p>
                     <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
                    </div>
                  </div>
                </div>

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc5} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">A Still Life</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span><br/> Author : Josie George  <br/>Price : 120/-</p>
           <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc6} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Eating in the Age of Dieting</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span><br/> Author : Rutuja Diwekar <br/>Price : 100/-</p>
            <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc7} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Journey to Freedom</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span><br/> Author : Sergei Ovsiannikov  <br/>Price : 220/-</p>
         <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>

     


      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc2} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Wings of Fire</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span><br/> Author : Dr. APJ Abdul Kalam  <br/>Price : 700/-</p>
           <Link to = "/Register" class="btn btn-primary">Buy Now</Link>
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

export default English
