import AbsentStudentsList from "./AbsentStudentList";
import AllStudentsList from "./AllStudentList";
import PresentStudentsList from "./PresentStudentList";
import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function StudentSection() {

    return(
        <div className="parent-element">

            <AllStudentsList  />
            <PresentStudentsList />
            <AbsentStudentsList />
        
        </div>
    )
}

export default StudentSection;