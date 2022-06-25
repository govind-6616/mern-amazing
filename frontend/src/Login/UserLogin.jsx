import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/form.css";

const UserLogin=()=>{
    const [data, setData] = useState({
        email: "", password: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    }
    const SubmitEvent = (e) => {
        e.preventDefault();
    }
    const Login = async (data) => {
        try {
            const res = await axios.post("/login", data);
            console.log(res.data.userLogin);
            console.log(res);
            if (res.status == 200) {
                if (res.data.userLogin) {
                    localStorage.setItem('token', res.data.userLogin);
                    alert(`Welcome ${res.data.data.name}`);

                    navigate('/');
                }
                else {
                    alert("Clean cache data or Re-register ");
                }
            }

        }
        catch (e) {
            if (e.response.status == 401) {
                alert("password not match")
            }
            else if (e.response.status == 411) {
                alert("e-mail not exist");
            }
            console.log(e);
        }
    }
return(
    <>
     <div className="center">
                <div className="container1">
                <div className="state">
                <div className="form-check form-check-inline">
                
                    <Link to="/login" className="nav-link"><a href="">Students / Users</a></Link>
                </div>
                <div className="form-check form-check-inline">
                
                    <Link to="/companylogin" className="nav-link"><a href="">Company Official</a></Link>
                </div>
            </div>
                    <div className="text">
                        LOGIN FORM
                    </div>
                    <form method="POST" onSubmit={SubmitEvent}>
                        <div className="data">
                            <input type="text" placeholder="Username" name="email" required onChange={handleChange} />
                        </div>
                        <div className="data">
                            <input type="password" placeholder="Password" name="password" required onChange={handleChange} />
                        </div>
                        <div className="btn1">
                            <div className="inner"></div>
                            <button type="submit" onClick={() => Login(data)}>Login</button>
                        </div>
                        <div className="signup-link">
                            Not a member ? <Link to="/Register"><a href="">Signup Now</a></Link>
                        </div>
                    </form>
                </div>
            </div>
    </>
)
}
export default UserLogin;