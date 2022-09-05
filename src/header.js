import React from "react";
import styled from "styled-components";
import { TextComponent } from "./components";
import { Font } from "./font";


const FootStyle=styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 116%;
display: flex;
margin-bottom:13px;
width: 1440px;
height: 42px;
background: #FBFBFB;
align-items: center;
text-align: center;
color: #000000`



export const Header= () => {
  return (
    <div>
     <Font/>
    <div
      style={{
        padding: "8px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#5375e2",
        width: "100%",
      }}
    >
      <div
        style={{
          //College Logo
          width: "50px",
          height: "50px",
          padding: "21px 27px 23px",
        }}
      >
        <img src="https://i.ibb.co/5M3FrMX/image-2.png" />
      </div>
      <div>
        <div
          style={{
            color: "white",fontStyle: "Bold",
            fontSize: "16px", lineHeight: "22px",
            marginLeft: "41px",marginTop: "16px",
          }}
        >
          <TextComponent label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY" />
        </div>
        <div
          style={{
            color: "white",fontStyle: "Bold",
            fontSize: "32px",lineHeight: "41px",
            lineHight: "100%", marginLeft: "41px",marginTop: "3px",
          }}
        >
          <TextComponent label="Exam Scheduler" />
        </div>
      </div>
      <div
        style={{
          display:"flex",flexDirection:"row",
          fontWeight: "700",fontSize: "20px",
          lineHeight: "27px",color: "#ffffff",
          marginTop:"30px",marginLeft:"650px",

        }}
      >
        <div style={{marginBottom:"7px",marginRight:"12px"}}>
        <img src="https://i.ibb.co/wBgCczS/healthicons-ui-user-profile-User-Prof.png" /></div>
        <TextComponent label="Waseem" />
      </div>
    
    </div>
      </div>
  );
};


/* const Logo=()=> {
    return (
       
      <div marginLeft="0px">
        <img src="https://i.ibb.co/2S0PzTc/logo.png" alt="LOGO" />
      </div>
    );
}
 const Vector=()=> {
    return (
      <div style={{marginTop:"",marginLeft:"1260px",flexDirection:"row",color:"red"
}}>
        <img src="https://i.ibb.co/ckcWSdS/healthicons-ui-user-profile.png" 
       
  />
      </div>
    );
} 
export const Header=()=>
{
    return(
        <><GlobalStyle/>
       <HeadStyle style={{width:"100%",background: "#5375E2" ,padding:"8px",color: "white"}}>
       
    <TextComponent 
        label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"  
        styleProps={{fontFamily: 'Nunito Sans',marginLeft:"5px",paddingTop:"15px",fontSize:"16px" }}/>
        <Logo />
        <Vector/>
        <TextComponent 
        label="Waseem"  
        
        styleProps={{ marginTop:"2px", marginRight:"50px",textAlign:"right",fontSize:"20px"
        }}/>
    <TextComponent 
        label="Exam Scheduler"  
        styleProps={{paddingLeft:"5px", margin:"0px ",fontSize:"32px"}}/>
    </HeadStyle>
</> */
export const Footer=()=>
{
    return(
       <>
<FootStyle style={{margin:"0%",}} >
    <TextComponent label="Conditions of use & sale" styleProps={{marginLeft:"317px"}} />
    <TextComponent label="Privacy notice" styleProps={{marginLeft:"231px"}}/>
    <TextComponent label="Powdered By Incresco" styleProps={{marginLeft:"201px"}}/>
</FootStyle></>
)
    }