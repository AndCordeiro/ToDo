import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Pressable} from 'react-native';

import * as s from './Item.styles';

type ItemProps = {
  setChecked: any;
  deleteTask: any;
  task: string;
  checked: boolean;
};

const Item = ({task, checked, setChecked, deleteTask}: ItemProps) => (
  <Pressable onPress={setChecked} onLongPress={deleteTask}>
    <s.Container checked={checked}>
      <BouncyCheckbox
        isChecked={checked}
        fillColor="#BBBBBB"
        unfillColor="#FFFFFF"
        onPress={setChecked}
      />
      <s.ContentDescription>
        <s.Description>{task}</s.Description>
      </s.ContentDescription>
    </s.Container>
  </Pressable>
);

export default Item;
