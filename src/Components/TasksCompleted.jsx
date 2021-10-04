import React, { useEffect, useState } from "react";
import List from "../Components/List";

const TasksCompleted = ({
  listItems,
  toggleTask,
  setListItems,
  setDeleteTasks,
  deleteTasks,
}) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (listItems) {
      const completedTasks = listItems.filter((task) => task.status === true);
      setItems(completedTasks);
    }
  }, [listItems]);

  const erasedItems = (index, listItems) => {
    if (listItems.find((t) => t.status === true)) {
      setDeleteTasks([...deleteTasks, listItems[index]]);
    }
    const deteleItems = [...listItems];
    // setErasedTasks(task[index]);
    deteleItems.splice(index, 1);
    setListItems(deteleItems);
    // console.log(erasedTasks)
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center mt-5 md:w-4/5">
      {items.map((task, index) => (
        <List
          key={task.title}
          task={task}
          index={index}
          listItems={listItems}
          setListItems={setListItems}
          toggleTask={toggleTask}
          erasedItems={erasedItems}
        />
      ))}
    </div>
  );
};

export default TasksCompleted;
