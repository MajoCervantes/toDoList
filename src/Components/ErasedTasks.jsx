import React from "react";

const ErasedTasks = ({ deleteTasks, setDeleteTasks, index, task }) => {
  const erasedItems = () => {
    const deteleItems = [...deleteTasks];
    deteleItems.splice(index, 1);
    setDeleteTasks(deteleItems);
  };

  return (
    <div className="w-screen flex items-center justify-between mt-5 md:w-4/5">
      <p className="text-white font-semibold text-lg">{task.title}</p>

      <div className="flex items-center w-1/2">
        <button
          className="py-2 px-5 bg-pink ml-5 text-white border border-solid border-orange font-semibold hover:bg-lightPink rounded-md w-full"
          onClick={erasedItems}
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default ErasedTasks;
