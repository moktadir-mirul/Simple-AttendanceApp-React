import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function PresentStudentsList() {
    
    const {studentStates, dispatch} = useContext(ContextFunction);

    return (
        <div className="present-list lists">
        <h1>Present Students List</h1>
        {studentStates.students.filter((student) => student.isPresent === true).map((item) => (
          <li key={Date.now()+''}>
            {item.name}
            <button className="btnAll" onClick={() => dispatch({type: 'UPDATE-STATUS', payload:{id: item.id, isPresent: !item.isPresent}})}>Accidentally Added</button>
          </li>
        ))}
      </div>
    )
}

export default PresentStudentsList;