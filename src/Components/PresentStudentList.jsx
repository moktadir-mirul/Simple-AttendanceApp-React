import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function PresentStudentsList() {
    
    const {studentState, dispatch} = useContext(ContextFunction);

    return (
        <div className="present-list lists">
        <h1>Present Students List</h1>
        {studentState.students.filter((student) => student.isPresent === true).map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="btnAll" onClick={() => dispatch({type: 'Toggle_List', payload: student.id})}>Accidentally Added</button>
          </li>
        ))}
      </div>
    )
}

export default PresentStudentsList;