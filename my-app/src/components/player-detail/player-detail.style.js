import styled from 'styled-components';
export const PlayerDetailsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background: #7dccbe;
padding-left: 15px;
`;

export const TopContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`;

export const PlayerName = styled.div`
display: flex;
padding-left: 20px;
font-weight: bold;
font-size: 20px;
`;
//don't delete this one
export const PlayerNetworth = styled.div`
display: flex;
padding-right: 20px;
`;
//don't delete this one
export const BottomContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;
//don't delete this one
export const LeftContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
`;
//don't delete this one
export const RightContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

export const Item = styled.div`
display: flex;
justify-content: space-between;
`;

export const Inventory = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const Title = styled.div`
color: #3b3f3f;
font-weight:bold;
`;

export const Value = styled.div`
color: #3b3f3f;
p{
    margin: 0;
    padding: 0;
}
`;
export const PlayerTitle = styled.div`
color: #3b3f3f;
width: calc(100%+15px);
background: grey;
font-weight: bold;
font-size: 20px;
text-align: center;
color: whitesmoke;
margin-left:-15px;
`;
