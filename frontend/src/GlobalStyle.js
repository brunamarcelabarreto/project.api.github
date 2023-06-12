import { createGlobalStyle } from 'styled-components';
import bgStars from './assets/bgStars.svg';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #010409;
    background-image: url(${bgStars});
  }
`;
