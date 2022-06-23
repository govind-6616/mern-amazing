import { React,useState,useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import front from "./Images/front.jpg";
import step1 from "./Images/images.png";
import step2 from "./Images/download.png";
import mid from "./Images/mid2.jpg";
import step3 from "./Images/images (2).jpeg";
import "./Style/home.css";
const Home = () => {
  var step4="https://source.unsplash.com/random/500×500/?jobs"
  var step5="https://source.unsplash.com/random/500×500/?management";
  const[hid,setHid]=useState(false)
  const [val, setVal] = useState({
    _id: "",name:""
})
  useEffect(() => {
    getData();
    const token=localStorage.getItem("token");
    const ctoken=localStorage.getItem("ctoken");
    if(token || ctoken){
      setHid(true);
    }
}, []);
const getData = async () => {
  try {
      const data = await axios.get("/show", {
          headers: {
              'x-access-token': localStorage.getItem('token'),
          },
      });
      if (data.status == 200) {
          setVal(data.data);
          console.log(data);
      }
      else {
          setVal({...val});
      }
  }
  catch (e) {
 
      console.log(e);
  }
}
  return (
    <>
      <section id="home">
       <img src={front}/>
       
       <div className="f-heading">
        <h1 style={{color:"white"}} className="display-4 fst-italic">We Will Together</h1>
        <p className="ead my-3" style={{color:"white"}}>Changing the experience of making resumes on any device by making it simple and accessable to everyone.You can also search for jobs and get ahead in your Career.</p>

       </div>
       <div style={{top:"60%"}} className="f-heading">
       <Link to="/Login" hidden={hid}><button className="button-home" id="btn1">Login</button></Link>
        <Link to="/logout" hidden={!hid}><button className="button-home" id="btn2">Logout</button></Link>
          <Link to={`/Create/${val._id}`}><button className="button-home" id="btn2">Create Resume</button></Link>
       </div>
      </section>
      <div class="container col-xxl-8 px-4 py-5 middle">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={mid} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Get Ahead of Others by Attractive and Latest Resume Formats</h1>
            <p class="lead">Today most of companies are used AI enabled resume filters.Companies are in hunger to find creativity and Uniqueness in candidates let's increase your Chances of Getting Calls from Recruiters by using our Latest and attractive resume formats</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              

            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col animate">
            <div class="card h-100">
              <img src={step1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">1. Fill Up Details</h5>
                <p class="card-text">Avoid The use of helping verbs during fill up the details and try to be concise and short to the point </p>
                <Link to={`/Create/${val._id}`}><button className="btn btn-primary buttons" id="btn2">create resume</button></Link>
              </div>
            </div>
          </div>
          <div class="col animate">
            <div class="card h-100">
              <img src={step2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">2. Select Template</h5>
                <p class="card-text">First fill up the form complete step 1 then select the templates which you like most.</p>
                <Link to={`/Create/${val._id}`}><button className="btn btn-primary buttons" id="btn3">Select Template</button></Link>
              </div>

            </div>
          </div>
          <div class="col animate">
            <div class="card h-100">
              <img src={step3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">3. Easy Download</h5>
                <p class="card-text">Please Don't Customise the Download setting of Resume  as it will lead to bad appearance on resume templates</p>
                <Link to={`/Create/${val._id}`}><button className="btn btn-primary buttons" id="btn4">Download</button></Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-5 middle">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={step4} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Find Jobs Which you Deserve</h1>
            <p class="lead">WE provide the number of jobs in different fields with all reliable information and give our 100% to make our platform fraud free so that you can get these jobs and make your dream true. </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              
            </div>
          </div>
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-5 middle">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={step5} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">What can Recruiter's expect from us ?</h1>
            <p class="lead">WE give cutting edge solution to the problems of Recruiters give them a complete management system where they can see their Job posts ,Number of Candidiates applied ,Reject,Select candidate also view their profiles and much more</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-2  border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </a>
            <span class="mb-1 mb-md-0 text-muted">Made With 🧡 in India by Govind </span>
          </div>
        </footer>
      </div>

    </>
  )
}
export default Home;