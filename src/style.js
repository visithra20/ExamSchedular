import styled from "styled-components"
const style=styled.select`.custom-select {
    position: relative;
    
  }
  
  .custom-select select {
    display: none;
  }
  
  .select-selected {
    background-color: white;
  }
  
  /*style the arrow inside the select element:*/
  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: black transparent transparent transparent;
  }
  
  /*point the arrow upwards when the select box is open (active):*/
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent Black transparent;
    top: 7px;
  }
  
  /*style the items (options), including the selected item:*/
  .select-items div,.select-selected {
    color:black;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
  }
  
  /*style items (options):*/
  .select-items {
    position: absolute;
    background-color: white;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }
  
  /*hide the items when the select box is closed:*/
  .select-hide {
    display: none;
  }
  
  .select-items div:hover, .same-as-selected {
    background-color: blue;
  }`