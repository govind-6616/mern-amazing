import { React } from "react";
import "../Style/rs2.css";
const Res2 = (props) => {
    var range1=props.value.range1;
    var range2=props.value.range2;
    var range3=props.value.range3;
    var range4=props.value.range4;
    var range5=props.value.range5;
    return (
        <>
            <div className="main1">
                <div className="flex21">
                    <h1>Hello !</h1>
                    <h3>{(props.value.name)}</h3>
                    <h3 style={{ fontWeight: "lighter" }}>{props.value.profession}</h3>
                </div>
                <div className="flex22">
                    <div>
                        <p>{props.value.mobile}</p>
                        <p>{props.value.email}</p>
                        <p>{props.value.city}</p>
                    </div>
                </div>
                <div className="flex23">
                    <div>
                        <h3 className="headings"> PROFILE</h3>
                        <p>{props.value.objective}</p>
                    </div>
                </div>
                <div className="flex24">
                    <div>
                        <h3 className="headings"> EDUCATION</h3>
                        <p>{props.value.year}</p>
                        <p><b>{props.value.degree} in {props.value.course}</b> </p>
                        <p>{props.value.university}</p>
                    </div>
                </div>
                <div className="flex25">
                    <div>
                        <h3 className="headings"> SKILLS</h3>
                        <div className="box">
                            <p>{props.value.skill1}</p>
                            <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "rgba(210, 202, 202, 0.799)" }}>
                                <div class="progress-bar" style={{ width: `${range1}%` }}>{props.value.range1}</div>
                            </div>
                        </div>
                        <div className="box">
                            <p>{props.value.skill2}</p>
                            <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "rgba(210, 202, 202, 0.799)" }}>
                                <div class="progress-bar" style={{ width: `${range2}%` }}>{props.value.range2}</div>
                            </div>
                        </div>
                        <div className="box">
                            <p>{props.value.skill3}</p>
                            <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "rgba(210, 202, 202, 0.799)" }}>
                                <div class="progress-bar" style={{ width: `${range3}%` }}>{props.value.range3}</div>
                            </div>
                        </div>
                        <div className="box">
                            <p>{props.value.skill4}</p>
                            <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "rgba(210, 202, 202, 0.799)" }}>
                                <div class="progress-bar" style={{ width:`${range4}%` }}>{props.value.range4}</div>
                            </div>
                        </div>
                        <div className="box">
                            <p>{props.value.skill5}</p>
                            <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "rgba(210, 202, 202, 0.799)" }}>
                                <div class="progress-bar" style={{ width:`${range5}%` }}>{props.value.range5}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex26">
                    <div>
                        <h3 className="headings"> EXPERIENCES</h3>
                        <div>
                            <p>({props.value.start_time1}-{props.value.end_time1})</p>
                            <h4>{props.value.post1}</h4>
                            <p style={{display:"inline"}}><b>{props.value.company_name1},</b></p> <p style={{display:"inline"}}><b>{props.value.location1}</b></p>
                            <p style={{ color: "grey", wordSpacing: "1px" }}>{props.value.task1}
                               </p>
                        </div>
                        <div>
                            <p>({props.value.start_time2}-{props.value.end_time2})</p>
                            <h4>{props.value.post2}</h4>
                            <p style={{display:"inline"}}><b>{props.value.company_name2},</b></p> <p style={{display:"inline"}}><b>{props.value.location2}</b></p>
                            <p style={{ color: "grey", wordSpacing: "1px" }}>{props.value.task2}</p>
                        </div>
                    </div>
                </div>
                <div className="flex27">
                    <div>
                        <h3 className="headings"> ACHIEVEMENTS</h3>
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
export default Res2;