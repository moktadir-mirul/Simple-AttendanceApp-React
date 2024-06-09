import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../CustomHook/useFetch";

export const UserList = () => {
    const { data: users, isLoading, errorMessage} = useFetch([], `http://localhost:3000/users`)

    return (
        <>
            <h1 className="posthd">All User Name</h1>
            {isLoading && <h3 style={{color:"blue", textAlign:"center", fontSize:"25px"}}>Data is laoding......</h3>}
            {errorMessage && <h2 style={{color:"red", textAlign:"center", fontSize:"30px"}}>!!!Warning: Data loading is failed!!!</h2>}
            {users.map((user) => (
                <li key={user.id} id="postli"><Link to={`/user/${user.id}`}>{user.name}</Link>; Email- {user.email}</li>
            ))}
        </>
    )

}