import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [taskItem, setTaskItem] = useState([]);

  const [showCompleted, setshowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!taskItem.find((task) => task.name === taskName)) {
      setTaskItem([...taskItem, { name: taskName, done: false }]);
    }
  }

  const toogleTask = (task) => {
    setTaskItem(
      taskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItem(JSON.parse(data));
    }
  }, []);

  const cleanTask = () => {
    setTaskItem(taskItem.filter((task) => !task.done));
    setshowCompleted(false);
  };

  //si taskItem cambia queremos guardar nuevamente todos los datos en el localStotrage
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItem));
  }, [taskItem]);

  return (
    <div>
      <TaskCreator createNewTask={createNewTask}></TaskCreator>
      <TaskTable tasks={taskItem} toogleTask={toogleTask}></TaskTable>

      <VisibilityControl
        isChecked={showCompleted}
        cleanTask={cleanTask}
        setshowCompleted={(checked) => setshowCompleted(checked)}
      ></VisibilityControl>

      {showCompleted && (
        <TaskTable
          tasks={taskItem}
          toogleTask={toogleTask}
          showCompleted={showCompleted}
        ></TaskTable>
      )}
    </div>
  );
}

export default App;
