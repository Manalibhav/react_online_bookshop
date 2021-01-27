import React, { Component } from 'react'
import './Footer.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


export class Footer extends Component {
    render() {
        return (
            <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
   <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" ></link>

    <footer class="mainfooter" role="contentinfo" style={{backgroundColor:'#f5f5f5'}}>
    <div class="footer-middle">
    <div class="container">
    <div class="row">
      <div class="col-md-3 col-sm-6">
    
        <div class="footer-pad">
          <h4>QUICK LINKS</h4>
          <ul class="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">Home</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Contact">FAQS</a></li>
            <li><a href="#">News and Updates</a></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        
        <div class="footer-pad">
          <h4>Categories</h4>
          <ul class="list-unstyled">
           
            <li><Link to="/English">English</Link></li>
            <li><Link to="/Hindi">Hindi</Link></li>
            <li><Link to="/Marathi">Marathi</Link></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="footer-pad">
          <h4>Related</h4>
          <ul class="list-unstyled">
            <li><a href="#">With over 12 million books. Browse through variety of genres such as Fiction, Self help, Children's books, School textbooks, Higher education textbooks, and much more.</a></li>
            {/* {/* <li><a href="#">Police Department</a></li>
            <li><a href="#">Fire</a></li>
            <li><a href="#">Mayor and City Council</a></li>
            <li> 
              <a href="#"></a>
            </li> */}
          </ul>
        </div>
      </div>
      
    	<div class="col-md-3">
    		<h4>Follow Us</h4>
            <ul class="social-network social-circle list-inline"  style={{listStyleType:'none'}}>
             <li><a href="https://www.facebook.com/OnlineBookShop06/" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
             <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
             <li><a href="https://www.instagram.com/invites/contact/?i=149ccvcu06pqf&utm_content=krkskjx" class="icoInstagram" title="Instagram"><i class="fa fa-instagram"></i></a></li>
            </ul>				
		</div>
    </div>
    <hr/>
	<div class="row">
		<div class="col-md-12 copy">
			<p class="text-center">&copy; Copyright 2020 - Online Book Shop. All rights reserved.</p>
		</div>
	</div>
  </div>
  </div>
</footer>         
</div>
);
    }
}

export default Footer;

	