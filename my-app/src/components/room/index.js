import React, { Component } from 'react';
import { getRoomWalls } from '../../gameFunctions';
import { RoomCell } from "./room.style"
class Room extends Component {
    render() {
        let { displayState, currentRoomMapIndex, index, validMoveLabels, room } = this.props
        let displayValue = ' ';
        let roomWalls = [];
        if (displayState !== 'black') {
            roomWalls = getRoomWalls(room)
        } else {
            roomWalls = []
        }
        if (displayState === 'white') {
            displayValue = ' '; //previously 'x'
        } else if (displayState === 'grey') {
            //displayValue = '?';
        } else if (displayState === 'green') {
            displayValue = '$'
        } else if (displayState === 'blue') {
            displayValue = '@'
        }
        if (validMoveLabels !== null) {
            if (validMoveLabels[index]) {
                displayValue = validMoveLabels[index]
            }
        }
        let isCurrentRoom = false;
        if (currentRoomMapIndex === index) {
            isCurrentRoom = true;
        }
        return (
            <>
                <RoomCell color={displayState} isCurrentRoom={isCurrentRoom} roomWalls={roomWalls} >{displayValue}</RoomCell>
            </>
        );
    }
}

export default Room;