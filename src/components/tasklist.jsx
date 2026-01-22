import Task from "./task";

export default function TaskList({ tasks, onDelete}) {
  return (
    <div>
      {tasks.length === 0 && <h2>No tasks!</h2>}
      {tasks.map((task) => (
        <Task key={task.id} id={task.id} number={tasks.indexOf(task) + 1} text={task.text}  onDelete={onDelete}/>
      ))}
    </div>
  );
}
