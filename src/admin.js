import React from 'react';
import axios from 'axios';
import './App.css';
class admin extends React.Component {

  state = {
    userName: '',
   
    mobileno:'',
  
    posts: []
  };

   handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };


  submit = (event) => {
    event.preventDefault();

    const payload = {
     userName: this.state.userName,
      mobileno: this.state.mobileno,
     
    };
    axios.get('http://localhost:4000/app/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
    };
    /*axios({
        url: '/api/save',
        method: 'POST',
        data: payload
      })
        .then(() => {
          console.log('Data has been sent to the server');
          this.resetUserInputs();
          this.getBlogPost();
        })
        .catch(() => {
          console.log('Internal server error');
        });;
    };*/
   

  resetUserInputs = () => {
    this.setState({
      userName: '',
      mobileno: ''
    });
  };

  displayBlogPost = (posts) => {

    


    return posts.map((post, index) => (
    
    <div class="card" style={{width:"500px",border:"2px solid black", marginLeft:"450px",textAlign:"left"}}>
      <div key={index} >
       <h3> Username:{post.userName}</h3>
        <h3>Mobile No:{post.mobileno}</h3>
      </div>
    </div>
      
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <h2 style={{marginLeft:'40px'}}>Click here to get user details</h2><br/><br/>
        <form onSubmit={this.submit}>
          

          <button style={{width:'40%',marginLeft:'40px'}}><h3>GET USER DATA</h3></button>
        </form>

        <div className="blog-">
          {this.displayBlogPost(this.state.posts)}
        </div>
      </div>



    );
  }
}


export default admin