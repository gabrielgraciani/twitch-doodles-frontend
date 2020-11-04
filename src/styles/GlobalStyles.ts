import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }

  #root{
    display:flex;
    flex-direction:column;
    width:100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.primary}
  }

  button{
    cursor:pointer;
    border:0;
    outline:0;
    background:transparent;
  }

  ol, ul, li{
    list-style:none;
    margin:0;
  }

  a{
    text-decoration:none;
    color: ${props => props.theme.colors.primary};
    transition:0s;

    &:active, &:focus, &:hover {
      text-decoration: none;
      color: inherit;
    }
  }

  h1,h2,h3,h4,h5,h6{
    margin:0;
  }

`;
