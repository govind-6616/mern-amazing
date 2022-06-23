import { React } from "react";
import "../Style/rs1.css";
const Res1 = (props) => {
    return (
        <>
            <div className="mainn">
                <div className="flex1">
                    <div>
                        <h1><span style={{ color: "orange", fontSize: "46px", fontFamily: "cursive" }}>{props.value.name}</span></h1>
                        <h4>{props.value.profession}</h4>
                        <h5>{props.value.mobile}</h5>
                        <h5 style={{textDecoration:"underline",color:"orange"}}>{props.value.email}</h5>
                    </div>
                </div>
                <div className="flex2">
        
                   <p>{props.value.objective}</p>
                </div>
                <div className="flex3">
                    <span style={{ color: "rgba(33, 87, 116, 0.937)", fontSize: "25px" }}>
                        <h2 style={{ padding: "10px" }}>Experience</h2>
                    </span>
                    <hr></hr>
                    <div>
                        <p>({props.value.start_time1} - {props.value.end_time2})</p>
                        <p>{props.value.post1}</p>
                        <h4 style={{ fontSize: "21px", padding: "4px",display:"inline" }}>{props.value.company_name1},</h4> <h4 style={{ fontSize: "21px", padding: "4px",display:"inline" }}>{props.value.location1}</h4>
                        <p className="tasks">{props.value.task1}</p>
                    </div>
                    <div>
                        <p>({props.value.start_time2} - {props.value.end_time2})</p>
                        <p>{props.value.post2}</p>
                        <h4 style={{ fontSize: "21px", padding: "4px",display:"inline" }}>{props.value.company_name2},</h4> <h4 style={{ fontSize: "21px", padding: "4px",display:"inline" }}>{props.value.location2}</h4>
                        <p className="tasks">{props.value.task2}</p>
                    </div>
                </div>
                <div className="flex4">
                    <div>
                        <span style={{ color: "rgba(33, 87, 116, 0.937)", fontSize: "25px" }}>
                            <h2>Skills</h2>
                        </span>
                        <ul>
                            <li>{props.value.skill1} -  <span><b>{props.value.range1}</b></span></li>
                            <li>{props.value.skill2} -  <span><b>{props.value.range2}</b></span></li>
                            <li>{props.value.skill3} -  <span><b>{props.value.range3}</b></span></li>
                            <li>{props.value.skill4} -  <span><b>{props.value.range4}</b></span></li>
                            <li>{props.value.skill5} -  <span><b>{props.value.range5}</b></span></li>
                        </ul>

                    </div>
                </div>
                <div className="flex5">
                    <div>
                        <span style={{ color: "rgba(33, 87, 116, 0.937)", fontSize: "25px" }}>
                            <h2>Education</h2>
                        </span>
                        <p style={{ fontWeight: "700" }}>{props.value.degree} in {props.value.course}</p>
                        <p>{props.value.year}</p>
                        <p>{props.value.university}</p>
                    </div>
                </div>
                <div className="flex6">
                    <div>
                        <span style={{ color: "rgba(33, 87, 116, 0.937)", fontSize: "25px" }}>
                            <h2>Interests</h2>
                        </span>
                        <ul>
                            <li>{props.value.interest1}</li>
                            <li>{props.value.interest2}</li>
                            <li>{props.value.interest3}</li>
                            <li>{props.value.interest4}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Res1;