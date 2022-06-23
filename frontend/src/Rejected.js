import React from "react";
import axios from "axios";
import { useParams, Link,useNavigate } from "react-router-dom";
import "./Style/job.css";

const Rejected = () => {
    const navigate=useNavigate();
    const { _id,job_profile ,company_name} = useParams();
    console.log(_id);
    console.log(job_profile);

    const rejected = async (job_profile) => {
        try {
            const resp = await axios.patch(`/rejected/${company_name}/${job_profile}/${_id}`,job_profile);
            if (resp.status === 200) {
                alert("Remove Successfully");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (

        <>
        <div style={{textAlign:"center"}}>
            <h4>Do you want to Reject Candidate for the post of {job_profile} in {company_name}</h4>
            <button onClick={()=>rejected(job_profile)} className="button" style={{backgroundColor:"red"}}>Reject Profile</button>
            <button className="button" onClick={()=>navigate(`/jobposts/${company_name}`)}>Back</button>
            </div>
        </>
    )
}
export default Rejected;