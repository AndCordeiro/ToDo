import React from 'react';
import {Pressable} from 'react-native';

import * as s from './Button.styles';

type ButtonProps = {
  onPress: any;
  label: string;
  variant: 'primary' | 'secondary';
};

const Button = ({onPress, label, variant}: ButtonProps) => (
  <Pressable onPress={onPress}>
    <s.Container variant={variant}>
      <s.Label>{label}</s.Label>
    </s.Container>
  </Pressable>
);

export default Button;
