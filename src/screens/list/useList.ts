import {useState} from 'react';

export type TaskType = {
  id: string;
  task: string;
  isChecked: boolean;
};

const useList = () => {
  const [data, setData] = useState<TaskType[]>([]);

  const [task, setTask] = useState<string>('');
  const [isVisible, setVisible] = useState<boolean>(false);

  const createTask = () => {
    const newTask = {
      id: new Date().getTime(),
      task,
      isChecked: false,
    };

    const newData = [...data, newTask] as TaskType[];

    setData(newData);
    setTask('');
    setVisible(false);
  };

  const checkedTask = (id: string) => {
    const item = data.find(itemData => itemData.id === id) || ({} as TaskType);
    const newData = data.filter(itemData => itemData.id !== id);

    setData([...newData, {...item, isChecked: !item.isChecked}]);
  };

  const deleteTask = (id: string) => {
    const newData = data.filter(item => item.id !== id);

    setData(newData);
  };

  return {
    data,
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
