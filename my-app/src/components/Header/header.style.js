import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background: #515959;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.div`
  width: 70%;
  color: white;
  font-size: 30px;
  margin-left: 30px;
  font-weight: bold;
  @media screen and (max-width:700px){
    font-size: 25px;
    margin-left: 5px;
  }
`;

export const HeaderToggle = styled.div`
  display: flex;
  width: 20%;
  color: white;
  justify-content: flex-end;
`;

export const Item = styled.div`
    font-size: 15px;
    margin: 5px;s
`;
