function AllStudentsList (props) {

    const {setEditMode, setStudentName, setEditableStudents, setStudents, students} = props;

    const editHandler = (student) => {
        setEditMode(true);
        setStudentName(student.name);
        setEditableStudents(student);
      }

  const sentToPresentList = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert(`The student is already in ${student.isPresent === true ? 'Present List' : 'Absent List'}`)
    }
    const updatedPresentList = students.map((item) => {
      if (item.id === student.id) {
        return {...item, isPresent: true}
      } 
      return item
    }) 
    setStudents(updatedPresentList);
  }

  const sentToAbsentList = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert(`The student is already in ${student.isPresent === true ? 'Present List' : 'Absent List'}`)
    }
    const updatedAbsentList = students.map((item) => {
      if (item.id === student.id) {
        return {...item, isPresent: false}
      } 
      return item
    }) 
    setStudents(updatedAbsentList);
  }

  const removeHandler = (studentId) => {
    const updatedArr = students.filter((student) => student.id !== studentId);
    setStudents(updatedArr);
  }

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