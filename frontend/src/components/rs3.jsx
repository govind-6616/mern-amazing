import { React } from "react";
import "../Style/rs3.css";
const Res3 = (props) => {
    var range1=props.value.range1;
    var range2=props.value.range2;
    var range3=props.value.range3;
    var range4=props.value.range4;
    var range5=props.value.range5;
    return (
        <>
            <div className="main2">
                <div className="flex31">
                    <div>
                        <h2>{props.value.name}</h2>
                        <h4>{props.value.profession}</h4>
                    </div>
                    <h5 style={{ color: "rgb(255, 181, 45)", fontSize: "24px" }}>PROFILE</h5>
                    <p>{props.value.objective}</p>
                </div>
                <div className="flex32">
                    <h5 style={{ color: "rgb(255, 181, 45)", fontSize: "24px" }}>EXPERIENCE</h5>
                    <hr></hr>
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
                        <p style={{ color: "grey", wordSpacing: "1px" }}>{props.value.task1}
                           
                    </p>
                    </div>

                </div>
                <div className="flex33">
                    <h5 style={{ color: "rgb(255, 181, 45)", fontSize: "24px" }}>CONTACT</h5>
                    <div className="contact">
                        <div>
                            <p>🤍</p>
                            <p>📞</p>
                            <p>💌</p>
                        </div>
                        <div>
                            <p>{props.value.city}</p>
                            <p>{props.value.mobile}</p>
                            <p>{props.value.email}</p>
                        </div>
                    </div>
                </div>
                <div className="flex34">
                    <h5 style={{ color: "rgb(255, 181, 45)", fontSize: "24px" }}>SKILLS</h5>
                    <div>
                        <p style={{ color: "white" }}>{props.value.skill1}</p>
                        <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "transparent", borderRadius: "0px", border: "1px solid white" }}>
                            <div class="progress-bar" style={{ width: `${range1}%`, backgroundColor: "white", color: "black" }}>{props.value.range1}</div>
                        </div>
                        <p style={{ color: "white" }}>{props.value.skill2}</p>
                        <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "transparent", borderRadius: "0px", border: "1px solid white" }}>
                            <div class="progress-bar" style={{ width: `${range2}%`, backgroundColor: "white", color: "black" }}>{props.value.range2}</div>
                        </div>
                        <p style={{ color: "white" }}>{props.value.skill3}</p>
                        <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "transparent", borderRadius: "0px", border: "1px solid white" }}>
                            <div class="progress-bar" style={{ width: `${range3}%`, backgroundColor: "white", color: "black" }}>{props.value.range3}</div>
                        </div>
                        <p style={{ color: "white" }}>{props.value.skill4}</p>
                        <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "transparent", borderRadius: "0px", border: "1px solid white" }}>
                            <div class="progress-bar" style={{ width: `${range4}%`, backgroundColor: "white", color: "black" }}>{props.value.range4}</div>
                        </div>
                        <p style={{ color: "white" }}>{props.value.skill5}</p>
                        <div class="progress" style={{ height: "12px", width: "150px", backgroundColor: "transparent", borderRadius: "0px", border: "1px solid white" }}>
                            <div class="progress-bar" style={{ width: `${range5}%`, backgroundColor: "white", color: "black" }}>{props.value.range5}</div>
                        </div>
                    </div>

                </div>
                <div className="flex35">
                    <h5 style={{ color: "rgb(255, 181, 45)", fontSize: "24px", marginTop: "50px" }}>ACHIEVEMENTS</h5>
                    <ul>
                        <li>{props.value.interest1}</li>
                        <li>{props.value.interest2}</li>
                        <li>{props.value.interest3}</li>
                        <li>{props.value.interest4}</li>
                    </ul>

                </div>
                <div className="flex36">
                    <h5 style={{ color: "rgb(255, 181, 45)", fontSize: "24px" }}>EDUCATION</h5>
                    <div>
                        <p className="edu">{props.value.degree} in {props.value.course}</p>
                        <p className="edu">({props.value.year})</p>
                    </div>
                    <p className="edu">{props.value.university}</p>
                </div>
            </div>
        </>
    )
}
export default Res3;