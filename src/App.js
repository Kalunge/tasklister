import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Wife's birthday",
      day: 'February 4th at 8:30 am',
      reminder: true,
    },
    {
      id: 2,
      text: "Hubby's birthday",
      day: 'April 24th at 8:30 am',
      reminder: true,
    },
    {
      id: 3,
      text: "Son's birthday",
      day: 'July 1st at 8:30 am',
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    );
  };
  return (
    <div className="container">
      <Header name="Titus Muthomi" />
      {tasks.length ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDoubleTap={toggleReminder}
        />
      ) : (
        'No tasks'
      )}
    </div>
  );
};

export default App;
