import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AllStudentsList () {

    const {studentStates, dispatch} = useContext(ContextFunction);

    return (
        <div className="all-students lists">
        <h1>All Students</h1>
        <ul>
            {studentStates.students.map((student) => (
              <li key={student.id}>
                {student.name}
                <button className="btnAll" onClick={() => dispatch({type: 'EDIT-STUDENT', payload:student})}>Edit</button>
                <button className="btnAll" onClick={() => dispatch({type: 'REMOVE-STUDENT', payload:student.id})}>Delete</button>
                <button className="btnAll" onClick={() => dispatch({type: 'CHANGE-STATUS', payload:{id: student.id, isPresent: true}})}>Add to Present List</button>
                <button className="btnAll" onClick={() => dispatch({type: 'CHANGE-STATUS', payload:{id: student.id, isPresent: false}})}>Add to Absent List</button>
              </li>
            ))}
        </ul>
      </div>
    )
}

export default AllStudentsList;