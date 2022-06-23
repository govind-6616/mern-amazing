import { React, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Style/job.css";

const UserHistory = () => {
    useEffect(() => {
        Func();
        Func2();
    }, []);

    const [val, setVal] = useState([{
        company_name: "", job_profile: ""
    }]);

    const [sh, setSh] = useState({
        email: ""
    });

    const Func = async () => {
        try {
            const res = await axios.get(`/userHistory`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            });
            if (res.status == 200) {
                setVal(res.data);
            }

        }
        catch (e) {
            console.log(e);
        }
    }

    const Func2 = async () => {
        try {
            const res = await axios.get(`/show`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            });
            if (res.status == 200) {
                setSh(res.data.email);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    const checkStatus = async (Val) => {
        try {
            const res = await axios.patch(`/mystat/${sh}/${Val}`, {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                }
            });
            if (res.status == 200) {
                if (res.data.message=="true") {
                    alert("You are selected check your e-mail for Further process");
                }
                else {
                    alert("Pending...")
                }
                console.log(res);

            }
        }
        catch (e) {

        }
    }

    return (
        <>
            <h2 style={{textAlign:"center"}}>User History Of Applications</h2>
            {
                val.map((data, index) => {
                    return (
                        <div key={index} className="job">
                            <div>
                                <h3 id="job-profile">{data.job_profile}</h3>
                                <p id="cmpy_name"><b>{data.company_name} Energy private limited</b></p>
                            </div>
                            <div className="sub-div">
                                <p className="job-info">🏘 {data.company_location} India</p>
                                <p className="job-info">💲 {data.salary}/Month</p>
                            </div>
                            <p className="job-info">Type : {data.type_of}</p>
                            <Link to={`/Apply/${data._id}`}><button className="button">View</button></Link>
                            <button className="button" onClick={() => checkStatus(data._id)} style={{marginLeft:"8px "}}>Check Status</button>

                            <p>Recruiters check your profile in atleat 24 hours after apllied by you</p>
                        </div>
                    )
                })
            }
        </>
    )

}
export default UserHistory;