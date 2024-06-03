import { useContext } from "react";
import { ContextFunction } from "../Context/ContextAPI";

function StudentForm()  {

    const {studentStates, dispatch, submitHandler} = useContext(ContextFunction);

    console.log(studentStates);

    return (
        <div className="inputArea">
        <form onSubmit={submitHandler} className="formClass">
          <input  type="text"
                  className={studentStates.editMode ? 'editMode' : 'inputField'}
                  value={studentStates.studentName} 
                  onChange={(e) => dispatch({type: 'CHANGE-STUDENT', payload: e.target.value})} 
                  placeholder="Enter the Student Name" />
          <button   type='submit' 
                    className={studentStates.editMode ? 'editBtn' : 'btnAll'}>
                  {studentStates.editMode === true ? 'Update Student Name' : 'Add Student Name'}
          </button>
        </form>
      </div>
    )
}
export default StudentForm;

