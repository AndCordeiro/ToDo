import styled, {css} from 'styled-components/native';

export const Container = styled.View<{
  variant: 'primary' | 'secondary';
}>`
  ${({variant}) => css`
    background-color: #655dbb;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 16px;

    ${variant === 'secondary' &&
    `
        background-color: #666666;
   `}
  `}
`;

export const Label = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;
