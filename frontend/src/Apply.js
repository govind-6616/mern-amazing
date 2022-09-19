import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Style/job.css";

const Apply = () => {

    useEffect(() => {
        const token=localStorage.getItem('token');
        if(!token){
            alert("Login to Apply");
        }
        checkApply();
        getData();
    }, []);
    const [data, setData] = useState({
        msg: ""
    });
    const [jobdata, setJobData] = useState({});
    const bg = "blue";
    const [color, setColor] = useState(bg);
    const[able,setAble]=useState(false);

    const setId = async (data) => {
        try {
            const res = await axios.patch(`/Apply/${_id}`, data, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            });
            if (res.status == 200) {
                setData(res.data);
                alert("Applied successfully");
            }
        }
        catch (e) {
            console.log(e);
        }
    }


    const checkApply = async () => {
        try {
            const res = await axios.get(`/check/${_id}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            });
            if (res.status == 200) {
                if (res.data.msg == "not_found") {

                }
                else {
                    // setColor("grey");
                    setAble(true);
                    alert("Already Applied");
                }

            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const getData = async () => {
        try {
            const resp = await axios.get(`/jobdata/${_id}`);
            if (resp.status == 200) {
                setJobData(resp.data);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const { _id } = useParams();

    return (
        <>

            <div className="job">
                <div>
                    <h3 id="job-profile">{jobdata.job_profile}</h3>
                    <p id="cmpy_name"><b>{jobdata.company_name} </b></p>
                </div>
                <div className="sub-div">
                    <p className="job-info">🏘 {jobdata.company_location} </p>
                    <p className="job-info">💲 {jobdata.salary}/Month</p>
                </div>
                <p className="job-info">📅 Apply by : {jobdata.apply_date}</p>
                <p className="job-info">Type : {jobdata.type_of}</p>
                <h4>About {jobdata.company_name}</h4>
                <p className="job-info">{jobdata.company_info}</p>
                <h4>Skill(s) required</h4>
                <ul>
                    <li><p className="job-info">{jobdata.skill1}</p></li>
                    <li><p className="job-info">{jobdata.skill2}</p></li>
                    <li><p className="job-info">{jobdata.skill3}</p></li>
                    <li><p className="job-info">{jobdata.skill4}</p></li>
                </ul>
                <h4>About the work and responsibilities</h4>
                <p className="job-info">{jobdata.about_job}</p>
                <h4>joining date</h4>
                <p className="job-info">{jobdata.joining_date}</p>
                <h4>Perks</h4>
                <p className="job-info">Job Letter</p>
                <p className="job-info">Saturday and Sunday Off</p>
                <p className="job-info">Growing and Learning Environement</p>
                <h4>Number of openings</h4>
                <p className="job-info">{jobdata.no_of_openings}</p>
                <button onClick={() => setId(data)} className="button" disabled={able} style={{ backgroundColor: color }}>Apply</button>
            </div>

        </>
    )
}
export default Apply;