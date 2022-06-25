import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Style/form.css";

const CompanyLogin=()=>{
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
            const res = await axios.post("/companylogin", data);
            console.log(res.data.companyLogin);
            if (res.status == 200) {
                if (res.data.companyLogin) {
                    localStorage.setItem('ctoken', res.data.companyLogin);
                    alert(`Welcome ${res.data.data.company_name}`);

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

                    <label className="form-check-label" for="f"><Link to="/Login" className="nav-link"><a href="">Students / Users</a></Link></label>
                </div>
                <div className="form-check form-check-inline">
                    
                    <label className="form-check-label" for="e"><Link to="/companylogin" className="nav-link"><a href="">Company Official</a></Link></label>
                </div>
            </div>
                    <div className="text">
                        LOGIN FORM
                        <p>(Company Official)</p>
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
export default CompanyLogin;
