
import './App.css';

import React, { Component } from 'react'
 
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"jawher",
            bio:'...',
            profession:'etudiant',
            img:'./jawher.jpg',
            toggle:true
         }
    }
    toggle = () => {
        this.setState({ toggle: !this.state.toggle });
      };
      componentDidMount() {
        console.log("App Mounted");
        setInterval(() => {
          this.setState({toglle:this.state.toglle})
        },1000 );
      }
    render() { 
        return ( 
            <div>
            {this.state.toggle ? (
              <div>
               <h1>{this.state.name}</h1>
               <h2>{this.state.bio}</h2>
               <h2>{this.state.profession}</h2>
               <img src="./jawher.jpg" alt="jawher" />
               </div>
            ) : null}
            <button onClick={this.toggle}>click</button>
            <hr />
         
          </div>
        );
      }
    }
    
export default App ;
   
