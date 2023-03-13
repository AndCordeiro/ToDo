import styled from 'styled-components/native';
import {FlatList as FL} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const FlatList = styled.FlatList`
  flex: 1;
` as unknown as typeof FL;

export const Title = styled.Text`
  margin: 10px 0 0 5px;
`;
