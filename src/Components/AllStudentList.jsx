import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AllStudentsList () {

    const {studentStates, dispatch} = useContext(ContextFunction);

    return (
        <div className="all-students lists">
        <h1>All Students</h1>
        {studentStates.students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="btnAll" onClick={() => dispatch({type: 'EDIT-STUDENT', payload:student})}>Edit</button>
            <button className="btnAll" onClick={() => dispatch({type: 'REMOVE-STUDENT', payload:student.id})}>Delete</button>
            <button className="btnAll" onClick={() => dispatch({type: 'UPDATE-STATUS', payload:{id: student.id, isPresent: true}})}>Add to Present List</button>
            <button className="btnAll" onClick={() => dispatch({type: 'UPDATE-STATUS', payload:{id: student.id, isPresent: true}})}>Add to Absent List</button>
          </li>
        ))}
      </div>
    )
}

export default AllStudentsList;