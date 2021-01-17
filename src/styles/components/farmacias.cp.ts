import styled from "styled-components";

export const Container = styled.a`
  width: 440px;
  height: 100vh;
  padding-top: 30px;

  background: linear-gradient(111.3deg, #f5f5f9 0%, #f5f5f9 100%);

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
        height: 150px;
        border-radius: 20px 20px 0 0;
      }
    }
  }
`;

export const Detalhes = styled.div`
padding: 13px;
  h3{
    font-size: 16px;
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
