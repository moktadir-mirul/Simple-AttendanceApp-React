import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";
function StudentForm() {

    const {editMode, inputHandler, submitHandler, studentName} = useContext(ContextFunction);


    return (
        <div className="inputArea">
        <form onSubmit={submitHandler} className="formClass">
          <input type="text" className={editMode ? 'editMode' : 'inputField'} value={studentName} onChange={inputHandler} placeholder="Enter the Student Name" />
          <button type='submit' className={editMode ? 'editBtn' : 'btnAll'}>{editMode === true ? 'Update Student Name' : 'Add Student Name'}</button>
        </form>
      </div>
    )
}
export default StudentForm;