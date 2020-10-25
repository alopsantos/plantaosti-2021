import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background: #fff;
    color: #fff;
    font-family: 'Roboto', Helvetica, sans-serif;
  }
  hr{
    border: 1px solid #fff;
    margin-top: 13px;
    width: 90%;
    text-align: center;
    margin-left: 5%;
    box-shadow: 1px 1px 3px #b4b4b9, -1px -1px 3px #ffffff;
  }
  @media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}
`;