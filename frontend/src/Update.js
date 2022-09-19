import React, { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import axios from "axios";

const Update = () => {
    const navigate=useNavigate();

    const [able, setAble] = useState(false);
    const [data, setData] = useState({
        objective: "", degree: "", course: "",year:"", university: "", start_time1: "", end_time1: "", post1: "", company_name1: "", location1: "", task1: "", start_time2: "", end_time2: "", post2: "", company_name2: "", location2: "", task2: "",
        interest1: "", interest2: "", interest3: "", interest4: "", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", range1: "0", range2: "0", range3: "0", range4: "0", range5: "0"
    });
    const handleInput = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
        console.log(data);
    }
    const { _id } = useParams();
    useEffect(()=>{
        singleData();
    },[]);
    const singleData = async () => {
        try {
            const data = await axios.get(`/show/`,{
                headers:{
                    'x-access-token': localStorage.getItem('token'),
                }, 
            });
            if (data.status == 200) {
                setData(data.data);
                console.log(data);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    const UpdateData = async (data) => {
        try {
            const updateData = await axios.patch(`/update/${_id}`, data,{
                headers:{
                    'x-access-token': localStorage.getItem('token'),
                },
            });

            if (updateData.status == 200) {
                alert("updated successful");
                navigate('/select');
            }
        }
        catch (e) {
            console.log(e);
            console.log("data");
        }

    }
    // const handleRadio = (e) => {
    //     if (e.target.value === "c") {
    //         setRead(false);
    //     }
    //     else {
    //         setRead(true);
    //     }
    // }
    const handleRadioExp = (e) => {
        if (e.target.value === "disabled") {
            setAble(true);
            setData({});
        }
        else if (e.target.value === "clear") {
            setAble(false);
            setData({ ...data });
        }
        else {
            setAble(false);
            setData({ ...data });
        }
    }
    return (
        <>
                    <form>
                <div className="container">
                    <h3>Objective</h3>
                    {/* <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="d" onChange={handleRadio} name="Radio" id="Radio1" />
                        <label className="form-check-label" for="Radio1" checked>Default</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" value="c" onChange={handleRadio} name="Radio" id="Radio2" />
                        <label className="form-check-label" for="Radio2">Customize</label>
                    </div> */}
                    <br/>
                    <div className="mb-3">
                        <textarea className="form-control" name="objective" rows="3" placeholder="Write Objective in (35-40 words)" onChange={handleInput} value={data.objective}>
                        </textarea>
                    </div>
                    <h3>Education</h3>
                 
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" name="degree" placeholder="Degree,Ex:B-Tech" onChange={handleInput} value={data.degree} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="course" placeholder="Course,Ex:Mechanical Engineering" onChange={handleInput} value={data.course} />
                        </div>

                        <div className="col">
                            <input type="text" className="form-control" name="university" placeholder="University Name" onChange={handleInput} value={data.university} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="year" placeholder="Duration(2018-2022)" onChange={handleInput} value={data.year} />
                        </div>
                    </div>
                    <h3>Experience</h3>
                    <label className="form-label"><b>First: </b></label>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="start_time1" placeholder="Start Date DD-MM-YYYY" onChange={handleInput} value={data.start_time1} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="end_time1" placeholder="End Date DD-MM-YYYY" onChange={handleInput} value={data.end_time1} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="post1" placeholder="Post/Role " onChange={handleInput} value={data.post1} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="company_name1" placeholder="Company Name" onChange={handleInput} value={data.company_name1} />
                        </div>

                        <div className="col">
                            <input type="text" className="form-control" name="location1" placeholder="Company location (City)" onChange={handleInput} value={data.location1} />
                        </div>
                    </div>
                    <label className="form-label"><b>Responsibilities/Tasks</b></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInput} value={data.task1} name="task1" placeholder="Write Task/Duties/Work type ">
                    </textarea>
                    <label className="form-label"><b>Second: </b></label>
                    <div className="form-check form-check-inline mx-2">
                        <input className="form-check-input" type="radio" name="RadioExp" id="inlineRadio3" value="disabled" onChange={handleRadioExp} />
                        <label className="form-check-label" for="inlineRadio3">Disabled</label>
                    </div>
                    <div className="form-check form-check-inline mx-2">
                        <input className="form-check-input" type="radio" name="RadioExp" id="inlineRadio4" value="clear" onChange={handleRadioExp} />
                        <label className="form-check-label" for="inlineRadio4">Clear</label>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="start_time2" placeholder="Start Date DD-MM-YYYY" onChange={handleInput} value={data.start_time2} disabled={able} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="end_time2" placeholder="End Date DD-MM-YYYY" onChange={handleInput} value={data.end_time2} disabled={able} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="post2" placeholder="Post/Role" onChange={handleInput} value={data.post2} disabled={able} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="company_name2" placeholder="Company Name" onChange={handleInput} value={data.company_name2} disabled={able} />
                        </div>

                        <div className="col">
                            <input type="text" className="form-control" name="location2" placeholder="Location (City)" onChange={handleInput} value={data.location2} disabled={able} />
                        </div>
                    </div>
                    <label className="form-label"><b>Responsibilities/Tasks</b></label>
                    <textarea className="form-control" name="task2" rows="3" onChange={handleInput} value={data.task2} disabled={able} placeholder="Write Task/Duties/Work type">
                    </textarea>
                    <h3>Interests/Achievements</h3>

                    <div className="mb-3">
                        <input type="email" className="form-control" name="interest1" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest1} />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="interest2" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest2} />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="interest3" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest3} />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="interest4" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest4} />
                    </div>
                    <h3>Skills</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="skill1" placeholder="write skills" onChange={handleInput} value={data.skill1} />
                        </div>
                        <div className='col'>
                            <input type="range" className="form-range-inline" name="range1" min="0" max="100"  onChange={handleInput} value={data.range1} />

                        </div>
                        <div className="col">
                            <small id="emailHelp" class="form-text text-muted"><b>{data.range1}%</b></small>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="skill2" placeholder="write skills" onChange={handleInput} value={data.skill2} />
                        </div>
                        <div className='col'>
                            <input type="range" className="form-range-inline" name="range2" min="0" max="100"  onChange={handleInput} value={data.range2} />

                        </div>
                        <div className="col">
                            <small id="emailHelp" class="form-text text-muted"><b>{data.range2}%</b></small>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="skill3" placeholder="write skills" onChange={handleInput} value={data.skill3} />
                        </div>
                        <div className='col'>
                            <input type="range" className="form-range-inline" name="range3" min="0" max="100"  onChange={handleInput} value={data.range3} />
                        </div>
                        <div className="col">
                            <small id="emailHelp" class="form-text text-muted"><b>{data.range3}%</b></small>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="skill4" placeholder="write skills" onChange={handleInput} value={data.skill4} />
                        </div>
                        <div className='col'>
                            <input type="range" className="form-range-inline" name="range4" min="0" max="100"  onChange={handleInput} value={data.range4} />
                        </div>
                        <div className="col">
                            <small id="emailHelp" class="form-text text-muted"><b>{data.range4}%</b></small>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" name="skill5" placeholder="write skills" onChange={handleInput} value={data.skill5} />
                        </div>
                        <div className='col'>
                            <input type="range" className="form-range-inline" name="range5" min="0" max="100"  onChange={handleInput} value={data.range5} />
                        </div>
                        <div className="col">
                            <small id="emailHelp" class="form-text text-muted"><b>{data.range5}%</b></small>
                        </div>
                    </div>
                </div>
            </form>
            <div style={{display:"flex",width:"70%",margin:"24px auto",justifyContent:"space-evenly"}}>
            <button onClick={() => UpdateData(data)} className="btn btn-outline-primary">Update Data</button>
            <button onClick={() => navigate('/')} className="btn btn-outline-primary">Back</button>
            </div>
           
            {/* <button onClick={() => singleData()}>get Data</button> */}
        </>
    )

}
export default Update;