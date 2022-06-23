import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link ,useNavigate} from "react-router-dom";

const Selected = () => {
const navigate=useNavigate();
    const [info, setInfo] = useState({
        _id:""
    })

    useEffect(() => {
        getCmpyId();
    }, []);

    const { _id, job_profile, company_name } = useParams();
    // console.log(_id);
    console.log(job_profile);

    const getCmpyId = async () => {
        try {
            const respo = await axios.get(`/getcmpy/${company_name}/${job_profile}`);
            if (respo.status == 200) {
                setInfo(respo.data._id);
                // console.log(respo.data._id);
                console.log(info);
                console.log(info._id);
               
            }
        }
        catch (e) {

        }
    }

    const selectUser = async () => {
        try {
            const resp = await axios.patch(`/jobposts/${info}/${_id}`);
            if (resp.status === 200) {
                alert("User Profile Selected");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    return (

        <>
        <div style={{textAlign:"center"}}>
            <h3>Are you sure you want to Select candidate  for the post {job_profile} in {company_name}</h3>
           <br/>
            <button onClick={() => selectUser()} className="button" style={{backgroundColor:"green"}}>Select Profile</button>
            {/* <button onClick={()=>getCmpyId()}>get Data</button> */}
            <button className="button" onClick={()=>navigate(`/jobposts/${company_name}`)}>Back</button>
            </div>
        </>
    )
}
export default Selected;