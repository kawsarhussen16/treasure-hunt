import React, { Component } from 'react';
import Room from '../room';
import { MapContainer } from "./game-map.style"
import { getAdjacentRooms, getRoomDisplayState, validAdjacentRooms } from '../../gameFunctions/index';

class GameMap extends Component {
    render() {
        let { gameMap, currentRoomMapIndex } = this.props
        let validMoveLabels = null
        if (currentRoomMapIndex !== null) {
            validMoveLabels = validAdjacentRooms(gameMap, currentRoomMapIndex)
        }
        return (
            <MapContainer>
                {gameMap.map((room, index) => (
                    <Room key={index} room={room} index={index} displayState={getRoomDisplayState(gameMap, index, getAdjacentRooms(gameMap, index))} currentRoomMapIndex={currentRoomMapIndex} validMoveLabels={validMoveLabels} />
                ))}
            </MapContainer>
        );
    }
}

export default GameMap;