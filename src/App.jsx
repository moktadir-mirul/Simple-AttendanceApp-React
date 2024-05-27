import { useState } from 'react'
import './App.css'
//     {id: 1, name: 'Mirul',},
// {id: 2, name: 'Moktadir',},
// {id: 3, name: 'Khan',}
function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudents, setEditableStudents] = useState(null);

  const inputHandler = (title) => {
      setStudentName(title.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (studentName.trim() === '') return alert('Please enter a valid Name');
    editMode === true ? updateHandler():createHandler();
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

  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudents(student);
  }

  const removeHandler = (studentId) => {
    const updatedArr = students.filter((student) => student.id !== studentId);
    setStudents(updatedArr);
  }
  // {student.isPresent === true ? 'Present List' : 'Absent List'}
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

  const toggleList = (student) => {
    const updatedList = students.map((item) => {
      if (item.id === student.id) {
        return {...item, isPresent: !item.isPresent}
      }
      return item;
    })
    setStudents(updatedList);
  }


  return (
      <div className="mainArea">
        <div className="inputArea">
          <form onSubmit={submitHandler}>
            <input type="text" className="inputField" value={studentName} onChange={inputHandler}/>
            <button type='submit' className="btnAll">{editMode === true ? 'Update Student Name' : 'Add Student Name'}</button>
          </form>
        </div>
        <div className="students-list">
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
          <div className="present-list lists">
            <h1>Present Students List</h1>
            {students.filter((student) => student.isPresent === true).map((student) => (
              <li key={student.id}>
                {student.name}
                <button className="btnAll" onClick={() => toggleList(student)}>Accidentally Added</button>
              </li>
            ))}
          </div>
          <div className="absent-list lists">
            <h1>Absent Students List</h1>
            {students.filter((student) => student.isPresent === false).map((student) => (
              <li key={student.id}>
                {student.name}
                <button className="btnAll" onClick={() => toggleList(student)}>Accidentally Added</button>
              </li>
            ))}
          </div>
        </div>
      </div>
  )
}

export default App
