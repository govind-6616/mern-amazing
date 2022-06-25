import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
const UserRegister = () => {
    const [data, setData] = useState({
        name: "", email: "", password: "", profession: "", mobile: "", city: ""
    });
    const handleChange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    }
    const SubmitEvent = (e) => {
        e.preventDefault();
    }
    const register = async (data) => {
        try {
            const res = await axios.post("/register", data);
            if (res.status === 200) {
                alert("User Register Successful");
            }

        }
        catch (e) {
            console.log("error");
            if (e.response.status == 402) {
                alert("fill all the fields Properly");
            }
            else if (e.response.status == 411) {
                alert("Password must be atleast 8 characters");
            }
            else if (e.response.status == 422) {
                alert("User already exist");
            }
            else if (e.response.status == 421) {
                alert("Mobile number must be valid");
            }

            else {
                console.log(e);
            }
        }
    }

    return (
        <>
            <div className="center">
                <div className="container1">
                    <div className="state">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" for="f"><Link to="/Register" className="nav-link"><a href="">Students / Users</a></Link></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label" for="e"><Link to="/RegisterCompany" className="nav-link"><a href="">Company Official</a></Link></label>
                        </div>
                    </div>
                    <div className="text">Register </div>
                    <form onSubmit={SubmitEvent} method="POST">
                        <div className="part">
                            <div className="one ">
                                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={data.name} />
                                <input type="email" placeholder="E-mail" name="email" onChange={handleChange} value={data.email} required />
                                <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} />
                            </div>
                            <div className="two ">
                                <input type="text" placeholder="Mobile Number" name="mobile" onChange={handleChange} value={data.mobile} />
                                <input type="text" placeholder="City" name="city" onChange={handleChange} value={data.city} />
                                <input type="text" placeholder="Job Role" name="profession" onChange={handleChange} value={data.profession} />
                            </div>
                        </div>
                        <div className="btn1">
                            <div className="inner"></div>
                            <button type="submit" onClick={() => register(data)}>Register</button>
                        </div>

                        <div className="signup-link">
                            Already a member ? <Link to="/login"><a href="">Login Now</a></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default UserRegister;