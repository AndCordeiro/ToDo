import styled, {css} from 'styled-components/native';

export const Container = styled.View<{
  checked: boolean;
}>`
  ${({checked}) => css`
    flex-direction: row;
    background-color: #bface2;
    align-items: center;
    border: 1px solid #ffffff;
    padding: 8px;
    ${checked &&
    `
        background-color: #DDDDDD;
   `};
  `}
`;

export const ContentDescription = styled.View`
  flex: 1;
`;

export const Description = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;
