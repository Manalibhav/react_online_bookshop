import React, { Component } from 'react';
import axios from 'axios';
import './Contact.css'
class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lname:'',
      email: '',
      contact: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '',lname: '', email: '',contact: '',message: ''})
  }
  
  render() {
    return(
      <div className="containercon">
        <div class="wrapper animated bounceInLeft">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
        {/* <link rel="stylesheet" href="public/css/style.css"></link> */}

        <div class="company-info">
        <h3>Online Book store</h3>
        <ul>
          <li><i class="fa fa-road"></i> Contact us here</li>
          <li><i class="fa fa-phone"></i> +91 7028590010</li>
          <li><i class="fa fa-envelope"></i> renukamatekar2610@gmail.com</li>
        </ul>
      </div>

      <div class="contact">
        <h3>Connect with us</h3>
        <hr/>
        <br/>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          
            <p>
              <label htmlFor="name">First Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter first name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </p>

              <p>
              <label htmlFor="lname">Last Name</label>
              <input type="text" className="form-control" id="lname" placeholder="Enter last name" value={this.state.lname} onChange={this.onLNameChange.bind(this)} />
              </p>
          
            <p>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email id" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </p>

            <p>
              <label htmlFor="contact">Contact Number</label>
              <input type="number" className="form-control" id="contact"  placeholder="Enter contact number" aria-describedby="contact" value={this.state.contact} onChange={this.onContactChange.bind(this)} />
            </p>
          
         
          <p class='full'>
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" placeholder="Write your suggestions here" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </p>
          
          <p class='full'>
          <button type="submit" className="btn btn-primary">Submit</button>
          </p>
        </form>
        </div>
        <br/>
        </div>
      </div>
      
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }
  onLNameChange(event) {
	  this.setState({lname: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  onContactChange(event) {
	  this.setState({contact: event.target.value})
  }

  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default Contact;