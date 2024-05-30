import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AbsentStudentsList() {
    const {studentState, dispatch} = useContext(ContextFunction);
    return (
        <div className="absent-list lists">
        <h1>Absent Students List</h1>
        {studentState.students.filter((student) => student.isPresent === false).map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="btnAll" onClick={() => dispatch({type: 'Update_Status', payload: {id: student.id, isPresent: !student.isPresent}})}>Accidentally Added</button>
          </li>
        ))}
      </div>
    )
}

export default AbsentStudentsList;