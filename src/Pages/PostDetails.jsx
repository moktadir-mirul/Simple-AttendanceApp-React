import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../CustomHook/useFetch";

export const PostDetails = () => {
    const { userId } = useParams();
    const { data: details, isLoading, errorMessage} = useFetch(null, `http://localhost:3000/users/${userId}`)

    return (
        <div>
            {isLoading && <h3 style={{color:"blue", textAlign:"center", fontSize:"25px"}}>Data is laoding......</h3>}
            {errorMessage && <h2 style={{color:"crimson", textAlign:"center", fontSize:"30px"}}>!!!Warning: Data loading is failed!!!</h2>}
            <h1 className="posthd">Details of {details?.name}</h1>
            <p id="postp"><strong>Address: </strong>{details?.address.street}, {details?.address.suite}, {details?.address.city},</p>
            <p id="postp"><strong>Phone: </strong>{details?.phone},</p>
            <p id="postp"><strong>Website: </strong>{details?.website}.</p>
            
            <h3 style={{textAlign: "center", color: "tomato", fontSize: "20px", textDecoration: "underline"}}><Link to={"/user"}>Go Back</Link></h3>
        </div>

    )
}