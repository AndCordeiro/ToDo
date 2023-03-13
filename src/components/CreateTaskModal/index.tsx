import Button from '@components/Button';
import Modal from '@components/Modal';
import React from 'react';

import * as s from './CreateTaskModal.styles';

type CreateTaskModalProps = {
  isVisible: boolean;
  value: string;
  onChangeText: ((text: string) => void) | undefined;
  onCancel: any;
  onConfirm: any;
};

const CreateTaskModal = ({
  isVisible,
  value,
  onChangeText,
  onCancel,
  onConfirm,
}: CreateTaskModalProps) => (
  <Modal visible={isVisible}>
    <s.Title>Insira uma tarefa</s.Title>
    <s.Input
      multiline
      numberOfLines={3}
      value={value}
      onChangeText={onChangeText}
      placeholder="Digite"
      maxLength={120}
    />
    <s.Row>
      <s.Column>
        <Button onPress={onCancel} label="Cancelar" variant="secondary" />
      </s.Column>
      <s.Column>
        <Button onPress={onConfirm} label="Inserir" variant="primary" />
      </s.Column>
    </s.Row>
  </Modal>
);

export default CreateTaskModal;
