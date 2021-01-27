//import logo from './logo.svg';
//import { Component } from 'react';
import './App.css';
import imgsrc1 from './images/wings.jpeg';
import imgsrc2 from './images/richpoor.jpg';
import imgsrc6 from './images/asur.jpg';
import imgsrc3 from './images/kite.jpg';
import imgsrc4 from './images/mrutyunjay.jpg';
import imgsrc5 from './images/good.jpg';
import slider1 from './images/slider2.jpg';
import slider2 from './images/slider3.jpg';
import slider3 from './images/slider1.jpg';
import Gallery from './Gallery';
//import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  
  
  return (
    
    
    <div className="main" >   
<div>

<section>
<div className="mainslider">
    <div class="carousel slide" data-ride="carousel">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height:"400px", width:"100%", display: "block"}}>
    <div class="carousel-item active">
      <img  src={slider1} class="tales"/> 
    </div>
    <div class="carousel-item">
      <img  src={slider2} class="tales"/>
    </div>
    <div class="carousel-item">
      <img  src={slider3} class="tales"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   </div>
   </div>
</section>


<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">


<br/><br/>
<center>
  <div class="controls-top" style={{fontSize: "30px"}}>
    <a class="glyphicon glyphicon-circle-arrow-left" href="#multi-item-example" data-slide="prev"></a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a class="glyphicon glyphicon-circle-arrow-right" href="#multi-item-example" data-slide="next"></a>
  </div>
  </center>

  <ol class="carousel-indicators">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
  </ol>


  <div class="carousel-inner" role="listbox">

    <div class="carousel-item active" style={{paddingLeft:'4%',paddingRight:'4%'}}>

      <div class="col-md-4">
       <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
          <img class="card-img-top" src={imgsrc5} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title"><Link to="/English">Good Vibes, Good Life</Link></h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span><br/>Author : Vex King  <br/>Price : 200/-</p>
<Link to = "/English" class="btn btn-primary">Buy Now</Link> 
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc2} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title"><Link to="/English">Rich Dad Poor Dad</Link></h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span><br/> Author : Robert T. Kiyosaki  <br/>Price : 350/-</p>
            <Link to = "/English" class="btn btn-primary">Buy Now</Link> 
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc6} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title"><Link to="/Marathi">Asur</Link></h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span> <br/> Author : Anand Neelkantan  <br/>Price : 450/-</p>
<Link to = "/Marathi" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div> 
    </div>

    <div class="carousel-item" style={{paddingLeft:'3%',paddingRight:'3%'}}>

      <div class="col-md-4">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc1} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title"><Link to="/English">Wings of Fire</Link></h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span><br/> Author : Dr. APJ Abdul Kalam  <br/>Price : 700/-</p>
<Link to = "/English" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc3} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title"><Link to="/English">The Kite Runner</Link></h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span><br/> Author :  Khaled Hosseini <br/>Price : 400/-</p>
<Link to = "/English" class="btn btn-primary">Buy Now</Link> 
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card mb-2" style={{borderRadius:'5px',border:'1px solid gray'}}>
        <img class="card-img-top" src={imgsrc4} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title"><Link to="/Marathi">Mrityunjaya</Link></h4>
            <p class="card-text">Rating : 
            <span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span>
<span class="fa fa-star checked" style={{color:"orange"}}></span> <br/> Author : Shivaji Sawant  <br/>Price : 450/-</p>
<Link to = "/Marathi" class="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
      


    </div>
  </div>
</div>
</div>
</div>
  );
}

export default App;
