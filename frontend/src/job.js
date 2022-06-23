import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Style/job.css";

const Job = () => {
    useEffect(() => {
        getData();
    }, []);

    const [sty, setSty] = useState("none");
    const [val, setVal] = useState({
        job_profile: "", salary: ""
    })

    const [job, setjob] = useState([{
        _id: "", company_info: "", company_name: "", company_location: "", salary: "", job_profile: "", type_of: "", apply_date: ""
    }])

    const getData = async () => {
        try {
            const res = await axios.get(`/jobdetails`);
            if (res.status === 200) {
                setjob(res.data);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    const specificData = async (val) => {
        try {
            const res = await axios.post(`/jobdetail`, val);
            if (res.status === 200) {
                setjob(res.data);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    const changeProp = () => {
        getData();
        setSty("none");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVal({ ...val, [name]: value });
    }

    return (
        <>
            <button onClick={() => setSty("block")} id="filter">Filter</button>
            <div className="filter-part" style={{ display: "flex", justifyContent: "center", zIndex: "10",  width: "15%", display: sty,margin:"2px 10px",padding:"2px 8px" }}>
                <p>you can give parameters to either one or two fields</p>
                <h6>Write post you want </h6>
                <input type="text" className="filter-sec" name="job_profile" placeholder="Eg: Marketing" onChange={handleChange} value={val.job_profile} />
                <h6>Write Desire Salary</h6>
                        <input type="text" className="filter-sec" name="salary" placeholder="Eg: 15000" onChange={handleChange} value={val.salary} />
                   
                <button onClick={() => specificData(val)} style={{color:"white",backgroundColor:"blue",border:"none",padding:"2px 8px ",display:"block"}}>Apply Filter</button>
                <button onClick={() => changeProp()} style={{color:"white",backgroundColor:"red",border:"none",padding:"2px 8px ",display:"block"}} > close</button>
            </div>
            {
                job.map((data, index) => {
                    return (
                        <div key={index} className="job">
                            <div>
                                <h3 id="job-profile">{data.job_profile}</h3>
                                <p id="cmpy_name"><b>{data.company_name} </b></p>
                            </div>
                            <div className="sub-div">
                                <p className="job-info">🏘 {data.company_location} </p>
                                <p className="job-info">💲 {data.salary}/Month</p>
                            </div>
                            <p className="job-info">📅 Apply by : {data.apply_date}</p>
                            <p className="job-info">Type : {data.type_of}</p>
                            <Link to={`/Apply/${data._id}`}><button className="button">Apply</button></Link>
                        </div>
                    )
                })
            }

        </>
    )
}
export default Job;