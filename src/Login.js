import React, { Component } from 'react';
import './App.css';

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
          window.location.href = "/Payment"
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
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
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
        if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@#$%&]).$/)) {
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
    <div class="container">
     <div class="card bg-white animated bounceInLeft" style={{marginTop:'5%',marginLeft:'3%'}}>
       <br/>
       <article class="card-body mx-auto" >
       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
       
        <h3 class="card-title mt-3 text-center" >Login Here</h3>
        <p class="divider-text">
                <br></br>
            </p>
        {/* <hr style={{borderBottom:" 1px solid black"}}/> */}
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

        <div class="form-group input-group">
          <div class="input-group-prepend">
              <span class="input-group-text" style={{width:'40px'}}> <i class="fa fa-user"></i> </span>
          </div>
        <input type="text" name="emailid" style={{width:'250px',height:'40px'}} placeholder="Enter your registered Email Id" value={this.state.fields.emailid} 
         onChange={ (e) => {this.handleChange(e);this.validateForm();} }
          onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
          <br/>
         {
          this.state.formSubmitted || this.state.touched.emailid
          ?
            <div className="errorMsg">{this.state.errors.emailid}</div>
          :
            ''
        }
        </div>
        
<div class="form-group input-group">
            <div class="input-group-prepend">
                    <span class="input-group-text" style={{width:'40px'}}> <i class="fa fa-lock"></i> </span>
                </div>
      <input type="password" name="password" style={{width:'250px',height:'40px'}} placeholder="Enter password" value={this.state.fields.password} 
         onChange={ (e) => {this.handleChange(e);this.validateForm();} }
          onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
         {
          this.state.formSubmitted || this.state.touched.password
          ?
           
            <div className="errorMsg">{this.state.errors.password}</div>
          :    ''
        }
        </div>
        <div class="form-group">
      <input type="submit" class="btn btn-primary btn-block" style={{width:'290px',height:'40px'}} value="Login"/><br/>
      {/* <button type="submit" style={{width:'330px',height:'40px'}} class="btn btn-primary btn-block">Login</button> */}
            
      </div>
      </form>
      <br/>
      </article>
  </div>
</div>
        );
        }
}

export default Login; 











// import React, { Component } from 'react';
// import { FormErrors } from './FormErrors';

// class Login extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       fields: {},
//       errors: {},
//       touched: {},
//       formSubmitted: false
//     }
// // this.handleChange = this.handleChange.bind(this);
//     this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
// };
// handleChange(e) {
//     let fields = this.state.fields;
//     console.log("dfddf",e.target.name,e.target.value);
//     fields[e.target.name] = e.target.value;
//     this.setState({
//       fields
//     });
// }

//   handleTouch(e){
//      let {touched} = this.state;
//     if(e.target.name && touched[e.target.name] != true){
//         touched[e.target.name] = true;
//          this.setState({
//           touched
//         });
//     }
//   }

//   submituserRegistrationForm(e) {
//     e.preventDefault();
//     this.setState({
//       formSubmitted: true
//     });
//     if (this.validateForm()) {
//         let fields = {};
//         fields["emailid"] = "";
//         fields["password"] = "";
//         this.setState({fields:fields});
//         this.setState({
//           formSubmitted: false
//         });
//         alert("You are Logged in Successfully");
//     }
// }
// validateForm() {
//   let fields = this.state.fields;
//       let errors = {};
//       let formIsValid = true;
//       console.log(fields, "fields");

//       if (!fields["emailid"]) {
//         formIsValid = false;
//         errors["emailid"] = "*Please enter your email-ID.";
//       }
//       if (typeof fields["emailid"] !== "undefined") {
//         //regular expression for email validation
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(fields["emailid"])) {
//           formIsValid = false;
//           errors["emailid"] = "*Please enter valid email-ID.";
//         }
//       }

//       if (!fields["password"]) {
//         formIsValid = false;
//         errors["password"] = "*Please enter your password.";
//       }
//       if (typeof fields["password"] !== "undefined") {
//         if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//           formIsValid = false;
//           errors["password"] = "*Please enter secure and strong password.";
//         }
//       }
//   this.setState({
//         errors: errors
//       });
//       return formIsValid;
//   }

//   render() {
//     return (
//     <div id="main-registration-container">
//      <div id="register" style={{height:'100%',width:'25%', margin:'auto', fontSize:'12px', border:'groove'}}  >
//        <br/>
//         <h5 style={{textAlign:'left'}}><strong>Login Here</strong></h5>
//         <hr style={{borderBottom:" 1px solid black"}}/>
//         <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

//         <label>Email Id</label> &nbsp;&nbsp;&nbsp;&nbsp;
//         <input type="text" name="emailid" placeholder="Email Id" value={this.state.fields.emailid} 
//          onChange={ (e) => {this.handleChange(e);this.validateForm();} }
//           onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
//          {
//           this.state.formSubmitted || this.state.touched.emailid
//           ?
//             <div className="errorMsg">{this.state.errors.emailid}</div>
//           :
//             ''
//         }
// <br/>
// <label style={{textAlign:'left'}}>Password</label>&nbsp;&nbsp;
//       <input type="password" name="password" placeholder="Enter password" value={this.state.fields.password} 
//          onChange={ (e) => {this.handleChange(e);this.validateForm();} }
//           onBlur = {(e) => {this.handleTouch(e);this.validateForm();} } />
//          {
//           this.state.formSubmitted || this.state.touched.password
//           ?
           
//             <div className="errorMsg">{this.state.errors.password}</div>
//           :    ''
//         }
//         <br/><br/>&nbsp;
//       <input type="submit" className="button" value="Login"/><br/>
//       </form>
//       <br/>
//   </div>
// </div>
//         );
//         }
// }

// export default Login;