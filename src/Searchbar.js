import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import Register from './Register';

const data = [
    {
      key: 'English',
      value: 'Wings of Fire',
    },
    {
      key: 'Hindi',
      value: 'Rich Dad Poor Dad',
    },
    {
      key: 'Marathi',
      value: 'The Kite Runner',
    },
  ]

export class Searchbar extends Component {
  
    constructor(props) {
        super(props);
        this.state = {value:'',Book:'',}
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.setState = this.setState.bind(this);
     }
     
     handleKeyPress(e){
        
        let Book = this.state.value;
        if(Book === "Wings of Fire"){
            return(
                <Register />
            );
        }
    }
  
    render() {
        return (
            <div>
        <ReactSearchBox name="book"
          placeholder="Search for a book"
          data={data}
          onSelect={this.handleKeyPress}
          onFocus={() => {
            console.log('This function is called when it is focussed')
          }}
          onChange={value => console.log(value)}
          fuseConfigs={{
            threshold: 0.05,
          }}
          value={this.state.value}
        />
            </div>
        )
    }
}

export default Searchbar