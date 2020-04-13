import React, { Component } from 'react';
import GameMap from "../game-map"
import RoomDetails from '../room-details';
import PlayerDetails from '../player-detail';
import styled from 'styled-components';

const BodyContainer = styled.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const BodyRightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 25%;
  @media screen and (max-width: 700px) {
      width: 100%;
  }
`;
const MapBody = styled.div`
  width: 75%;
  background: black;
  display: flex;
  justify-content:center;

  @media screen and (max-width: 600px) {
      width: 100%;
      display: block;
      margin-left: -40px;
      overflow-x: hidden;
  }

`;
class Body extends Component {

    render() {
        let { map, currentRoom, cooldown, currentRoomMapIndex, curRoom } = this.props
        return (
            <BodyContainer>
                <MapBody>
                    <GameMap gameMap={map} currentRoomMapIndex={currentRoomMapIndex} />
                </MapBody>
                <BodyRightContainer>
                    <RoomDetails room={currentRoom} curRoom={curRoom} />
                    <PlayerDetails cooldown={cooldown} player={curRoom.players} />
                </BodyRightContainer>
            </BodyContainer>
        );
    }
}

export default Body;