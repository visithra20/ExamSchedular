// import React, { useState } from "react";
// import { AllocationPageComp } from "../src/AllocateComponents";
// import { Check } from "../src/components";
// import { Header, Footer } from "../src/header";
// import { BsFilter } from "react-icons/bs";
// import { filter } from "@syncfusion/ej2/maps";

// const AllocationPage = (props) => {
//   const [cardDetails, setCardDetails] = useState([
//     {
//       createCard: true,
//       completed: true,
//     },
//     {
//       heading: "BE ECE SEM1",
//       branch: "B.E",
//       department: "ECE",
//       semester: "1",
//       subject: "5",
//       lab: "2",
//       ExamType: "Internals",
//       completed: false,
//     },
//     {
//       heading: "BE EEE SEM 3",
//       branch: "B.E",
//       department: "EEE",
//       semester: "1",
//       subject: "5",
//       lab: "2",
//       ExamType: "Semster",
//       completed: true,
//     },
//     {
//       heading: "BTech CSE SEM 3",
//       branch: "BTech",
//       department: "IT",
//       semester: "1",
//       subject: "5",
//       lab: "2",
//       ExamType: "Model",
//       completed: false,
//     },
//     {
//         heading: "BTech CSE SEM 3",
//         branch: "BTech",
//         department: "IT",
//         semester: "1",
//         subject: "5",
//         lab: "0",
//         ExamType: "Model",
//         completed: true,
//       },
//     {
//       heading: "BTech CSE SEM 3",
//       branch: "BTech",
//       department: "IT",
//       semester: "1",
//       subject: "5",
//       lab: "2",
//       ExamType: "Model",
//       completed: true,
//     },
//   ]);
//   const [filteredArray,setFilteredArray]= useState(cardDetails);

//   //   const [selectedSub, setSelectedSub] = useState([])
//   //   const onChangeSelectSubname = (data) => {
//   //       const selectedVal = data.target.value;
//   //       setSelectedSub(
//   //       subname.filter((selectSubname) => selectSubname.id === selectedVal)
//   //           );}

//   const onDelete = (item, index) => {
//     const tempCardDetails = [...cardDetails];
//     tempCardDetails.splice(index, 1);
//     setCardDetails(tempCardDetails);
//   };
//  // const Allocate = (props) => {
// //     const [showallocated, setShowallocated] = useState([
// //       {
// //         createCard: true,
// //       },
// //       {
// //         heading: "BE ECE SEM1",
// //         branch: "B.E",
// //         department: "ECE",
// //         semester: "1",
// //         subject: "5",
// //         lab: "2",
// //         ExamType: "Internals",
// //         completed: false,
// //       },
// //       {
// //         heading: "BE ECE SEM1",
// //         branch: "B.E",
// //         department: "ECE",
// //         semester: "1",
// //         subject: "5",
// //         lab: "2",
// //         ExamType: "Internals",
// //         completed: true,
// //       },
// //       {
// //         heading: "BE EEE SEM 3",
// //         branch: "B.E",
// //         department: "EEE",
// //         semester: "1",
// //         subject: "5",
// //         lab: "2",
// //         ExamType: "Semster",
// //         completed: true,
// //       },
// //     ]);
// //   };

//     // setShowallocated(filtered)

//   return (
//     <>
//       <Header />
//       <div
//         style={{
//           marginLeft: "1100px",
//           display: "flex",
//           flexDirection: "row",
//           marginBottom: "-3px",
//         }}
//       >
//         <span
//           style={{
//             marginTop: "37px",
//           }}
//         >
//           Show Allocated
//         </span>
//         {/* {filtered.map(obj => {
//         return (<div > </div> );})} */}
//         <div>
//           <Check style={{ marginLeft: "-10px", marginTop: "14px" }}
//           filteredArray={filteredArray}
//           cardDetails={cardDetails}
//           setFilteredArray={setCardDetails}

//            />
//         </div>
//         <span style={{ marginTop: "37px" }}>Filter</span>
//         <BsFilter
//           style={{ color: "#5375E2", marginLeft: "10px", marginTop: "38px" }}
//         />
//       </div>
//       <div
//         style={{
//           padding: "0px 120px",
//           display: "flex",
//           flexWrap: "wrap",
//           gap: 20,
//         }}
//       >
//         {cardDetails?.map((item, index) => {
//           return (
//             <AllocationPageComp
//               isCreateCard={item?.createCard}
//               heading={item?.heading}
//               editPress={() => null}
//               branch={item?.branch}
//               department={item?.department}
//               semester={item?.semester}
//               subject={item?.subject}
//               lab={item?.lab}
//               ExamType={item?.ExamType}
//               isCompleted={item?.completed}
//               marginTop={51}
//               deletePress={() => onDelete(item, index)}
//             />
//           );
//         })}
//       </div>
//       <Footer style={{ marginBottom: "0%" }} />
//     </>
//   );
// };
// export default AllocationPage;

import React, { useState } from "react";
import { AllocationPageComp } from "../src/AllocateComponents";
import { Box, Check } from "../src/components";
import { Header, Footer } from "../src/header";
import { BsFilter } from "react-icons/bs";
import styled from "styled-components";

import { useRouter } from "next/router";

const AllocationPage = (props) => {
  const Router = useRouter();
  const Fil = () => {
    Router.push("/");
  };
  const [dropDown, setDropDown] = useState(["Semster", "Model", "Internal"]);
  const [radioFlag, setRadioFlag] = useState(false);
  const [filterPopup, setFilterPopup] = useState(false);

  const handleExamFilter = (item, index) => {
    const filterData = cardDetails?.filter(function (i, index) {
      console.log({ d: i?.ExamType });
      return i?.ExamType === item;
    });
    setFilter(filterData);
    setFilterPopup(false);
  };

  const [cardDetails, setCardDetails] = useState([
    {
      createCard: true,
      completed: true,
    },
    {
      heading: "BE ECE SEM3",
      branch: "B.E",
      department: "I.T",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: false,
    },
    {
      heading: "BE EEE SEM 3",
      branch: "B.E",
      department: "I.T",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: true,
    },
    {
      heading: "BTECH IT SEM5",
      branch: "BTECH",
      department: "IT",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Model",
      completed: true,
    },
    {
      heading: "BE EEE SEM 1",
      branch: "B.E",
      department: "EEE",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Internal",
      completed: false,
    },
    {
      heading: "BTECH IT SEM2",
      branch: "BTECH",
      department: "IT",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Internal",
      completed: true,
    },
  ]);

  const [filter, setFilter] = useState(cardDetails);
  const onDelete = (item, index) => {
    let tempCardDetails = [...filter]
    let duplicateArray = [...cardDetails]
    let findIndex = cardDetails?.findIndex((i) => i.id === item?.id)
    if (findIndex > -1) {
        duplicateArray.splice(findIndex, 1)
        setCardDetails(duplicateArray)
    }
    tempCardDetails.splice(index, 1)
    console.log({tempCardDetails})
    setFilter(tempCardDetails)
}
  

  const handleFilter = (e) => {
    setRadioFlag(e);
    if (e) {
      const filteredData = cardDetails?.filter((obj) => {
        return obj.completed === true;
      });
      setFilter(filteredData);
    } else {
      setFilter(cardDetails);
    }
  };

  const Block = styled.div`
    background-color: white;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover {
      background-color: #5375e2;
    }
  `;

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
            marginTop: "37px",
          }}
        >
          Show Allocated
        </span>{" "}
      </div>
      <div
        style={{
          marginLeft: "1100px",
          display: "flex",
          flexDirection: "row",
          marginBottom: "-3px",
        }}
      >
        <Check
          style={{ marginTop: "-11%" }}
          filter={filter}
          cardDetails={cardDetails}
         
          setCardDetails={setCardDetails}
          value={radioFlag}
          setValue={setRadioFlag}
          onClick={handleFilter}
        />
        <span
          style={{
            marginRight: "10px",
            marginLeft: "10px",
            marginTop: "-18px",
          }}
        >
          Filter
        </span>
        <div style={{ marginTop: "-15px", marginLeft: "3px" }}>
          <BsFilter onClick={() => setFilterPopup(!filterPopup)} />
          {filterPopup && (
            <div
              style={{
                width: 400,
                background: "white",
                padding: "22px 29px 17px 29px",
                borderRadius: 6,
                position: "absolute",
                right: 4,
                border: "0.01px solid #A9A9A9",
              }}
            >
              {dropDown?.map((item, index) => {
                return (
                    <div>
                  <Block>
                    <div
                      style={{
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: "22px",
                        color: "#000000",
                        marginBottom: "20px"
                      }}
                      onClick={() => handleExamFilter(item, index)}
                    >
                      {item} Exam
                    </div>
                  </Block>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          padding: "0px 120px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        { filter?.map((item, index)=> {
          return (
          
            <AllocationPageComp
              isCreateCard={item?.createCard}
              heading={item?.heading}
              branch={item?.branch}
              department={item?.department}
              semester={item?.semester}
              subject={item?.subject}
              lab={item?.lab}
              ExamType={item?.ExamType}
              isCompleted={item?.completed}
              marginTop={51}
              deletePress={() => onDelete(item, index)}
              editPress={() => (onclick = { Edit })}
            />
          );
        })}
      </div>
      {/* <div
        style={{
          padding: "0px 120px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}
      ></div> */}
      <div >
      <Footer style={{ position:"fixed",marginTop:"20%"}} /></div>
    </>
  );
};
export default AllocationPage;
