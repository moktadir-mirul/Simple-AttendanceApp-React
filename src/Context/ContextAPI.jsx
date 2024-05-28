import { createContext, useState } from "react";


export const ContextFunction = createContext();

const StudentComponentFunction = (props) => {
  
    const [studentName, setStudentName] = useState('');
    const [students, setStudents] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableStudents, setEditableStudents] = useState(null);

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

    const toggleList = (student) => {
        const updatedList = students.map((item) => {
          if (item.id === student.id) {
            return {...item, isPresent: !item.isPresent}
          }
          return item;
        })
        setStudents(updatedList);
      }

    const CtxValue = {
                        students, 
                        setStudents, 
                        studentName, 
                        setStudentName, 
                        editMode, 
                        setEditMode, 
                        editableStudents, 
                        setEditableStudents,
                        toggleList,
                        createHandler,
                        submitHandler,
                        inputHandler,
                        updateHandler,
                        editHandler,
                        sentToPresentList,
                        sentToAbsentList,
                        removeHandler
                    }

    return (
        <ContextFunction.Provider value={CtxValue}>
            {props.children}
        </ContextFunction.Provider>
    )
}

export default StudentComponentFunction;