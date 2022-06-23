import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const CreateJob = () => {
    useEffect(() => {
       getData()
    }, []);

    const navigate = useNavigate();
    const [data, setData] = useState({
        company_info: "", job_profile: "", company_name: "", company_location: "", salary: "", apply_date: "", joining_date: "", type_of: "", skill1: "", skill2: "", skill3: "", skill4: "", no_of_openings: "", about_job: ""
    });

    const handleInput = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const getData = async () => {
        try {
            const res = await axios.get(`/verify`, {
                headers: {
                    'x-access-token': localStorage.getItem('ctoken'),
                },
            });
            if (res.status === 200) {
                setData(res.data);
            }
        }
        catch (e) {
            navigate('/companylogin');
            console.log(e);
        }
    }

    const SetData = async (data) => {
        try {
            const res = await axios.post('/createjob', data, {
                headers: {
                    'x-access-token': localStorage.getItem('ctoken'),
                },
            });
            if (res.status === 200) {
                alert("data save");
            }
        }
        catch (e) {
            if(e.res.status==401){
                alert("please fill all fields")
            }
            console.log(e);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container" style={{margin:"80px auto"}}>
                    <h3>Company Name</h3>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="company_name" placeholder="company_name" onChange={handleInput} value={data.company_name} readOnly={true} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="company_location" placeholder="company_location" onChange={handleInput} value={data.company_location} />
                        </div>
                    </div>
                    <h3>Company Description</h3>
                    <div className="mb-3">
                        <textarea className="form-control" name="company_info" rows="6" placeholder="Company Description tells about Services, Working Conditions, What Company's Goals and Objective relateed stuff.  (55-60 words)" onChange={handleInput} value={data.company_info} readOnly={true} />
                    </div>
                    <h3>About Job</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="job_profile" placeholder="job Profile" onChange={handleInput} value={data.job_profile} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="salary" placeholder="Salary /Month" onChange={handleInput} value={data.salary} />
                        </div>
                    </div>
                    <h3>Skils Required</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="skill1" placeholder="Skills Require" onChange={handleInput} value={data.skill1} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="skill2" placeholder="Skills Require" onChange={handleInput} value={data.skill2} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="skill3" placeholder="Skills Require" onChange={handleInput} value={data.skill3} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="skill4" placeholder="Skills Require" onChange={handleInput} value={data.skill4} />
                        </div>
                    </div>
                    <h3>Important Dates</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="apply_date" placeholder="Apply Date DD-MM-YYYY" onChange={handleInput} value={data.apply_date} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="joining_date" placeholder="Joining Date DD-MM-YYYY" onChange={handleInput} value={data.joining_date} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" name="about_job" rows="6" placeholder="Job Description tells about Services, Working Conditions, What Company's Goals and Objective relateed stuff.  (55-60 words)" onChange={handleInput} value={data.about_job} />
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="type_of" placeholder="Type of Job" onChange={handleInput} value={data.type_of} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="no_of_openings" placeholder="No of Openings" onChange={handleInput} value={data.no_of_openings} />
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={() => SetData(data)}>Save Data</button>
                    <Link to={`/jobposts/${data.company_name}`} style={{margin:"36px"}}><button className="btn btn-primary">history</button></Link>
                </div>
            </form>
        </>
    )
}
export default CreateJob;