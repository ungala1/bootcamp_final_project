import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "../Auth/Logout/Logout";
import { useParams } from "react-router-dom";
import Options from "../Option/Option";

export default function Question(props) {
    // let { id } = useParams();
    console.log(props.test.questions[0].text)
    // console.log(questionList);
    return (
        <div>
            {/* <p>{props.test.questions[0].text}</p> */}
            <Link to="/courses">Courses</Link>
            <Logout logoutCallback={props.logoutCallback} />
        </div>
    )
}