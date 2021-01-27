import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
export class Register extends Component {
    constructor()
    {   super()
        this.state = {
            userName:'',
            emailid:'',
            mobileno:'',
            password:'',
           
        }
        this.changefullName = this.changefullName.bind(this)
       
        this.changeemail = this.changeemail.bind(this)
        
        this.changenumber = this.changenumber.bind(this)
       
        this.changepassword = this.changepassword.bind(this)
       
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    changefullName(event)
    {
        let userName=event.target.value
        let err='';
        
        if(userName.length==0 || !userName.match(/^[a-zA-Z]+$/)){
               err=<strong>Please enter valid Name</strong>;
      }
      this.setState({
        userName:event.target.value
    })
        this.setState({errorMsg:err})
    }
    changeemail(event)
    {
      let emailid=event.target.value
      let err='';
        
         if(emailid.length==0  || !emailid.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
      err=<strong>Please enter valid Email Address</strong>;
         }
    this.setState({
        emailid:event.target.value
    })
      this.setState({errorMsg:err})
    }
    

    changenumber(event)
    {
      let mobileno=event.target.value
      let err='';
       

        if (!Number(mobileno)) { 
          err = <strong>Your Contact must be a number</strong>; 
    } 
    else if(mobileno.length!=10 || mobileno.length==0)
    {
      err = <strong>Enter valid number</strong>; 
    }
    this.setState({
        mobileno:event.target.value
    })
      this.setState({errorMsg:err})
    }
    changepassword(event)
    {
      let password=event.target.value
      let err='';
       
  
    if(password===''){
    err=<strong>Password cant be Empty</strong>;}
    this.setState({
        password:event.target.value
    })

    this.setState({errorMsg:err})
    }
   



    onSubmit(event)
    {
        event.preventDefault()
         
        alert('Registration succesful');
        const registered = {
            userName:this.state.userName,
            emailid:this.state.emailid,
            mobileno:this.state.mobileno,
            
            password:this.state.password,
            //confirmpassword:this.state.confirmpassword,
           /* <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input class="form-control" name="confirmpassword" placeholder="Confirm password" type="password"  value={this.state.confirmpassword} onChange={ this.changeconfirmpassword }   />
                
            </div>  */          
        }
        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data))
        alert('Thank you for registering..Please Login');
        this.setState({
            userName:'',
            emailid:'',
            mobileno:'',
            
            password:'',
            
        })
    }
   
    render() {
        return (
       
        <div>
            
            <div class="container" >
            <br></br>
            <div class="card bg-white animated bounceInLeft" style={{border:' 1px solid black',marginTop:'5%' }}>
            <article class="card-body mx-auto" style={{maxWidth:'500px'}}>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
       
            <h3 class="card-title mt-3 text-center">Create Account</h3>
            <p class="text-center">Get started with your free account</p>
            <p class="divider-text">
                <br></br>
            </p>
            <form onSubmit={this.onSubmit}>
            <div class="form-group input-group">
            <div class="input-group-prepend">
                    <span class="input-group-text" style={{width:'40px'}}> <i class="fa fa-user"></i> </span>
                 </div>
                <input name="userName" class="form-control" style={{width:'250px',height:'40px'}} placeholder="Full name" type="text" value={this.state.fullname}
              onChange={this.changefullName} />
                 
                 </div>
                 <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" style={{width:'40px'}}> <i class="fa fa-envelope"></i> </span>
                 </div>
                <input name="emailid" class="form-control" style={{width:'250px',height:'40px'}} placeholder="Email address" type="text"  value={this.state.email}  onChange={ this.changeemail }/>
               
            </div>
           
            <div class="form-group input-group">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style={{width:'40px'}}> <i class="fa fa-phone"></i> </span>
                </div>
                
                <input name="mobileid" class="form-control" style={{width:'250px',height:'40px'}} placeholder="Phone number" value={this.state.number}  name="number" onChange={ this.changenumber }  />
                

            </div>
            
            <div class="form-group input-group">
            <div class="input-group-prepend">
                    <span class="input-group-text" style={{width:'40px'}}> <i class="fa fa-lock"></i> </span>
                </div>
                <input class="form-control" name="password" style={{width:'250px',height:'40px'}} placeholder="Create password" type="password"  value={this.state.password} onChange={ this.changepassword } />
                </div>
                
            <div class="form-group">
            <p style ={{color : 'red'}}>{this.state.errorMsg}</p>
                <button type="submit" style={{width:'330px',height:'40px'}} class="btn btn-primary btn-block"  >SAVE</button>
            </div> 
            <p class="text-center">Have an account? <a href="./Login">Log In</a> </p>
            </form>
            </article>
            </div>
            </div>
           

        </div>
     
        )
    }
}

export default Register