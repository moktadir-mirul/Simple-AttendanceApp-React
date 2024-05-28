import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AllStudentsList () {

    const {editHandler, removeHandler,sentToPresentList, sentToAbsentList, students} = useContext(ContextFunction);

    return (
        <div className="all-students lists">
        <h1>All Students</h1>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="btnAll" onClick={() => editHandler(student)}>Edit</button>
            <button className="btnAll" onClick={() => removeHandler(student.id)}>Delete</button>
            <button className="btnAll" onClick={() => sentToPresentList(student)}>Add to Present List</button>
            <button className="btnAll" onClick={() => sentToAbsentList(student)}>Add to Absent List</button>
          </li>
        ))}
      </div>
    )
}

export default AllStudentsList;