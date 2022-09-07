import React, { useState } from "react";
import { AllocationPageComp} from "../src/AllocateComponents"
import { Check } from "../src/components";

//import GlobalStyle from "../src/GlobalStyle";

import {Header,Footer} from "../src/header"
import { BsFilter } from "react-icons/Bs";

const AllocationPage = (props) => {
  const [cardDetails, setCardDetails] = useState([
    {
      createCard: true,
    },
    {
      heading: "BE ECE SEM1",
      branch: "B.E",
      department: "ECE",
      semester: "1",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: false,
    },
    {
      heading: "BE EEE SEM 3",
      branch: "B.E",
      department: "EEE",
      semester: "1",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: true,
    },
    {
      heading: "BE ICE SEM 3",
      branch: "B.E",
      department: "ICE",
      semester: "1",
      subject: "5",
      lab: "0",
      ExamType: "Model",
      completed: false,
    },
  ]);
  const onDelete = (item, index) => {
    // create duplicate Value
    const tempCardDetails = [...cardDetails];
    tempCardDetails.splice(index, 1);
    setCardDetails(tempCardDetails);
  };
  
  return (
    <>
      <Header />
      <div
        style={{
          marginLeft: "1100px",
          display: "flex",
          flexDirection: "row",
          marginBottom: "-3px",
        }}
      >
        <span
          style={{
            marginTop:"37px",
          }}
        >
          Show Allocated
        </span>
        <Check style={{marginLeft:"-10px",marginTop:"14px"}} />
        <span style={{  marginTop:"37px", }}>Filter</span>
         <BsFilter style={{color:"#5375E2",marginLeft:"10px",marginTop:"38px"}}/> 
      </div>
      <div
        style={{
          padding: "0px 120px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {cardDetails?.map((item, index) => {
          return (
            <AllocationPageComp
              isCreateCard={item?.createCard}
              heading={item?.heading}
              deletePress={() => null}
              editPress={() => null}
              branch={item?.branch}
              department={item?.department}
              semester={item?.semester}
              subject={item?.subject}
              lab={item?.lab}
              ExamType={item?.ExamType}
              isCompleted={item?.completed}
              marginTop={51}
              deletePress={() => onDelete(item, index)}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default AllocationPage;