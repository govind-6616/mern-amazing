import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Style/job.css"

const Posts = () => {
    const [exp, setExp] = useState("No");
    const[toggle,setToggle]=useState("none");
    const[menu,setMenu]=useState("block");
    const [srch, setSrch] = useState({
        _id: "", job_profile: ""
    })
  
    const [user, userDetail] = useState({
        name: "", mobile: "", degree: "", skill1: "", skill2: "", skill3: "", skill4: "", profession: ""
    });

    const [val, setVal] = useState([{
        job_profile: "", candidates_applied: "", salary: "", apply_date: "", joining_date: "", type_of: "", no_of_openings: ""
    }]);

    useEffect(() => {
        dataPosts();
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setSrch({ ...srch, [name]: value });
    }

    const { company_name } = useParams();
    const { id } = useParams();

    const dataPosts = async () => {
        try {
            const res = await axios.get(`/jobposts/${company_name}`);
            if (res.status == 200) {
                setVal(res.data);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const userProfile = async () => {
        try {
            const res = await axios.get(`/jobposts/${company_name}/${srch._id}`);
            if (res.status === 200) {
                userDetail(res.data);
                if (res.data.post1!= "") {
                    setExp("Yes");
                }
                else {
                    setExp("No");
                }
                console.log(user);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
 
    const DeleteJob = async (id) => {
        try {
            const res = await axios.delete(`/jobposts/${company_name}/${id}`);
            if (res.status == 200) {
                alert("job post deleted");
                dataPosts();
            }
        }
        catch (e) {

        }
    }
    const clearField = () => {
        setSrch({ _id: "" });

    }
    const hide=()=>{
setMenu("block");
setToggle("none");
    }
    const show=()=>{
        setMenu("none");
        setToggle("block");
    }
 
    return (
        <>
            {
                val.map((data, index) => {
                    return (
                        <div key={index} className="job" style={{ width: "40%", margin: "25px 10%" }}>
                            <h3 id="job-profile">{data.job_profile}</h3>
                            <p id="cmpy_name"><b>{data.company_name} </b></p>
                            <div className="sub-div" style={{ width: "50%" }}>
                                <p className="job-info">📅 Apply By: {data.apply_date} India</p>
                                <p className="job-info">📅 Joining By: {data.joining_date}</p>
                            </div>
                            <p className="job-info">Type : {data.type_of}</p>
                            <p className="job-info">💲 {data.salary}/Month</p>
                            <p className="job-info">Number of openings: {data.no_of_openings}</p>
                            <div>
                                <h4>Candidates Applied- ({data.candidates_applied.length})</h4>
                                <p>{data.candidates_applied.toString()}</p>
                                {/* <p>{data._id}</p> */}
                            </div>
                            <Link to={`/jobposts/${company_name}/${data._id}`}><button onClick={() => DeleteJob(data._id)} className="button">Delete Job</button></Link>
                        </div>
                    )
                })

            }
            <div className="detail-show">
         <button onClick={()=>show()} style={{display:menu}} className="button-sp">User Profile Details 🔽</button>
            </div>
            <div className="user-detail" style={{display:toggle}}>
                <button onClick={()=>hide()}>❌</button>
                <h3>Check Applied Users Profile</h3>
                <input type="text" className="user-profile-field" name="_id" placeholder=" Id of Candidate (must be filled)" onChange={handleChange} onKeyUp={() => userProfile()} value={srch._id} required/>
                <input type="text" className="user-profile-field" name="job_profile" placeholder="Job Profile (must be filled)" onChange={handleChange} onKeyUp={() => userProfile()} value={srch.job_profile} required/>
                {
                    <div>
                        <p className="job-info"><b>Name: </b>{user.name}</p>
                        <p className="job-info"><b>E-mail: </b>{user.email}</p>
                        <p className="job-info"><b>Mobile No: </b>{user.mobile}</p>
                        <p className="job-info"><b>Profession: </b>{user.profession}</p>
                        <h4>Some of the skills</h4>
                        <ul>
                            <li className="job-info">{user.skill1}</li>
                            <li className="job-info">{user.skill2}</li>
                        </ul>
                        <h4>Educational Qualification</h4>
                        <p className="job-info"><b>Degree: </b>{user.degree}</p>
                        <p className="job-info"><b>Course: </b>{user.course}</p>
                        <h4>Having Working experience: </h4>
                        <p>{exp}</p>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <Link to={`/Rejected/${company_name}/${srch.job_profile}/${srch._id}`}><button className="button">Reject Profile</button></Link>
                        <Link to={`/Selected/${company_name}/${srch.job_profile}/${srch._id}`}><button className="button">Select Profile</button></Link>
                        <button className="button" onClick={() => clearField()}>Clear</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
export default Posts;