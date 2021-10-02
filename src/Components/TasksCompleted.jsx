import React, {useEffect, useState} from "react";
import List from "../Components/List"

const TasksCompleted = ({ listItems, toggleTask, setListItems}) => {
  const [items, setItems] = useState([]);
  useEffect(()=> {
    if(listItems) {
      const completedTasks = listItems
      .filter((task) => task.status === true)
      setItems(completedTasks)
    }
  }, [listItems])

  const erasedItems = (index, listItems) => {
    const deteleItems = [...listItems];
    // setErasedTasks(task[index]);
    deteleItems.splice(index, 1);
    setListItems(deteleItems);
    // console.log(erasedTasks)
   }

  return (

    <div>
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
