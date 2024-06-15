import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#000',
};

export const darkTheme = {
  body: '#000',
  text: '#FFF',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.50s linear;
  }
`;
