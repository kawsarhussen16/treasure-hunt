import React, { Component } from 'react';
import { RoomInfo, RoomDetailsContainer, WrappedContainer, IDContainer, Title, RoomItem, DetailsContainer, Message } from "./room-detail.style"
class RoomDetails extends Component {
    render() {
        const { room_id, title, description, players, exits, cooldown, messages, items } = this.props.curRoom;
        let opt = ""
        const playerArray = players ? [...players].map(i => i + " ") : null;
        const upperExits = exits ? [...exits].forEach(i => { opt += i.toUpperCase() + " | "; }) : null;
        return (
            <RoomDetailsContainer>
                <WrappedContainer>
                    <RoomInfo>ROOM INFO</RoomInfo>
                    <IDContainer>
                        <Title>Room Id: {room_id}</Title>
                        <div className="room-item">{title}</div>
                    </IDContainer>
                    <Message>
                        <Title> Message: </Title>
                        <div className="room-item"> {(messages && messages.length) ? messages : " No Message"}</div>
                    </Message>
                    <DetailsContainer>
                        <RoomItem>
                            <Title>About</Title>
                            <div className="room-item">{description}</div>
                        </RoomItem>
                        <RoomItem>
                            <Title>Items:</Title>
                            <div className="room-item">{items && items.length ? items : " No Items"} </div>
                        </RoomItem>
                        <RoomItem>
                            <Title>Players: </Title>
                            <div className="room-item">{playerArray ? playerArray : " No player"}</div>
                        </RoomItem>
                        <div className="room-item"><Title>Cooldown time: </Title>{cooldown ? cooldown : 0} seconds</div>
                        <div className="room-item"><Title>Moving Options: </Title>{opt || upperExits ? (opt.slice(0, opt.length - 2)) : "None"} </div>

                    </DetailsContainer>
                </WrappedContainer>
            </RoomDetailsContainer>
        );
    }
}

export default RoomDetails;