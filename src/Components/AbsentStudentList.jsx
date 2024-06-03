import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AbsentStudentsList() {
    const {studentStates, dispatch} = useContext(ContextFunction);
    return (
        <div className="absent-list lists">
        <h1>Absent Students List</h1>
        <ul>
            {studentStates.students.filter((student) => student.isPresent === false).map((item) => (
              <li key={item.id}>
                {item.name}
                <button className="btnAll" onClick={() => dispatch({type: 'CHANGE-STATUS', payload:{id: item.id, isPresent: !item.isPresent}})}>Accidentally Added</button>
              </li>
            ))}
        </ul>
      </div>
    )
}

export default AbsentStudentsList;