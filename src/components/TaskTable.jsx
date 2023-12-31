import TaskRow from "./taskRow";

function TaskTable({ tasks, toogleTask, showCompleted=false }) {

    const taskTableRows =  (doneValue) => {
        return (
            tasks
            //filtrame, dame las tarea que esten en true
            .filter(task => task.done === doneValue)
            //y luego recorrelas 
            .map((task) => {
                return <TaskRow key={task.name} task={task} toogleTask={toogleTask}></TaskRow>;
              })
        )
    }
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task nueva</th>
        </tr>
      </thead>
      <tbody>
        {
        // tasks.map((task) => {
        //     return <TaskRow key={task.name} task={task} toogleTask={toogleTask}></TaskRow>;
        //   })
        taskTableRows(showCompleted)
        }
      </tbody>
    </table>
  );
}

export default TaskTable;
