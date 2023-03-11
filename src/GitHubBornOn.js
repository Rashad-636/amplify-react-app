import { useState, useEffect } from "react";
import { API } from "aws-amplify";

export const GitHubBornOn = () => {
    // created myInfo variable and set to an empty array
    const [myInfo, updateBornOn] = useState([]);

    // Create a varible for loading
    const [loading, updateLoading] = useState(true);

    // Function call to API
    const fetchMyInfo = async () => {
        const data = await API.get("cryptoapi", `/born`);
        updateBornOn(data.myInfo)
        console.log(data);
        updateLoading(false)
    };

    // calls fetchMyInfo function when component loads and sets to an empty array
    useEffect(() => {
        fetchMyInfo();
    }, []);

    {loading && <h1>Loading ....</h1>}

    
    return (
        !loading &&
        <>
         <h2>This Github User {myInfo.login}  was born on {myInfo.created_at} </h2>
        </>
    )
};