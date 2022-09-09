import React from "react";
import {MdEdit} from "react-icons/md";
import { useRouter } from "next/router";
export const EditRoute=()=>{
    const Router = useRouter()

    const Edit = () => {
        Router.push('/editsched')
    }
    return(

    <div>
        <MdEdit onClick={Edit}/>
    </div>)
}