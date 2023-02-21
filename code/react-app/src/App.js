import React, { Component } from "react";
import Display from "./Display";
import DisplayTwo from "./DisplayTwo";

// class based component
class App extends Component {
  state = {
    firstName: "alina",
    age: 20,
    designation: "developer",
    contact: {
      email: "admin@gmail.com",
    },
  };

  handleUpdate = () => {
    //to update the state
    //this is referring to App
    this.setState({
      firstName: "alex",
    });
  };

  //   whenever state changes, render method is called again (re-rendering)
  render() {
    return (
      //jsx
      //this is referring to App
      <>
        <Display dataInfo={this.state} />
        <button onClick={this.handleUpdate}>Update</button>

        <DisplayTwo />
      </>
    );
  }
}

export default App;

// React.createElement(App,
//   const data = Display(this.state) {

// })

{
  /* <button onclick="add()">Click</button> */
}

//this keyword - js
// console.log(this);//window

//diffing algo
//recoincilation process
