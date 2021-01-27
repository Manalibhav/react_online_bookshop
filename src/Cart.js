import React, { Component } from 'react'
import imgsrc10 from './images/wings.jpeg';
import imgsrc11 from './images/liars.jpg';
import imgsrc12 from './images/believe.jpeg';


export class Cart extends Component {
    render() {
        return (
            <div className="Cart">

<section id="portfolio" class="portfolio" >
      <div class="container">

        <div class="section-title">
          <h2 data-aos="fade-up"><strong>Welcome to your Cart</strong></h2>
        </div>


        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200"> 
		
      {/*}  <div class="col-lg-10 col-md-6 portfolio-item filter-app">  
<div class="row">		  
           <div class="col-md-6"> 
             <div><img src={imgsrc10} class="img-fluid" alt=""/>
           </div>
           </div>
		   <div class="col-md-6">
              <h4>Wings of Fire</h4>
              <p>Rate : 1000</p>
			  <p>Author : Dr. APJ Abdul Kalam</p>
			  <p>Rating : *****</p>
              <button>Buy</button>  
              <button>Add to Wishlist</button></div>
   
            
            </div>


          </div>
          <br/>*/}


<div class="col-lg-10 col-md-6 portfolio-item filter-web">
          <img src={imgsrc10} class="img-fluid" alt=""/>
            <h4>Wings of Fire</h4>
              <p>Price : 1000</p>
			  <p>Author : Dr. APJ Abdul Kalam</p>
			  <p>Rating : ****</p>
              <button>Buy</button>  
              <button>Add to Wishlist</button>
          </div>




          <div class="col-lg-10 col-md-6 portfolio-item filter-web">
          <img src={imgsrc11} class="img-fluid" alt=""/>
            <h4>We Were Liars</h4>
              <p>Price : 700</p>
			  <p>Author : E. Lockhart</p>
			  <p>Rating : ****</p>
              <button>Buy</button>  
              <button>Add to Wishlist</button>
          </div>

          <div class="col-lg-10 col-md-6 portfolio-item filter-web">
          <img src={imgsrc12} class="img-fluid" alt=""/>
               <h4>Believe in Yourself</h4>
              <p>Price : 200</p>
			  <p>Author : Murphy Joseph</p>
			  <p>Rating : ***</p>
			  <button>Buy</button>  
              <button>Add to Wishlist</button>
          

        </div>

</div>
</div>        
    </section>

            </div>
        )
    }
}

export default Cart
