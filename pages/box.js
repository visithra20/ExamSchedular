import React from "react";
import { Box1 } from "../src/components";
import { Header,Footer } from "../src/header";
import { Font } from "../src/font";
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// //import { CreateNew } from "../src/landing";

const Card=()=>{
    return(
        <>
    <Header/>
    
    <div style={{display:"flex",flexDirection:"row",flexWrap:"revert",marginLeft:"-35px"}}>

    <Box1 style={{background: "#F6F6F6",border: "1px dashed #000000",}} />
    <div style={{marginLeft:"-120px",}} ><Box1 style={{border: "1px solid #FFA500"}}/></div>
    <div style={{marginLeft:"-120px"}}><Box1 style={{border: "1px solid #5375E2"}}/></div>
    </div>
<div style={{display:"MsGrid",display:"flex",flexDirection:"row",gridTemplateColumns:"repeat( 3, fr )",marginBottom:"20px"}}>

    <div style={{marginLeft:"-35px"}} ><Box1 style={{border: "1px solid #5375E2"}}/></div>
    <div style={{marginLeft:"-120px"}}><Box1 style={{border: "1px solid #FFA500"}}/></div>
    <div style={{marginLeft:"-120px"}} ><Box1 style={{border: "1px solid #5375E2"}}/></div></div>
    
    <Footer />
    
    </>
    )
}
export default Card

//import React from "react";

// const arr = [
//   { id: 1, name: "apple" },
//   { id: 2, name: "orange" },
//   { id: 3, name: "grape" }
// ];

//  function Appi() {
//   const [items, setItems] = React.useState(arr);

//   const deleteItem = (index) => () =>
//     setItems((items) => items.filter((_, i) => i !== index));

//   return (
//     <>
//       {items.map((it, index) => {
//         return (
//           <div key={it.id}>
//             {it.name} 
//             <button onClick={deleteItem(index)}>delete</button>
//           </div>
//         );
//       })}
//     </>
//   );
// }
