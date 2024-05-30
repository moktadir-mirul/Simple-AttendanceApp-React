import { createContext, useReducer } from "react";


export const ContextFunction = createContext();

const initialState = {studentName: '',
                      students: [],
                      editMode: false,
                      editableStudents: null,
}

const StudentReducer = (state, action) => {
  switch (action.type) {

    case 'CHANGE-STUDENT': {
      return {
          ...state,
          studentName: action.payload,
      }
    }

    case 'EDIT-STUDENT': {
      return {
        ...state,
        editMode: true,
        editableStudents: action.payload,
        studentName: action.payload.name,
      }
    }

    case 'REMOVE-STUDENT': {
      return {
        ...state,
        students: state.students.filter((item) => item.id !== action.payload),
      }
    }

    case 'CREATE-STUDENT': {
      const newStudent = {
                          id: Date.now() + '',
                          name: state.studentName,
                          isPresent: undefined ,
                          }
            return {
              ...state,
              students: [...state.students, newStudent],
              studentName: '',
            }
    }

    case 'UPDATE-STUDENT': {
      const updatedStudentList = state.students.map((student) => {
        if( student.id === state.editableStudents.id) {
          return {
            ...student,
            name: state.studentName, 
          }
        }
        return student
      })
      return {
        ...state,
        students: updatedStudentList,
        editMode: false,
        editableStudents: null,
        studentName: '',
      }
    }

    case 'CHANGE-STATUS': {

      const updatedList = state.students.map((student) => {
        // if (student.isPresent === true || student.isPresent === false) {
        //   return alert(`The student is already in ${student.isPresent === true ? 'Present List' : 'Absent List'}`)
        // }else 
        
        if(student.id === action.payload.id) {
          return {
            ...student,
            isPresent: action.payload.isPresent
          }
        }
        return student;
      })
      return {
        ...state,
        students: updatedList,
      }
    }

    default: {
      return state;
    }

  }
}

const StudentComponentFunction = (props) => {
  
    const [studentStates, dispatch] = useReducer(StudentReducer, initialState);

    const submitHandler = (event) => {
      event.preventDefault();
      if (studentStates.studentName.trim() === '') return alert('Please enter a valid Name');
      studentStates.editMode === true ? dispatch({type: 'UPDATE-STUDENT'}):dispatch({type: 'CREATE-STUDENT'});
    }

    const CtxValue = {studentStates, 
                      dispatch, 
                      submitHandler}

    return (
        <ContextFunction.Provider value={CtxValue}>
            {props.children}
        </ContextFunction.Provider>
    )
}

export default StudentComponentFunction;