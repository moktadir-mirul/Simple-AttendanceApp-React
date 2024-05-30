import './App.css'
import StudentForm from './Components/StudentForm';
import StudentSection from './Components/StudentSection';
import { useContext } from "react";
import { ContextFunction } from "./Context/ContextAPI";

function App() {

  const {studentState, dispatch} = useContext(ContextFunction);

  return (
      <div className="mainArea">
        <StudentForm />
        <StudentSection />
      </div>
  )
}

export default App
