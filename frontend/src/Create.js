import React, { useState ,useEffect} from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem('token');
if(!token){
    navigate('/login');
}
    },[]);
    const [able, setAble] = useState(false);
    const [data, setData] = useState({
        objective: "The Knowledge that I have acquired through academic and non-academic exposure wants to be used in best possible way for the organisation", degree: "", course: "",year:"", university: "", start_time1: "", end_time1: "", post1: "", company_name1: "", location1: "", task1: "", start_time2: "", end_time2: "", post2: "", company_name2: "", location2: "", task2: "",
        interest1: "", interest2: "", interest3: "", interest4: "", skill1: "", skill2: "", skill3: "", skill4: "", skill5: "", range1: "0", range2: "0", range3: "0", range4: "0", range5: "0"

    });
    const { _id } = useParams();
    useEffect(()=>{
singleData(_id);
    },[]);
   
    const handleInput = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    }
    const singleData = async (_id) => {
        try {
            const data = await axios.get(`/show/${_id}`,{
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
            alert("Login to Continue");
            navigate('/login');
        }
    }
    const SetData = async (data) => {
        try {
            const res = await axios.patch(`/${_id}`, data,{
                headers:{
                    'x-access-token': localStorage.getItem('token'),
                },
            });
            if (res.status == 200) {
                alert("Data Save");
            }
        }
        catch (e) {
            console.log("error");
            console.log(e);
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

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <>
             <form onSubmit={handleSubmit}>
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
                            <input type="text" className="form-control" name="post1" placeholder="Post/Role" onChange={handleInput} value={data.post1} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="company_name1" placeholder="Company Name" onChange={handleInput} value={data.company_name1} />
                        </div>

                        <div className="col">
                            <input type="text" className="form-control" name="location1" placeholder="Location (city)" onChange={handleInput} value={data.location1} />
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
                        <input type="text" className="form-control" name="interest1" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest1} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="interest2" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest2} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="interest3" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest3} />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="interest4" placeholder="write your Interests/Achievements" onChange={handleInput} value={data.interest4} />
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
                            <small  class="form-text text-muted"><b>{data.range1}%</b></small>
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
                            <small  class="form-text text-muted"><b>{data.range2}%</b></small>
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
                            <small  class="form-text text-muted"><b>{data.range3}%</b></small>
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
                            <small  class="form-text text-muted"><b>{data.range4}%</b></small>
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
                            <small  class="form-text text-muted"><b>{data.range5}%</b></small>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={()=>{SetData(data)}}>Save Data</button>
                    <Link to={`/select`}><button className="btn btn-primary" style={{margin:"36px"}}>Next</button></Link>
                </div>
            </form>
        </>
    )

}
export default Create;