import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function StudentForm() {

  const {studentState, dispatch, submitHandler} = useContext(ContextFunction);
  
 
    return (
        <div className="inputArea">
        <form onSubmit={submitHandler} className="formClass">
          <input type="text" className={studentState.editMode === true ? 'editMode1' : 'inputField'} value={studentState.studentName} onChange={(evt) => dispatch({type: 'Change_Student', payload: evt.target.value})} placeholder="Enter the Student Name" />
          <button type='submit' className={studentState.editMode === true ? 'editBtn' : 'btnAll'}>{studentState.editMode === true ? 'Update Student Name' : 'Add Student Name'}</button>
        </form>
      </div>
    )
}
export default StudentForm;