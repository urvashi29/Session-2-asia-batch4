import React, { Component } from "react";

class DisplayTwo extends Component {
  state = {
    empData: [
      {
        name: "alex",
        age: 20,
        id: 1,
        designation: "developer",
      },
      {
        name: "harry",
        age: 23,
        id: 2,
        designation: "manager",
      },
      {
        name: "alina",
        age: 29,
        id: 3,
        designation: "testing",
      },
    ],
  };

  render() {
    // List
    const empList = this.state.empData.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <p>{item.designation}</p>
          <p>{item.name}</p>
        </React.Fragment>
      );
    });

    return <>{empList}</>;
  }
}

export default DisplayTwo;

//let arr = [90, 10, 20, 30, 40];//array of number
// let colors = ['pink', 'red', 'black', 'green'];//array of strings

//array of object
// let emp = [
//   {
//     name: "alex",
//     age: 20,
//   },
//   {
//     name: "harry",
//     age: 23,
//   },
//   {
//     name: "alina",
//     age: 29,
//   },
// ];

// let arr = [90, 10, 20, 30, 40];

// let t = arr.map((ele) => {
//   return ele * 2;
// });

// for(let i = 0;i<arr.length ;i++) {
//     console.log(arr[i]);
// }
