import styled from "styled-components"
import React from "react"
const Selects=styled.div`
input {
    display: none;
    
  }
 
  label {
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
    
  }

  
  label span {
    position: relative;
    line-height: 22px;
    display:inline;
    text-align:center;
  }
  
  label span:before,
  label span:after {
    content: '';
  }
 

  label span:before {
    border: 1px solid #E5E5E5;
    width: 68px;
   height:56px;
   border-radius:5px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: top;
  }
  
  label span:after {
    background: #5375E2;
    width: 69px;
    height: 57px; border-radius:5px;
    position: absolute;
    top: -1px;
    left: 0px;
    transition: 300ms;
    opacity: 0;
  }

  label input:checked+span:after {
    opacity: 1;
  }

  body {
    background: #fbfbfb;
    font-family: Arial;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }`

  const RadioB=()=>{
    return(
    <Selects>
<label>
  <input type="radio" name="radio"/>
  <span>AN</span>
</label>

<label>
  <input type="radio" name="radio"  />
  <span >FN</span>
</label></Selects>
    )
  }
  export default RadioB