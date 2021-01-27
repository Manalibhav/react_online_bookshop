import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import imagesrc from './images/logo.png';
import Register from './Register';
import Gallery from './Gallery';
import English from './English';
import Hindi from './Hindi';
import Marathi from './Marathi'
import Login from './Login';
import Contact from './Contact';
import Footer from './Footer';
import Searchbar from './Searchbar';
import admin from './admin';
import Payment from './Payment';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

const routing=(
  <Router>
<div>
      
      <header>
      <img  src={imagesrc} alt="" style={{float:'left'}}/>
        
     </header>

    <article className="topnav">
       <ul>
         <li><Link to="/"><i class="fa fa-fw fa-home"></i>Home</Link></li> 
           <li className="nav-item-dropdown">
             <Link className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbarDropdownMenuLink"
             role="button" area-aria-haspopup="true" area-aria-expanded="false"><i class="glyphicon glyphicon-picture"></i>Gallery
             </Link>
             <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <li><Link className="dropdown-item" to="/English">English</Link></li>
               <li><Link className="dropdown-item" to="/Hindi">Hindi</Link></li>
               <li><Link className="dropdown-item" to="/Marathi">Marathi</Link></li>
               </ul>
             </li>
             
             <li><Link to="/Register"><i class="fa fa-fw fa-user"></i>Register</Link></li>
             <li><Link to="/Login"><i class="fa fa-fw fa-user"></i>Login</Link></li>
      
         <li><a href="/Contact"><i class="fa fa-fw fa-envelope"></i>Contact Us</a></li>
         <li><a href="/admin"><i class="fa fa-fw fa-user"></i>Admin</a></li>
         <li><a href="/Searchbar"><i class="fa fa-fw fa-search"></i>Search Box</a></li>

       </ul>   

</article> 

<Switch>
<Route exact path="/" component={App}/>
<Route exact path="/Register" component={Register}/>
<Route exact path="/Gallery" component={Gallery}/>
<Route exact path="/English" component={English}/>
<Route exact path="/Hindi" component={Hindi}/>
<Route exact path="/Marathi" component={Marathi}/>
<Route exact path="/Login" component={Login}/>
<Route exact path="/Contact" component={Contact}/>
<Route exact path="/admin" component={admin}/>
<Route exact path="/Payment" component={Payment}/>
<Route exact path="/Searchbar" component={Searchbar}/>
</Switch>
</div>
<Footer/>
</Router>
)
ReactDOM.render(
  routing,
   document.getElementById('root')
 );