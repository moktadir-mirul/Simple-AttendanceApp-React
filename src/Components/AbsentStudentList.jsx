import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AbsentStudentsList() {
    const {students, toggleList} = useContext(ContextFunction);
    return (
        <div className="absent-list lists">
        <h1>Absent Students List</h1>
        {students.filter((student) => student.isPresent === false).map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="btnAll" onClick={() => toggleList(student)}>Accidentally Added</button>
          </li>
        ))}
      </div>
    )
}

export default AbsentStudentsList;