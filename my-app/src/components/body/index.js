import React, { Component } from 'react';
import GameMap from "../game-map"
import RoomDetails from '../room-details';
import PlayerDetails from '../player-detail';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
`;

const BodyRightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;


class Body extends Component {

    render() {
        let { map, currentRoom, currentRoomMapIndex, curRoom } = this.props
        return (
            <BodyContainer>
                <GameMap gameMap={map} currentRoomMapIndex={currentRoomMapIndex} />
                <BodyRightContainer>
                    <RoomDetails room={currentRoom} curRoom={curRoom} />
                    <PlayerDetails cooldown={curRoom.cooldown} player={curRoom.players} />
                </BodyRightContainer>
            </BodyContainer>
        );
    }
}

export default Body;