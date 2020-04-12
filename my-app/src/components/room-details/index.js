import React, { Component } from 'react';
import { RoomInfo, RoomDetailsContainer, IDContainer, Title, Item, DetailsContainer, Message } from "./room-detail.style"
class RoomDetails extends Component {
    render() {
        const { room_id, title, description, players, items, exits, cooldown, messages } = this.props.curRoom;
        let opt = ""
        const upperExits = exits ? [...exits].forEach(i => { opt += i.toUpperCase() + " | "; }) : null;
        return (
            <RoomDetailsContainer>
                <RoomInfo>ROOM INFO</RoomInfo>
                <IDContainer>
                    <Title>Room Id: {room_id}</Title>
                    <div>{title}</div>
                </IDContainer>
                <Message>
                    <Title> Message: </Title>
                    <div> {(messages && messages.length) ? messages : " No Message"}</div>
                </Message>
                <DetailsContainer>
                    <Item>
                        <Title>About</Title>
                        <div>{description}</div>
                    </Item>
                    <Item>
                        <Title>Items:</Title>
                        <div>{(items && items.length) ? items : " No Items"} </div>
                    </Item>
                    <Item>
                        <Title>Players: </Title>
                        <div>{(players && players.length) ? players : "No Player"}</div>
                    </Item>
                    <div><Title>Cooldown time: </Title>{cooldown ? cooldown : 0} seconds</div>
                    <div><Title>Moving Options: </Title>{opt || upperExits ? (opt.slice(0, opt.length - 2)) : "None"} </div>

                </DetailsContainer>
            </RoomDetailsContainer>
        );
    }
}

export default RoomDetails;