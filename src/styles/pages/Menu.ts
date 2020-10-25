import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;

  background: linear-gradient(111.39deg, #f5f5f9 0%, #f5f5f9 100%);

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

    background: linear-gradient(135deg, #e7e7ed 0%, #f5f5f9 100%);
    box-shadow: 5px 5px 13px #b4b4b9, -5px -5px 13px #ffffff;
    border-radius: 8px;
  }
  
  svg {
    fill: #565E6A;

    &:hover{
      fill: #FFB36A;
    }
  }
`
