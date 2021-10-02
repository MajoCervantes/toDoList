import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./Components/Header";
import ToDo from "./Components/ToDo";
import List from "./Components/List";
import TasksCompleted from "./Components/TasksCompleted";
import IncompletedTasks from "./Components/IncompletedTasks";
import Footer from "./Components/Footer";
// import ErasedTasks from "./Components/ErasedTasks";

const App = () => {
  //State
  const [listItems, setListItems] = useState([
    { title: "Sacar la basura", status: false },
  ]);
  const [erasedTasks, setErasedTasks] = useState([]);


  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data !== null) {
      setListItems(JSON.parse(data));
    } else {
      setListItems([{ title: "Sacar la basura", status: false }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(listItems));
  }, [listItems]);

  //Funciones
  const createNewTask = (taskName) => {
    if (!listItems.find((t) => t.title === taskName)) {
      setListItems([...listItems, { title: taskName, status: false }]);
    } else {
      alert("Esta tarea ya se encuentra en tu lista");
    }
  };

  const toggleTask = (task) =>
    setListItems(
      listItems.map((t) =>
        t.title === task.title ? { ...t, status: !t.status } : t
      )
    );

  const taskTableRows = (statusValue) =>
    listItems
      .filter((task) => task.status === statusValue)
      .map((task) => (
        <List key={task.title} task={task} toggleTask={toggleTask}/>
      ));

      
  return (
    <Router>
    <div className=" flex flex-col items-center justify-start h-screen w-screen">
      <Header listItems={listItems} />
      <div>
        <ToDo createNewTask={createNewTask} />

       
          <Switch>

            <Route path="/" exact>
              {listItems.map((task, index) => (
                <List
                  key={task.title}
                  task={task}
                  index={index}
                  listItems={listItems}
                  setListItems={setListItems}
                  toggleTask={toggleTask}
                  setErasedTasks= {setErasedTasks}
                  erasedTasks= {erasedTasks}

                />
              ))}
            </Route>

            <Route path="/incompleted" exact>
              <IncompletedTasks taskTableRows={taskTableRows}  />
            </Route>

            <Route path="/completed" exact>
              <TasksCompleted listItems={ listItems} toggleTask= {toggleTask} setListItems={setListItems} />
            </Route>
          
          </Switch>
       

        <Footer />

        {/* <div className="flex items-center justify-between">
          <AllTasks
            listItems={listItems}
            callback={(checked) => setListItems(checked)}
          />
          <div>
            <h1 className="text-pink">{taskTableRows(false)}</h1>
            <h1 className="text-pink">{taskTableRows(true)}</h1>
          </div>

          <IncompletedTasks
            incompletedTasks={incompletedTasks}
            callback={(checked) => setIncompletedTasks(checked)}
          />
          {incompletedTasks && (
            <div className="flex flex-col">
              <h1 className="text-pink">{taskTableRows(false)}</h1>
            </div>
          )}

          <TasksCompleted
            completedTasks={completedTasks}
            callback={(checked) => setCompletedTasks(checked)}
          />
          {completedTasks && (
            <div>
              <h1 className="text-pink">{taskTableRows(true)}</h1>
              <button>Eliminar</button>
            </div>
          )}

          <ErasedTasks />
          
        </div> */}
        {/* {listItems.map((task => (
          <h1>{task.title}</h1>
        )))}
        <h1>{taskTableRows(false)}</h1>
        <div>
          <TasksCompleted
            isChecked={completedTasks}
            callback={checked => setCompletedTasks(checked)}
          />
        </div>

        {completedTasks && (
            <h1 className= "text-pink">{taskTableRows(true)}</h1>
        )}
       */}
      </div>
    </div>
    </Router>
  );
};

export default App;
