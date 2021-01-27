import React, { Component } from 'react'
import imgsrc1 from './images/mrutyunjay.jpg';
import imgsrc2 from './images/asur.jpg';
import imgsrc3 from './images/yayati.jpg';
import imgsrc4 from './images/chanakya.png';
import imgsrc5 from './images/duniyadari.jpg';
import imgsrc6 from './images/nat.jfif';
import imgsrc7 from './images/prakash.jfif';
import imgsrc8 from './images/shyam.jpg';
import imgsrc9 from './images/vishram.jpg';
import './gallery.css'
import { Link } from 'react-router-dom';

class Marathi extends React.Component {
    render() {
        return (
          <div>
          <br/>
          <p style={{color:'red' ,textAlign:'center',fontSize:'18px'}}>Love Marathi books??Get it here</p>

          <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
          <br/>
            <div class="carousel-inner" role="listbox">
          
              <div class="carousel-item active">
              <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc1} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Mrityunjaya</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span> <br/> Author : Shivaji Sawant  <br/>Price : 450/-</p>
            <Link to="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</Link>
          </div>
        </div>
      </div> 



      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc2} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Asur</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span> <br/> Author : Anand Neelkantan  <br/>Price : 450/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc3} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Yayati</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span> <br/> Author : Vishnu Sakharam Khandekar  <br/>Price : 230/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc4} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Chanakya Neeti</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span> <br/> Author : B. K. Chaturvedi  <br/>Price : 120/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc5} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Duniyadari</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span> <br/> Author : Suhas Hirwalkar  <br/>Price : 349/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc7} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Prakash Vata</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span> <br/> Author : Dr. Prakash Amte  <br/>Price : 200/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a> 
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc8} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Shyamchi Aaie</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span> <br/> Author : Pandurang Sadashiv Sane  <br/>Price : 100/-</p>
            <a href="/Register" class="btn btn-primary" style={{color:"white"}}>Buy Now</a>
          </div>
        </div>
      </div> 

      <div class="col-md-3">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc9} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Vishram</h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span> <br/> Author : Shivaji Sawant  <br/>Price : 200/-</p>
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

export default Marathi
