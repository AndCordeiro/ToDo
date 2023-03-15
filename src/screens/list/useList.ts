import {useState} from 'react';

export type TaskType = {
  id: string;
  task: string;
  isChecked: boolean;
};

const useList = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [task, setTask] = useState<string>('');
  const [isVisible, setVisible] = useState<boolean>(false);

  const createTask = () => {
    const newTask = {
      id: new Date().getTime(),
      task,
      isChecked: false,
    };

    const newTasks = [...tasks, newTask] as TaskType[];

    setTasks(newTasks);
    setTask('');
    setVisible(false);
  };

  const checkedTask = (id: string) => {
    const newTask = tasks.find(item => item.id === id) || ({} as TaskType);
    const newTasks = tasks.filter(item => item.id !== id);

    setTasks([...newTasks, {...newTask, isChecked: !newTask.isChecked}]);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter(item => item.id !== id);

    setTasks(newTasks);
  };

  return {
    tasks,
    createTask,
    checkedTask,
    deleteTask,
    task,
    setTask,
    isVisible,
    setVisible,
  };
};

export default useList;
