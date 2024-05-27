import { useState } from 'react'
import './App.css'
import StudentForm from './Components/StudentForm';
import StudentSection from './Components/StudentSection';

function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudents, setEditableStudents] = useState(null);

  return (
      <div className="mainArea">
       
        <StudentForm 
        editMode = {editMode}
        setEditMode = {setEditMode}
        setStudentName = {setStudentName}
        setEditableStudents = {setEditableStudents}
        setStudents = {setStudents}
        students = {students}
        studentName = {studentName}
        editableStudents = {editableStudents}
        />

        <StudentSection 
        setEditMode = {setEditMode}
        setStudentName = {setStudentName}
        setEditableStudents = {setEditableStudents}
        setStudents = {setStudents}
        students = {students}
        />
      </div>
  )
}

export default App
