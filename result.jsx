import React from "react";
import Pass from "./pass";
import Fail from "./fail";

const Result=(props)=>{
    return(
        <>
        <h2>Marks:{props.marks}</h2>
        <h3>Grade:{props.grade}</h3>
        </>
    )

}

export default Result;