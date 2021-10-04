import React from "react";

const List = ({
  task,
  toggleTask,
  index,
  listItems,
  setListItems,
  deleteTasks,
  setDeleteTasks,
}) => {
  const erasedItems = () => {
    if (listItems.find((t) => t.status === true)) {
      setDeleteTasks([...deleteTasks, listItems[index]]);
    }
    const deteleItems = [...listItems];
    deteleItems.splice(index, 1);
    setListItems(deteleItems);
    console.log(deleteTasks);
  };

  return (
    <div className="w-full flex items-center justify-between mt-5 md:w-4/5 ">
      <p
        className={`${
          task.status ? "line-through" : ""
        } text-white font-semibold text-lg`}
      >
        {task.title}
      </p>

      <div className="flex items-center w-1/2">
        <button
          className="bg-white
           py-2 px-5 w-full ml-5 text-lightPink border border-solid border-orange font-semibold hover:text-white    hover:bg-lightPink rounded-md"
          onClick={() => toggleTask(task)}
        >
          {" "}
          {task.status ? "Reset" : "Completar"}
        </button>

        {task.status && (
          <button
            className="py-2 px-5 bg-pink ml-5 text-white border border-solid border-orange font-semibold hover:bg-lightPink rounded-md "
            onClick={erasedItems}
          >
            Borrar
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
