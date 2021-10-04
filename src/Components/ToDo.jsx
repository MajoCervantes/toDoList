import React, { useState } from "react";

const ToDo = ({ createNewTask, children }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  const newTask = () => {
    if (newTaskName === "") {
      alert("Por favor ingresa una tarea");
    } else {
      createNewTask(newTaskName);
      setNewTaskName("");
    }
  };

  return (
    <div className="flex items-center justify-center p-5 bg-beige w-full mt-10 md:w-4/5">
      <input
        type="text"
        required
        className="outline-none border font-semibold border-pink text-lightPink bg-white p-2 w-1/2"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <button
        onClick={newTask}
        className=" bg-white text-lightPink px-6 font-semibold p-2 w-1/3"
      >
        Add
      </button>
      {children}
    </div>
  );
};

export default ToDo;
