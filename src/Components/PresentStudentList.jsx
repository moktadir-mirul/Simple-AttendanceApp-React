import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function PresentStudentsList() {
    
    const {students, toggleList} = useContext(ContextFunction);

    return (
        <div className="present-list lists">
        <h1>Present Students List</h1>
        {students.filter((student) => student.isPresent === true).map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="btnAll" onClick={() => toggleList(student)}>Accidentally Added</button>
          </li>
        ))}
      </div>
    )
}

export default PresentStudentsList;