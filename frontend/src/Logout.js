import { React,useEffect } from "react";
import {useNavigate} from "react-router-dom";

const Logout=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
const token=localStorage.getItem('token');
const ctoken=localStorage.getItem('ctoken');
if(token || ctoken){
    localStorage.removeItem('token');
 localStorage.removeItem('ctoken');
    navigate('/login');
}
else{
    localStorage.clear();
    navigate('/login');
}

    },[]);
return(
    <>
    <h1>User Logout</h1>
    </>
)

}
export default Logout;