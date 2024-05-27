import AbsentStudentsList from "./AbsentStudentList";
import AllStudentsList from "./AllStudentList";
import PresentStudentsList from "./PresentStudentList";

function StudentSection(props) {

    const {students, setStudents, setEditMode, setStudentName, setEditableStudents} = props;

    const toggleList = (student) => {
        const updatedList = students.map((item) => {
          if (item.id === student.id) {
            return {...item, isPresent: !item.isPresent}
          }
          return item;
        })
        setStudents(updatedList);
      }
    

    return(
        <div className="parent-element">
            <AllStudentsList 
            setEditMode = {setEditMode}
            setStudentName = {setStudentName}
            setEditableStudents = {setEditableStudents}
            setStudents = {setStudents}
            students = {students}
            />
            <PresentStudentsList 
            students = {students}
            toggleList = {toggleList}
            />
            <AbsentStudentsList 
            students = {students}
            toggleList = {toggleList}
            />
        </div>
    )
}

export default StudentSection;