import React, { Component } from 'react';
import { FormErrors } from './FormErrors';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      touched: {},
      formSubmitted: false
    }
// this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
};
handleChange(e) {
    let fields = this.state.fields;
    console.log("dfddf",e.target.name,e.target.value);
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
}

  handleTouch(e){
     let {touched} = this.state;
    if(e.target.name && touched[e.target.name] != true){
        touched[e.target.name] = true;
         this.setState({
          touched
        });
    }
  }

  submituserRegistrationForm(e) {
   
    e.preventDefault();
    this.setState({
      formSubmitted: true
    });
    if (this.validateForm()) {
        let fields = {};
        fields["emailid"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        this.setState({
          formSubmitted: false
        });
        if (window.confirm("Login Succesful !!")) {
          document.location.href = "/Payment",true;
        }
       
    }
}
validateForm() {
  let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      console.log(fields, "fields");

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }
      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }
      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }
  this.setState({
        errors: errors
      });
      return formIsValid;
  }

  render() {
    return (
      
    <div id="main-registration-container">
     <div class="card" id="register" style={{height:'100%',width:'25%', margin:'auto', fontSize:'12px', border:'groove'}}  >
       <br/>
        <h5 style={{textAlign:'center'}}><strong>Login Here</strong></h5>
        <hr style={{borderBottom:" 1px solid black"}}/>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <br/><br/>
        <label>Email Id</label> &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="emailid" placeholder="Email Id" value={this.state.fields.emailid} 
         onChange={ (e) => {this.handleChange(e);this.validateForm();} }
          onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
         {
          this.state.formSubmitted || this.state.touched.emailid
          ?
            <div className="errorMsg" style={{color:"red"}}>{this.state.errors.emailid}</div>
          :
            ''
        }
<br/>
<label style={{textAlign:'left'}}>Password</label>&nbsp;&nbsp;
      <input type="password" name="password" placeholder="Enter password" value={this.state.fields.password} 
         onChange={ (e) => {this.handleChange(e);this.validateForm();} }
          onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
         {
          this.state.formSubmitted || this.state.touched.password
          ?
           
            <div className="errorMsg" style={{color:"red"}}>{this.state.errors.password}</div>
          :    ''
        }
        <br/><br/>&nbsp;
      <input type="submit" className="button" style={{width:'300px',height:'30px'}} class="btn btn-primary btn-block" value="Login"/><br/>
      </form>
      <br/>
  </div>
</div>
        );
        }
}

export default Login;
