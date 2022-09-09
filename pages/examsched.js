import React, { useState } from "react";
import Radio from "../src/RadioButton";
import { useRouter } from "next/router";
import {
  TextComponent,
  Dropdown,
  Box,
  Date,
  Check,
  Range,
  Range1,
  Range2,
} from "../src/components";
import { Header, Footer } from "../src/header";
import styled from "styled-components";
import { Font } from "../src/font";
import Pop from "../src/popup";
import {
  Createdata,
  CreatedataSub,
  CreatedataBranch,
  CreatedataDept,
  ExamtypeData,
} from "../src/Formdata";
// import Popup from 'reactjs-popup';
// import { PropaneSharp } from "@mui/icons-material";
//import { DropDownFormField } from "@syncfusion/ej2/documenteditor";
const StyleFont = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 33px;
  color: #000000;
`;
const Time = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30.45px",
          marginRight: "30px",
          marginLeft: "50px",
        }}
      >
        <Range />
        <Range1 />
        <Range2 />
      </div>
    </>
  );
};
export const Sub = () => {
  const [subject, setSubject] = useState(Createdata);
  const [subname, setSubname] = useState(CreatedataSub);
  const [selectedSub, setSelectedSub] = useState([]);
  
  const onChangeSelectSubname = (data) => {
    const selectedVal = data.target.value;
    console.log(selectedVal)
    console.log(selectedSub)
    console.log(data.target.value)

    setSelectedSub(
      subname.filter((selectSubname) => selectSubname.id === selectedVal)
    );
   
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row", 
        alignItems: "center", 
        gap: "18px", 
        marginTop: "-10px",
        marginBottom: "-10px",
      }}
    >
      <Dropdown
        style={{
          width: "186px",
          height: "56px",
          boxRadius: "10px",
          padding: "19px 21px 14px 16px",
        }}
        data={subject}
        onChange={onChangeSelectSubname}
        
      />
      <Dropdown
        data={selectedSub}
        style={{
          marginLeft: "18px",
          fontFamily: "Nunito Sans",
          fontSize: "normal",
          color: "#ABA9AE",
          fontWeight: "400",
          fontSize: "16px",
          marginRight: "18px",
          background: "#F2F2F2",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "434px",
          height: "56px",
          padding: "17px 36.21px 20px 12.8px",
          WebkitAppearance: "none",
        }}
      />
      <Date />
      <Radio style={{ marginTop: "36px" }} />
    </div>
  );
};
export const BackButton = (onClick) => {
  return (
    <div style={{ marginTop: "35px", marginLeft: "122px", display: "flex" }}>
      <img src="https://i.ibb.co/HnM1WDs/Vectorarrow.png" />
    </div>
  );
};

const ExamScheduler = () => {
  const [branch, setBranch] = useState(CreatedataBranch);
  const [dept, setDept] = useState(CreatedataDept);
  const [examtype, setExamtype] = useState(ExamtypeData);
  const [selectedDept, setSelectedDept] = useState([
    { name: "--SELECT--", id: "0" },
  ]);
  console.log(selectedDept)
  const onChangeSelectBranch = (data) => {
    const selectedValue = data.target.value;
    console.log(data)
    console.log(data.target.value)
    setSelectedDept(
      dept.filter((selectDept) => selectDept.id === selectedValue)
     
    );
  };
  const Router = useRouter();
  const Back = () => {
    Router.push("/");
  };

  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <Font />
      <StyleFont>
        <Header />

        <div style={{ display: "flex" }}>
          <div onClick={Back}>
            <BackButton />
          </div>
          <div>
            <TextComponent
              label="Create new schedule"
              styleProps={{
                marginLeft: "19px",
                marginTop: "35px",
                diplay: "flex",
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "33px",
                color: "#000000",
              }}
            />
          </div>
        </div>

        <Box
          style={{
            width: "1196px",
            // height: "1400px",
            borderRadius: "2px",
            left: "122px",
            top: "183px",
            background: "#FBFBFB",
            margin: "19.74px 122px 0px 122px ",
            padding: "37.26px 54.81px 49.49px 54px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "56px",
              width: "344px",
              borderRadius: "10px",
              padding: "8px 16px 8px 16px",
              gap: "30px",
              marginLeft: "51px",
            }}
          >
            <div>
              <TextComponent label="Branch" />
              <Dropdown
                data={branch}
                style={{ padding: "20px 24px", height: "56px", width: "338px" }}
                onChange={onChangeSelectBranch}
              />
            </div>
            <div>
              <TextComponent label="Department" />
              <Dropdown
                style={{ padding: "20px 24px", height: "56px", width: "338px" }}
                data={selectedDept}
                
              />
            </div>
            <div>
              <TextComponent label="Semester" />
              <input
                type="text"
                value="3"
                style={{
                  boxSizing: "borderBox",
                  display: "flex",
                  flexDirection: "row",
                  justifycontent: "center",
                  alignitems: "center",
                  MarginLeft: "51.12px",
                  gap: "8px",
                  padding: "20px 24px",
                  width: "296px",
                  height: "16px",
                  background: "#FFFFFF",
                  border: "1px solid #E8E8EA",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}></div>
          <div
            style={{
              marginTop: "30px",
              marginLeft: "51px",
              padding: "8px 16px 8px 16px",
            }}
          >
            <TextComponent label="Exam Type" />
            <Dropdown
              style={{
                width: "1098px",
                height: "56px",
                padding: "8px 16px 8px 16px",
                gap: "8px",
              }}
              data={examtype}
            />
          </div>
          <div style={{ marginLeft: "58px" }}>
            <TextComponent
              label="Time Range"
              styleProps={{ marginBottom: "12.27px", marginTop: "30px" }}
            />
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                marginRight: "32.26px",
              }}
            >
              <label style={{ marginTop: "15.14px" }}>FN</label>
              <Time />
              <label style={{ marginTop: "15.14px", marginLeft: "30px" }}>
                to
              </label>
              <Time />
              <Check />
              <label style={{ marginTop: "8px", opacity: "0.5" }}>
                Set all for FN
              </label>
            </div>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <label style={{ marginTop: "15.14px" }}>AN</label>
              <Time />
              <label style={{ marginTop: "15.14px", marginLeft: "30px" }}>
                to
              </label>
              <Time />
              <Check />
              <label style={{ marginTop: "8px", opacity: "0.5" }}>
                Set all for AN
              </label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextComponent
              label="Subjects"
              styleProps={{ marginLeft: "56px" }}
            />
            <TextComponent label="Labs" styleProps={{ paddingLeft: "330px" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "8px 16px 8px 16px",
              gap: "30px",
              marginLeft: "43px",
            }}
          >
            <input
              value="5"
              type="text"
              style={{
                boxSizing: "borderBox",
                display: "flex",
                flexDirection: "row",
                padding: "20px 24px",
                height: "16px",
                width: "296px",
                background: "#FFFFFF",
                border: "1px solid #E8E8EA",
                borderRadius: "5px",
              }}
            />
            <input
              type="text"
              value="2"
              style={{
                boxSizing: "borderBox",
                display: "flex",
                flexDirection: "row",
                padding: "20px 24px",
                height: "16px",
                width: "296px",
                background: "#FFFFFF",
                border: "1px solid #E8E8EA",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ marginLeft: "56px" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "12px",
                }}
              >
                <TextComponent
                  label="Subject1"
                  styleProps={{ marginRight: "635px" }}
                />
                <TextComponent label="Date" />
              </div>
              <Sub />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "12px",
                }}
              >
                <TextComponent
                  label="Subject2"
                  styleProps={{ marginRight: "635px" }}
                />
                <TextComponent label="Date" />
              </div>
              <Sub />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "12px",
                }}
              >
                <TextComponent
                  label="Subject3"
                  styleProps={{ marginRight: "635px" }}
                />
                <TextComponent label="Date" />
              </div>
              <Sub />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "12px",
                }}
              >
                <TextComponent
                  label="Subject4"
                  styleProps={{ marginRight: "635px" }}
                />
                <TextComponent label="Date" />
              </div>
              <Sub />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "12px",
                }}
              >
                <TextComponent
                  label="Subject5"
                  styleProps={{ marginRight: "635px" }}
                />
                <TextComponent label="Date" />
              </div>
              <Sub />
            </div>
            <div style={{ marginTop: "30.46px", marginBottom: "30px" }}>
              <TextComponent label="Lab" styleProps={{ fontSize: "20px" }} />
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "12px",
                }}
              >
                <TextComponent
                  label="Lab 1"
                  styleProps={{ marginRight: "655px" }}
                />
                <TextComponent label="Date" />
              </div>
              <Sub />
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  marginBottom: "12px",
                }}
              >
                <TextComponent
                  label="Lab 2"
                  styleProps={{ marginRight: "655px" }}
                />
                <TextComponent label="Date" />
              </div>
              <Sub />
            </div>
          </div>
        </Box>
      </StyleFont>
      {/* <button
        style={{marginTop: "183px",marginLeft: "1250px",padding: "9px 44.4px 12.03px 49.85px",fontFamily: "Nunito Sans",fontStyle: "normal",fontWeight: "00",fontSize: "16px",color: "WHITE",background: "#5375E2",borderRadius: "5px",}}
      >{" "}Save</button> */}
      {/* <Popup style={{width: "908px",
    height: "293px"}} trigger={<button  style={{marginTop: "183px",marginLeft: "1250px",padding: "9px 44.4px 12.03px 49.85px",fontFamily: "Nunito Sans",fontStyle: "normal",fontWeight: "00",
    fontSize: "16px",color: "WHITE",background: "#5375E2",borderRadius: "5px",position:"top center"}}> Save</button>}position="top center">
    <div style={{
fontFamily: 'Nunito Sans',fontStyle: "normal",fontWeight: "700",fontSize: "30px",lineHeight: "41px",color: "#000000",display:"flex",flexDirection:"row"}}>BE EEE SEM3 schedule was successfully created</div>
  </Popup> */}
      <Pop />

      <div
        style={{ marginTop: "88.74px", display: "flex", flexDirection: "row" }}
      >
        <Footer style={{ marginBottom: "0%" }} />
      </div>
    </div>
  );
};
export default ExamScheduler;
