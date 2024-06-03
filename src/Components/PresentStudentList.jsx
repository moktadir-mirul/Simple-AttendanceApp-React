import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function PresentStudentsList() {
    
    const { studentStates, dispatch } = useContext(ContextFunction);
    return (
        <div className="present-list lists">
        <h1>Present Students List</h1>
        <ul>
            {studentStates.students.filter((student) => student.isPresent === true).map((item) => (
              <li key={item.id}>
                {item.name}
                <button className="btnAll" onClick={() => dispatch({type: 'CHANGE-STATUS', payload:{id: item.id, isPresent: !item.isPresent}})}>Accidentally Added</button>
              </li>
            ))}
        </ul>
      </div>
    )
}

export default PresentStudentsList;