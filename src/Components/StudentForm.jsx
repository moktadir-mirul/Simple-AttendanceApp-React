
function StudentForm(props) {

    const {editMode, setEditMode, setStudentName, setEditableStudents, editableStudents, setStudents, students, studentName} = props;

    const inputHandler = (title) => {
        setStudentName(title.target.value);
    }

    const createHandler = () => {
        const newStudent = {
          id: Date.now() + '',
          name: studentName,
          isPresent: undefined,
      }
      setStudents([newStudent, ...students]);
      setStudentName('');
  }

  const updateHandler = () => {
    const updatedStudentList = students.map((student) => {
      if (student.id === editableStudents.id) {
        return {...student, name:studentName}
      }
      return student;
    })
    setStudents(updatedStudentList);
    setStudentName('');
    setEditMode(false);
    setEditableStudents(null);
  }
  
    const submitHandler = (event) => {
      event.preventDefault();
      if (studentName.trim() === '') return alert('Please enter a valid Name');
      editMode === true ? updateHandler():createHandler();
    }

    return (
        <div className="inputArea">
        <form onSubmit={submitHandler} className={editMode ? 'editMode1' : 'inputField1'}>
          <input type="text" className={editMode ? 'editMode' : 'inputField'} value={studentName} onChange={inputHandler} placeholder="Enter the Student Name" />
          <button type='submit' className={editMode ? 'editBtn' : 'btnAll'}>{editMode === true ? 'Update Student Name' : 'Add Student Name'}</button>
        </form>
      </div>
    )
}
export default StudentForm;