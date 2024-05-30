import { createContext, useState, useReducer } from "react";


export const ContextFunction = createContext();

const initialState = {studentName: '',
                      students: [],
                      editMode: false,
                      editableStudents: null,
                      }
            
const studentReducer = (state, action) => {
      switch(action.type) {
          
         case 'Change_Student': {
            return {
              ...state,
              studentName: action.payload
            }
          }
          
          case 'Edit_Student': {
              return {
                ...state,
                editMode: true,
                studentName: action.payload.name,
                editableStudents: action.payload
              }
          }

          case 'Update_Student': {
            const updatedStudentLists = state.students.map((student) => {
              if (student.id === state.editableStudents.id) {
                return {
                  ...state,
                  name: state.studentName,
                }
              }
              return student;
            })
            return {
              ...state, 
              students: updatedStudentLists,
              editMode: false,
              editableStudents: null,
              studentName: '',
            }
          }
          
          case 'Remove_Student': {
            return {
              ...state,
              students: state.students.filter((item) => item.id !== action.payload)
            }
          }

          case 'Create_Student': {
            const newStudent = {
              id: Date.now()+'',
              name: state.studentName,
              isPresent: undefined
            }
            return {
              ...state,
              students: [...state.students, newStudent],
              studentName: '',
            }
          }

          // case 'Send_Present_list': {
          //   const updatedList = state.students.map((student) => {
          //     if(student.id === action.payload) {
          //       return {
          //         ...state,
          //         isPresent: true
          //       }
          //     }
          //     return student;
          //   })
          //   return {
          //     ...state,
          //     students: updatedList
          //   }
          // }
          // case 'Send_Absent_list': {
          //               const updatedList = state.students.map((student) => {
          //     if(student.id === action.payload) {
          //       return {
          //         ...state,
          //         isPresent: false
          //       }
          //     }
          //     return student;
          //   })
          //   return {
          //     ...state,
          //     students: updatedList
          //   }
          // }
          // case 'Toggle_list': {
          //   const updatedList = state.students.map((student) => {
          //     if(student.id === action.payload) {
          //       return {
          //         ...state,
          //         isPresent: !student.isPresent
          //       }
          //     }
          //     return student
          //   })
          //   return {
          //     ...state,
          //     students: updatedList
          //   }
          // }
          case 'Update_Status': {
            const updatedList = state. students.map((student) => {
              if(student.id === action.payload){
                return {
                  ...state,
                  isPresent: action.payload.isPresent
                }
              }
                return student
            })
            return {
              ...state,
              students: updatedList
            }
          }
      }
}



const StudentComponentFunction = (props) => {
  
    const [studentState, dispatch] = useReducer(studentReducer, initialState);
    

    const submitHandler = (event) => {
      event.preventDefault();
      if (studentState.studentName.trim() === '') return alert('Please enter a valid Name');
      studentState.editMode === true ? dispatch({type:'Update_Student'}):dispatch({type:'Create_Student'});
    }

  //   const inputHandler = (title) => {
  //       setStudentName(title.target.value);
  //   }

  //   const createHandler = () => {
  //       const newStudent = {
  //         id: Date.now() + '',
  //         name: studentName,
  //         isPresent: undefined,
  //     }
  //     setStudents([newStudent, ...students]);
  //     setStudentName('');
  // }

  // const updateHandler = () => {
  //   const updatedStudentList = students.map((student) => {
  //     if (student.id === editableStudents.id) {
  //       return {...student, name:studentName}
  //     }
  //     return student;
  //   })
  //   setStudents(updatedStudentList);
  //   setStudentName('');
  //   setEditMode(false);
  //   setEditableStudents(null);
  // }
  


  //   const editHandler = (student) => {
  //       setEditMode(true);
  //       setStudentName(student.name);
  //       setEditableStudents(student);
  //     }

  // const sentToPresentList = (student) => {
  //   if (student.isPresent === true || student.isPresent === false) {
  //     return alert(`The student is already in ${student.isPresent === true ? 'Present List' : 'Absent List'}`)
  //   }
  //   const updatedPresentList = students.map((item) => {
  //     if (item.id === student.id) {
  //       return {...item, isPresent: true}
  //     } 
  //     return item
  //   }) 
  //   setStudents(updatedPresentList);
  // }

  // const sentToAbsentList = (student) => {
  //   if (student.isPresent === true || student.isPresent === false) {
  //     return alert(`The student is already in ${student.isPresent === true ? 'Present List' : 'Absent List'}`)
  //   }
  //   const updatedAbsentList = students.map((item) => {
  //     if (item.id === student.id) {
  //       return {...item, isPresent: false}
  //     } 
  //     return item
  //   }) 
  //   setStudents(updatedAbsentList);
  // }

  // const removeHandler = (studentId) => {
  //   const updatedArr = students.filter((student) => student.id !== studentId);
  //   setStudents(updatedArr);
  // }

  //   const toggleList = (student) => {
  //       const updatedList = students.map((item) => {
  //         if (item.id === student.id) {
  //           return {...item, isPresent: !item.isPresent}
  //         }
  //         return item;
  //       })
  //       setStudents(updatedList);
  //     }

    const CtxValue = {
                        studentState,
                        dispatch,
                        submitHandler,
                    }

    return (
        <ContextFunction.Provider value={CtxValue}>
            {props.children}
        </ContextFunction.Provider>
    )
}

export default StudentComponentFunction;