import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./Components/Header";
import ToDo from "./Components/ToDo";
import List from "./Components/List";
import TasksCompleted from "./Components/TasksCompleted";
import IncompletedTasks from "./Components/IncompletedTasks";
import Footer from "./Components/Footer";
import ErasedTasks from "./Components/ErasedTasks";

const App = () => {
  //State
  const [listItems, setListItems] = useState([
    { title: "Sacar la basura", status: false },
  ]);
  const [deleteTasks, setDeleteTasks] = useState([
    { title: "Pasear perros", status: true },
  ]);

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

  useEffect(() => {
    let data = localStorage.getItem("trash");
    if (data !== null) {
      setDeleteTasks(JSON.parse(data));
    } else {
      setDeleteTasks([{ title: "Pasear perros", status: true }]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("trash", JSON.stringify(deleteTasks));
  }, [deleteTasks]);

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

  // const taskTableRows = (statusValue) =>
  //   listItems
  //     .filter((task) => task.status === statusValue)
  //     .map((task) => (
  //       <List key={task.title} task={task} toggleTask={toggleTask}/>
  //     ));

  return (
    <Router>
      <div className=" flex flex-col items-center justify-start h-screen w-screen bg-gradient-to-r from-yellow via-orange-500 to-pink">
        <Header listItems={listItems} />
        <div className="w-full flex flex-col items-center bg-yellow h-3/5 mt-10 md:w-3/5  bg-gradient-to-r from-pink via-orange-500 to-yellow overflow-y-scroll">
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
                  deleteTasks={deleteTasks}
                  setDeleteTasks={setDeleteTasks}
                />
              ))}
            </Route>

            <Route path="/incompleted" exact>
              <IncompletedTasks
                listItems={listItems}
                toggleTask={toggleTask}
                setListItems={setListItems}
              />
            </Route>

            <Route path="/completed" exact>
              <TasksCompleted
                listItems={listItems}
                toggleTask={toggleTask}
                setListItems={setListItems}
                deleteTasks={deleteTasks}
                setDeleteTasks={setDeleteTasks}
              />
            </Route>

            <Route path="/erased" exact>
              {deleteTasks.map((task, index) => (
                <ErasedTasks
                  task={task}
                  deleteTasks={deleteTasks}
                  setDeleteTasks={setDeleteTasks}
                  index={index}
                  key={task.title}
                />
              ))}
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
