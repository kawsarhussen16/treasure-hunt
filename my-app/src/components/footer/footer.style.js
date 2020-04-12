import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  background: #515959;
  min-height: 50px;
`;
export const AllButton = styled.div`
width: 50%;
margin:0;
padding: 0;
display: flex;
flex-wrap: wrap;
align-items: center;
@media screen and (max-width: 700px) {
  width: 100%;
}
`

export const ExploreContainer = styled.div`
width: 25%;
@media screen and (max-width: 700px) {
  width: 15%;
}
`
export const Explore = styled.div`
  color: white;
  width: 100px;
  border-radius: 5px;
  background: grey;
  margin: auto;
  height: auto;
  padding: 2px;
  text-align: center;
  &:hover{
    background: black;
    color: grey;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 50px;
    font-size: 10px;
    padding: 2px;
  }
`;
export const ActionsContainer = styled.div`
  display: flex;
  width: 63%;
  justify-content: flex-end;
  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

export const Action = styled.div`
  color: white;
  padding: 5px;
  width: 40px;
  background: white;
  background: black;
  text-align: center;
  margin: auto;
  border-radius: 5px;
  &:hover{
      cursor: pointer;
      background: white;
      color: black;
  }
  
`

export const ActionDescription = styled.div`
  display: flex;
  background: #dcdcdc;
  color: #505858;
  justify-content: center;
  width: 50%;
  text-align: center;
  align-items:center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
