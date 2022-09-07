import styled from "styled-components";
import React from "react";

const Selects = styled.div`

    display: flex;
    flex-direction: row;
  input[type="radio"] {
  border-radius: 5px;
  border: 1px solid #5375e2;
  width: 68px;
  height: 56px;
  background-color: white;
  -webkit-appearance: none; 
  -moz-appearance: none;
}

input[type="radio"]:focus { 
  outline: none; 
}

input[type="radio"]:checked { 
  background-color: #5375e2;
}

input[type="radio"]:checked ~ span:first-of-type {
  color: white;
}

label span:first-of-type {
  position: relative;
    left: 29px;
    font-size: 15px;
    top: -55px;
    color: #ABA9AE;
}

label span {
  position: relative;
  top: -12px;
}
`;

const RadioB = (props) => {
  return (
    <Selects style={{...props.style}}>
      <label  >
        <input  type="radio" name="options"  />
        <span>FN</span>
      </label>
      <br />
      <label>
        <input type="radio" name="options" />
        <span >AN</span>
      </label>
      <br />
    </Selects>
  );
};
export default RadioB;
