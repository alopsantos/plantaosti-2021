import styled from 'styled-components'

export const Container = styled.a`
    display: flex;
    align-items: center;
    width: 380px;
    margin-top: 28px;
    margin-left: 28px;
    border-radius: 20px;
    text-decoration: none;
    background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
    box-shadow: 5px 5px 13px #b4b4b9, -5px -5px 13px #ffffff;

    &:hover {
      background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
      box-shadow: 5px 5px 13px #ffffff, -5px -5px 13px #b4b4b9;
    }
  }
  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 140px;

    span {
      margin-left: 20px;
    }

    img {
      width: 380px;
      height: 230px;
      border-radius: 20px 20px 0 0;
    }
`

export const Detalhes = styled.div`
  padding: 13px;
  text-align: center;
  h3 {
    font-size: 21px;
    color: #565e6a;
    margin-bottom: 16px;
    text-align: left;
  }

  p {
    color: #a6aab2;
    text-align: left;
    line-height: 25px;
  }
  svg {
    fill: #565e6a;
    margin-right: 5px;
  }
`

export const Sigla = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #f5f5f9;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #565e6a;
    font-size: 36px;
    text-transform: uppercase;
    margin-left: 0 !important;
  }
`
