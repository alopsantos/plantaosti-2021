import styled from 'styled-components'

export const Container = styled.div`
  width: 440px;
  max-width:440px;
  height: 100px;
  background: linear-gradient(111.39deg, #f5f5f9 0%, #f5f5f9 100%);
  position: fixed;
  z-index: 2;

  ul {
    list-style: none;
    display: flex;
  }
  ul li {
    margin: 18px 38px;
  }
  ul li a {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: #565e6a;
    background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
    box-shadow: 5px 5px 13px #b4b4b9, -5px -5px 13px #ffffff;
    border: 1px solid #ffffff;

    border-radius: 8px;
    border-width: 1px;
    transition: all 0.2s linear;

    &:hover {
      background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
      box-shadow: 5px 5px 13px #ffffff, -5px -5px 13px #b4b4b9;
      fill: #ffb36a;
    }
  }
`
