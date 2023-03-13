import React from 'react';

import Item from '@components/Item';
import {ListRenderItem} from 'react-native';
import FAB from '@components/FAB';
import CreateTaskModal from '@components/CreateTaskModal';
import * as s from './List.styles';
import useList from './useList';
import type {TaskType} from './useList';

const List = () => {
  const {
    data,
    checkedTask,
    createTask,
    deleteTask,
    task,
    setTask,
    isVisible,
    setVisible,
  } = useList();

  const renderItems: ListRenderItem<TaskType> = ({item}) => (
    <Item
      key={item.id}
      setChecked={() => checkedTask(item.id)}
      task={item.task}
      checked={item.isChecked}
      deleteTask={() => deleteTask(item.id)}
    />
  );

  return (
    <s.Container>
      {data.filter(item => !item.isChecked).length > 0 && (
        <>
          <s.Title>Para fazer</s.Title>
          <s.FlatList
            data={data.filter(item => !item.isChecked)}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            extraData={data}
          />
        </>
      )}
      {data.filter(item => item.isChecked).length > 0 && (
        <>
          <s.Title>Concluído</s.Title>
          <s.FlatList
            data={data.filter(item => item.isChecked)}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            extraData={data}
          />
        </>
      )}
      <FAB onPress={() => setVisible(true)} />
      <CreateTaskModal
        isVisible={isVisible}
        value={task}
        onChangeText={setTask}
        onCancel={() => setVisible(false)}
        onConfirm={createTask}
      />
    </s.Container>
  );
};

export default List;
