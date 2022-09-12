import React, { useState } from "react";

import data from "../src/tables.json"
import styled from "styled-components";
// import "../src/App.css"
const Records=()=>{
    const[allocation,setAllocation]=useState(data)
    return(
        <Tablestyle>
            <div className="inst-container">
       <div className="app-container" id="allocates">
        <table>
            <thead>
            <tr>
                <th>S.no</th>
                <th>Register No.</th>
                <th>Name</th>
                <th>Department</th>
                <th>Seat No.</th>
            </tr>
            </thead>
            <tbody >
                {allocation.map((alloacte)=> 
                <tr>
                <td>{alloacte.id}</td>
                <td>{alloacte["Reg.no"]}</td>
                <td>{alloacte.name}</td>
                <td>{alloacte.department}</td>
                <td>{alloacte["seat.no"]}</td>
                </tr>
                )}
            </tbody>
        </table>
        </div>
       </div></Tablestyle>
    )
}
export default Records
 const Tablestyle=styled.div`
 .app-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  font-family:'Nunito Sans';
  font-size:16px;
}
.inst-container {
    border: 1px solid #f6f6f6;
    max-height: 300px;
    overflow-y: scroll;
    height: 625.9957275390625px;
width: 844px;
left: 289px;
top: 418.416015625px;
border-radius: 0px;

}
table {
  border-collapse: collapse;
  width: 100%;
  font-family:'Nunito Sans';
  font-size:16px;
}
#allocates td:hover {background-color: #ddd;}
#allocates td:nth-child(even){background-color: #f2f2f2;}
th{
    border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-size: 32px;
  color:#5375E2;
  font-family:'Nunito Sans';
  font-size:16px;
}
td {
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
  font-family:'Nunito Sans';
  font-size:16px;
}

th {
  background-color: white;

}
#allocates tr:nth-child(even){background-color: #f2f2f2;}
td {
  background: white;
;
}

/* form {
  display: flex;
  gap: 5px;
}

form td:last-child {
  display: flex;
  justify-content: space-evenly;
}

form * {
  font-size: 28px;
} */
`
