function TaskRow({ task, toogleTask }) {
  return (
    <tr key={task.name}>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          value={task.done}
          checked={task.done}
          onChange={() => toogleTask(task)}
        />
      </td>
    </tr>
  );
}

export default TaskRow;
