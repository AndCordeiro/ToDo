import React from 'react';
import {Modal as RNModal, ModalProps} from 'react-native';

import * as s from './Modal.styles';

const Modal = ({children, ...rest}: ModalProps) => (
  <RNModal {...rest} transparent>
    <s.Container>{children}</s.Container>
  </RNModal>
);

export default Modal;
