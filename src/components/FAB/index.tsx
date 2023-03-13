import React from 'react';

import * as s from './FAB.styles';

type ButtonProps = {
  onPress: any;
};

const FAB = ({onPress}: ButtonProps) => (
  <s.Container onPress={onPress}>
    <s.Label>+</s.Label>
  </s.Container>
);

export default FAB;
