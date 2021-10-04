import React, { useEffect, useState } from "react";
import List from "../Components/List";

const IncompletedTaks = ({ listItems, toggleTask, setListItems }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (listItems) {
      const completedTasks = listItems.filter((task) => task.status === false);
      setItems(completedTasks);
    }
  }, [listItems]);

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
        />
      ))}
    </div>
  );
};

export default IncompletedTaks;
