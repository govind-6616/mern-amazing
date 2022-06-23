import { React, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import axios from "axios";
import Res1 from "./components/rs1";
import Res2 from "./components/rs2";
import Res3 from "./components/rs3";
import f1 from "./Images/frame1.jpg";
import f2 from "./Images/frame2.jpg";
import f3 from "./Images/frame3.jpg";

const Select = () => {
    const naviagte = useNavigate();
    useEffect(() => {
        getData();
    }, []);
    const [val, setVal] = useState({
        _id: ""
    })
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const [def, setDef] = useState("second");
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
        }
        catch (e) {
            naviagte('/login');
            console.log(e);
        }
    }
    return (
        <>
            <div ref={componentRef}>
                {def === "first" && <Res1 value={val} />}
                {def === "second" && <Res2 value={val} />}
                {def === "third" && <Res3 value={val} />}
            </div>

            {/* <Link to={`/update/${val._id}`}><button>update Data</button></Link> */}
            {/* <Link to={`/Create/${val._id}`}><button>create resume</button></Link> */}

            <nav class="navbar sticky-bottom navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Select a Frame </a>
                    <button onClick={handlePrint} className="btn btn-primary">Download</button>
                    <Link to={`/update/${val._id}`}><button className="btn btn-primary">Update</button></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Select Frame </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        
                        <div className="nav-item">
                        <button onClick={() => setDef("first")}><img src={f1} height="40px" width="70px"/></button>
                        <h4>Frame 1</h4>
                        </div>
                        <div className="nav-item">
                        <button onClick={() => setDef("second")}><img src={f2} height="40px" width="70px"/></button>
                        <h4>Frame 2</h4>
                        </div>
                        <div className="nav-item">
                        <button onClick={() => setDef("third")}><img src={f3}height="40px" width="70px"/></button>
                        <h4>Frame 3</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Select;