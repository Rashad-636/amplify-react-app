import { useState, useEffect } from "react";
import { API } from "aws-amplify";

export const GitHubBornOn = () => {
    // created myInfo variable and set to an empty array
    const [myInfo, updateBornOn] = useState([]);

    // Function call to API
    const fetchMyInfo = async () => {
        const data = await API.get("cryptoapi", `/born`);
        updateBornOn(data.myInfo)
        console.log(data);
    };

    // calls fetchMyInfo function when component loads and sets to an empty array
    useEffect(() => {
        fetchMyInfo();
    }, []);

    
    return (
        <>
        <h1>This Github User {myInfo.login}  was born on {myInfo.created_at} </h1>
        </>
)};