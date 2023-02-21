import React from "react";

const Display = (props) => {
  //   console.log(props); //always a object

    const { dataInfo } = props; //destructuring of object

  return (
    <>
      My name is {dataInfo.firstName} and age is {dataInfo.age}, working as a
      {dataInfo.designation}.
    </>
  );
};

export default Display;

