import React, { useState } from "react";
// const Selects = styled.div`
//     display: flex;
//     flex-direction: row;
//   input[type="radio"] {
//   border-radius: 5px;
//   border: 1px solid #5375e2;
//   width: 68px;
//   height: 56px;
//   background-color: white;
//   -webkit-appearance: none;
//   -moz-appearance: none;
// }
// input[type="radio"]:focus {
//   outline: none;
// }
// input[type="radio"]:checked {
//   background-color: #5375e2;
// }
// input[type="radio"]:checked ~ span:first-of-type {
//   color: white;
// }
// label span:first-of-type {
//   position: relative;
//     left: 29px;
//     font-size: 15px;
//     top: -55px;
//     color: #ABA9AE;
// }
// label span {
//   position: relative;
//   top: -12px;
// }
// `;
//  const RadioB = (props) => {
//   return (
//     <Selects style={{...props.style}}>
//       <label  >
//         <input  type="radio" name="options" value="FN"  />
//         <span>FN</span>
//       </label>
//       <br />
//       <label>
//         <input type="radio" name="options" value="AN" />
//         <span >AN</span>
//       </label>
//       <br />
//     </Selects>
//   );
// };
// export default RadioB
const Radio = () => {
  const [activeButtonFN, setActiveButtonFN] = useState(false);
  const [activeButtonBN, setActiveButtonBN] = useState(false);
  const FnClick = () => {
    setActiveButtonBN(activeButtonFN);
    setActiveButtonFN(!activeButtonFN);
   
  };

  const anClick = (e) => {
    setActiveButtonFN(activeButtonBN);
    setActiveButtonBN(!activeButtonBN);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "18px",
      }}
    >
      <button
        onClick={FnClick}
        
        style={{
          boxSizing: "border-box",
          height: "56px",
          width: "22.05px",
          borderRadius: "5px",
          border: " 1px solid #5375E2",
          padding: "17px 36px 11px 20px",
          background: `${activeButtonFN === true ? "#5375E2" : "white"}`,
          color: `${activeButtonFN === false ? "#5375E2" : "white"}`,
        }}> FN
      </button>
      <button
        onClick={anClick}
        style={{
          boxSizing: "border-box",
          height: "56px",
          width: "22.05px",
          borderRadius: "5px",
          border: " 1px solid #5375E2",
          padding: "17px 36px 11px 20px",
          background: `${activeButtonBN === true ? "#5375E2" : "white"}`,
          color: `${activeButtonBN === false ? "#5375E2" : "white"}`,
        }}
      >
        AN
      </button>
    </div>
  );
};
export default Radio;
