import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AbsentStudentsList() {
    const {studentState, dispatch} = useContext(ContextFunction);
    return (
        <div className="absent-list lists">
        <h1>Absent Students List</h1>
        {studentState.students.filter((student) => student.isPresent === false).map((item) => (
          <li key={item.id}>
            {item.name}
            <button className="btnAll" onClick={() => dispatch({type: 'Update_Status', payload: {id: item.id, isPresent: !item.isPresent}})}>Accidentally Added</button>
          </li>
        ))}
      </div>
    )
}

export default AbsentStudentsList;