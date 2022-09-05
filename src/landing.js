import React from "react";
import { propTypes } from "react-array-input";
import { TextComponent } from "./components";
import { Header,Footer } from "./header";

const Person=()=> {
    return (
      <div style={{padding:"0px 499px 0px 499px"}} >
        <img
        src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"
         />   
      </div>
    );
  }
  export const Landing=()=>
{
    return(
      <>
        <Header />
        <Person /><div style={{textAlign:"center"}}>
        <TextComponent 
        label="There are no schedules get started by creating schedules"
        styleProps={{fontFamily:"Nunito",
            letterSpacing: "0.03em",fontWeight: "600",
            fontSize:"16px"}}/> </div>
        <div>
     <CreateNew/>
    </div>
    <Footer/>
     
       </>
       
    )
    
}
export const CreateNew=()=>{
  return(
      <button style={{background: "#5375E2",borderRadius: "5px",height: "39.96094512939453px",width: "192px",margin:" 30px 624px 245.04px 624px",top: "615px",
}}>
       <TextComponent label="+ Create New" 
    styleProps={{fontFamily: 'Nunito Sans',fontStyle: "normal",fontWeight: "400",fontSize: "20px",lineHeight: "27px",color: "#FFFFFF"}}/>
      </button>)}
     