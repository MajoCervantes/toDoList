import React, {useState} from "react";

const ToDo = ({createNewTask, children}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = e => setNewTaskName(e.target.value);

  const newTask = () => {
    if(newTaskName === ""){
      alert("Por favor ingresa una tarea")
    }else {

      createNewTask(newTaskName);
      setNewTaskName("");
    }
    
  }
  
  return (
    <div className="flex items-center justify-center p-5 bg-beige w-full">
      <input
        type="text"
        required
        className="outline-none border border-orange text-orange"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <button onClick={newTask} className=" bg-lightBeige text-orange">
        Add
      </button>
      {children}
    </div>
  )
};

export default ToDo;
