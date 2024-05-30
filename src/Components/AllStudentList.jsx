import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function AllStudentsList () {

    const {studentState, dispatch} = useContext(ContextFunction);

    return (
        <div className="all-students lists">
        <h1>All Students</h1>
        {studentState.students.map((student) => (
          <li key={student.id}>
            {student.name}
            <button className="btnAll" onClick={() => dispatch({type: 'Edit_Student', payload: student})}>Edit</button>
            <button className="btnAll" onClick={() => dispatch({type: 'Remove_Student', payload: student.id})}>Delete</button>
            <button className="btnAll" onClick={() => dispatch({type: 'Update_Status', payload:{id: student.id, isPresent: true}})}>Add to Present List</button>
            <button className="btnAll" onClick={() => dispatch({type: 'Update_Status', payload:{id: student.id, isPresent: false}})}>Add to Absent List</button>
          </li>
        ))}
      </div>
    )
}

export default AllStudentsList;