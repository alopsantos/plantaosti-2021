import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 30px;

  background: linear-gradient(111.39deg, #f5f5f9 0%, #f5f5f9 100%);

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 40px;
    margin-left: 32px;
    /* identical to box height */

    letter-spacing: 0.13em;

    color: #565e6a;
  }

  section {
    margin-top: 28px;
    margin-left: 28px;
    border-radius: 20px;
    width: 380px;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
    box-shadow: 5px 5px 13px #b4b4b9, -5px -5px 13px #ffffff;
    article {
      display: flex;
      flex-direction: column;

      img {
        width: 380px;
        height: 230px;
        border-radius: 20px 20px 0 0;
      }
    }
  }
`;

export const Detalhes = styled.div`
  padding: 13px;
  text-align: center;
  h3{
    font-size: 21px;
    color: #565E6A;
    margin-bottom: 16px;
  }
  
  p{
    color: #A6AAB2;
    text-align: left;
    line-height: 25px;
  }
  svg{
    fill: #565E6A;
    margin-right: 5px;
  }
`;

export const Blocos = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  span{
    color: #565E6A;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  ul{
    display: flex;
    margin-top: 21px;
    list-style: none;
    justify-content: space-between;
  }
  ul li{
    color:#A6AAB2;
  }
  strong{
    color: #565E6A;
    display: block;
  }

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: space-evenly;
    width: 150px;
    height: 48px;
    border-radius: 21px;
    border-width: 0;
    margin-top: 21px;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
    box-shadow: 5px 5px 13px #b4b4b9, -5px -5px 13px #ffffff;
    color: #565E6A;
    transition: all 0.4s linear;

    &:hover{
      background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
      box-shadow: 5px 5px 13px #ffffff, -5px -5px 13px #b4b4b9;

      color: #ffb36a;
      fill: #ffb36a;
    }
  }
`;
