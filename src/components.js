//import { data } from "@syncfusion/ej2";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

// import { styleSheet } from "@dash-ui/styles";
// import Apps from "../pages/filter";
// import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'
// import 'bootstrap/dist/css/bootstrap.css';
// import Dropdown from 'react-bootstrap/Dropdown';

// const Selected = styled.div`

//  {

// &:hover {
//     background-color: #5375e2;
//     color: #fff;
//   }}

// `
const Block = styled.div`
.custom-select {
  position: relative;
  
}
.custom-select select {
  display: none;
}
.select-selected {
  background-color: white;
}
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
.select-selected.select-arrow-active:after {
  border-color: transparent transparent Black transparent;
  top: 7px;
}
.select-items div,.select-selected {
  color:black;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}
.select-items {
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: blue;
}


    /* background-color: white;
    
    
    border: 1px solid transparent;
    cursor: pointer;
    &:hover {
      background-color: #5375E2;
    } */
  `;
export const Dropdown = (props) => {
  const { data, onChange = () => null } = props;

  return (
    //    <Selected >
<div class="custom-select">

    <select
      style={{
        boxSizing: "borderBox",
        display: "flex",
        flexDirection: "row",
        justifycontent: "center",
        alignitems: "center",
        MarginLeft: "51.12px",
        gap: "8px",
        width: "344px",
        height: "56px",
        background: "#FFFFFF",
        border: "1px solid #E8E8EA",
        borderRadius: "5px",
        ...props.style,
      }}
      onChange={onChange}
    >
   
              
      {data.map((item) => {
        return <option value={item.id}>{item?.name || item}
         
         </option>;
          ;
      })}
      
    </select></div>

    // </Selected>
  );
};
export const TextComponent = ({
  label,
  styleProps,
  CustomTag = "div",
  onClick,
}) => <CustomTag style={styleProps}>{label}</CustomTag>;
export const Date = () => {
  return (
    <div>
      <input
        type="date"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "184px",
          height: "23px",
          borderRadius: "4px",
          padding:"19px 28px 14px 14px",
          
        }}
      />
    </div>
  );
};
export const Box = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
// export const FN = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((current) => !current);
//   };

//   return (
//     <button
//       style={{
//         boxSizing: "border-box",
//         borderRadius: "5px",
//         border: " 1px solid #5375E2",
//         background: "white",
//         backgroundColor: isActive ? "#5375E2" : "white",

//         color: isActive ? "white" : "",
//       }}
//     >
//       {" "}
//       <div
//         style={{
//           borderRadius: "5px",
//           padding: "19px",
//         }}
//         // class="btn btn-primary"
//         onClick={handleClick}
//       >
//         <TextComponent label="FN" style={{ padding: "19px" }} />
//       </div>
//     </button>
//   );
// };
// export const AN = () => {
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive((current) => !current);
//   };

//   return (
//     <button
//       style={{
//         boxSizing: "border-box",
//         borderRadius: "5px",
//         border: " 1px solid #5375E2",
//         borderRadius: "5px",
//         background: "white",
//         backgroundColor: isActive ? "#5375E2" : "white",
//         color: isActive ? "white" : "",
//       }}
//     >
//       <div
//         style={{
//           borderRadius: "5px",
//           padding: "19px",
//         }}
//         // class="btn btn-primary"
//         onClick={handleClick}
//       >
//         AN
//       </div>
//     </button>
//   );
// };
export const InputComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          props.type === "text" || props.type === "number" ? "column" : "row",
      }}
    >
      <TextComponent
        label={props.label}
        CustomTag={
          props.type === "text" || props.type === "number" ? "div" : "span"
        }
      />
      {(props.type === "text" || props.type === "number") && (
        <input {...props}></input>
      )}
    </div>
  );
};
export const SubName = () => {
  return (
    <InputComponent
      type="text"
      style={{
        marginLeft: "18px",
        marginRight: "18px",
        background: "#F2F2F2",
        border: "1px solid #E8E8EA",
        borderRadius: "5px",
        width: "434px",
        height: "56px",
      }}
    />
  );
};
export const Range = () => {
  return (
    <>
      <div>
        <input
          type="number"
          min="1"
          max="12"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E8E8E8",
            width: "68.53px",
            height: "56px",
            borderRadius: "5px",
          }}
        />
      </div>
    </>
  );
};

export const Range1 = () => {
  return (
    <>
      <div>
        <input
          type="number"
          min="0"
          max="59"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E8E8E8",
            width: "68.53px",
            height: "56px",
            borderRadius: "5px",
          }}
        />
      </div>
    </>
  );
};
export const Range2 = () => {
  const [isOff, setIsOff] = useState(true);

  return (
    <button
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8E8E8",
        width: "68.53px",
        height: "56px",
        borderRadius: "5px",
      }}
      onClick={() => setIsOff(!isOff)}
    >
      {isOff ? "AM" : "PM"}
    </button>
  );
};

// export const Check = (props) => {
//   console.log(props.cardDetails);
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = () => {
//     setIsActive(!isActive);
//   };
//   const { value=false, onClick=()=>null } =props;
//   return (
//     <div
//       style={{
//         padding: "24px",
//         marginLeft: "144.41px",
//         marginTop: "-15px",
//         ...props.style,
//       }}
//     >
//       <input
//         type="checkbox"
//       />
//     </div>
//   );
// };
// import React from 'react'
// const CheckBox = (props) => {
//     const { value = false, onClick = () => null } = props
//     // console.log({ value })
//     return (
//         <div>
//             <input
//                 type="checkbox"
//                 value={value}
//                 onChange={() => onClick(!value)}
//             />
//         </div>
//     )
// }
// export default CheckBox

export const Check = (props) => {
  const { value = false, onClick = () => null } = props
  return (
    <div
      style={{
        padding: "24px",
        marginLeft: "110.41px",
        marginTop: "-15px",
        ...props.style,
      }}
    >
      <input type="checkbox"
      value={value}
      onChange={() => onClick(!value)}/>
    </div>
  );
};
export const Box1 = (props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <box
        style={{
          boxSizing: "borderBox",
          marginTop: "79px",
          marginLeft: "102px",
          marginRight: "102px",
          marginBottom: "",
          width: "392px",
          height: "252px",
          left: "102px",
          top: "175px",
          background: "transparent",
          border: "1px solid #000000",
          borderRadius: "10px",
          ...props.style,
        }}
      >
        <Box
          style={{
            marginTop: "196px",
            width: "392px",
            height: "55px",
            background: "#FFA500",
            borderRadius: "10px",
          }}
        />
      </box>
    </div>
  );
};

// import useHover from "@react-hook/hover";
// import { styles } from "@dash-ui/styles";
// export const HoverEffect=()=> {
//     const Hovertarget = React.useRef(null);
//     const Hovered = useHover(Hovertarget);
//     return (
//       <div className={hoverStyle({ Hovered })} ref={Hovertarget}>
//         {Hovered ? "Hovered Style" : "Default Style"}
//       </div>
//     );
//   }
//   const hoverStyle = styles({
//     default: `
//       background-color: lightblue;
//       width: 100px;
//       height: 100px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     `,
//     Hovered: `
//       background-color: lightgreen;
//       color: white;
//     `
//   });

//    export const New = () => {
// return (
//   <div >
//     <DropDownListComponent dataSource={["ice","eee","ece"]}></DropDownListComponent>
//   </div>
// );

//};

//   export const Dropdown = (props) => {
//     // console.log({props})
//     const {data}=props;
//     const [isActive, setIsActive] = useState(false);

//     const handleClick = () => {

//       setIsActive(current => !current);
//     };
//     return (
//       <div
//         style={{

//           backgroundColor: isActive ? '#5375E2' : '',
//           color: isActive ? 'white' : '',
//         }}
//         onClick={handleClick}
//       >
//         <select style={{
//             boxSizing: "borderBox",
//             display: "flex",
//             flexDirection: "row",
//             justifycontent: "center",
//             alignitems: "center",
//             MarginLeft:"51.12px",
//             gap: "8px",
//             width: "344px",
//             height: "56px",
//             background: "#FFFFFF",
//             border: "1px solid #E8E8EA",
//             borderRadius: "5px",
//             ...props.style
//         }}>

//             {data.map((item)=>{
//                 return <option value="">{item}</option>
//             })}

//         </select></div>

//     );
//   };
