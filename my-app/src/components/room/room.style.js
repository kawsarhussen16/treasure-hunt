import styled from 'styled-components';
export const RoomCell = styled.div`
  height: 14px;
  width: 14px;
  margin: 1px;
  
  @media screen and (max-width: 700px) {
    height: 6px;
    width: 6px;
  }
  border-top: ${({ roomWalls, color }) =>
    (color === 'black' && '3px solid black') ||
    (roomWalls.indexOf('n') !== -1 && '3px solid #B71C1C') ||
    '3px solid white'
  };

  border-bottom: ${({ roomWalls, color }) =>
    (color === 'black' && '3px solid black') ||
    (roomWalls.indexOf('s') !== -1 && '3px solid #B71C1C') ||
    '3px solid white'
  };

  border-right: ${({ roomWalls, color }) =>
    (color === 'black' && '3px solid black') ||
    (roomWalls.indexOf('e') !== -1 && '3px solid #B71C1C') ||
    '3px solid white'
  };

  border-left: ${({ roomWalls, color }) =>
    (color === 'black' && '3px solid black') ||
    (roomWalls.indexOf('w') !== -1 && '3px solid #B71C1C') ||
    '3px solid white'
  };


  border-radius: ${({ color }) =>
    (color === 'black' && '0%') ||
    '25%'
  };

  background-color: ${({ color, isCurrentRoom }) =>
    (isCurrentRoom && 'orange') ||
    color
  };

`;

export const DisplayValue = styled.div`
font-size: 12px;
margin-left: 2px;
margin-top: -1px;
padding: 0;
@media screen and (max-width: 700px) {
  display: none;
}
`

