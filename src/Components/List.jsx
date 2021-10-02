import React from "react";

const Item = ({task, toggleTask, index, listItems, setListItems, setErasedTasks, erasedTasks}) => {
  const erasedItems = () => {
    const deteleItems = [...listItems];
    deteleItems.slice(index, 1);
    setListItems(deteleItems);
    // setErasedTasks(task[index]);
    // console.log(erasedTaskxs)
   }; 
   
  return (
    <div className= "w-full flex items-center justify-between mt-5">
    
    <p className={`${task.status ? "line-through" : ""} ml-10 text-orange font-semibold text-lg`}>{task.title}</p>
    <button 
    className={`${task.status ? "bg-lightOrange" : "bg-white"} py-2 px-5 ml-5 text-orange border border-solid border-orange font-semibold hover:text-cream blue hover:bg-lightBlue hover:border-cream rounded-md `} 
    onClick={() =>toggleTask(task)}>  {task.status ? "Reset" : "Completar"}
    </button>
    
    {task.status && (
      <button 
      className="py-2 px-5 bg-pink ml-5 text-orange border border-solid border-orange font-semibold hover:text-cream blue hover:bg-lightBlue hover:border-cream rounded-md "
      onClick={erasedItems}
      >
      Borrar
      </button>
    )}
   
  </div>
  );
};

export default Item;
