import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background-color: #655dbb;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50px
  position: absolute;
  z-index: 2;
  bottom: 30px;
  right: 30px;
`;

export const Label = styled.Text`
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;
