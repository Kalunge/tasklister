import Task from './Task';

const Tasks = ({ tasks, onDelete, onDoubleTap }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onDoubleTap={onDoubleTap}
        />
      ))}
    </>
  );
};

export default Tasks;
