import React, { Component } from 'react';
import {
    PlayerDetailsContainer, Title, TopContainer, PlayerName,
    BottomContainer, Value, LeftContainer, RightContainer,
    Item2, Item, PlayerNetworth, PlayerTitle
} from "./player-detail.style"
import axios from 'axios';

const URL = "https://lambda-treasure-hunt.herokuapp.com/api/adv/status"
const config = {
    headers: { Authorization: "Token 3d043586b25429e278eba26bfe1426267ecdf1f0" }
    // headers: {Authorization: "Token 07bc71474be560896f01e1b6e8202fd12628ead8"}
    // headers: {Authorization: "Token 80bd0d5dc2befdd2bb01d014daeb9b1780c36cf2"}
}
class PlayerDetails extends Component {
    constructor() {
        super();
        this.state = {
            name: " ",
            cooldown: 2.0,
            encumbrance: 2,
            strength: 10,
            speed: 10,
            gold: null,
            inventory: [],
            status: [],
            errors: [],
            messages: []
        }
    }
    firePlayerinfo = () => {
        let { cooldown } = this.props
        setTimeout(() => {
            this.collectPlayerinfo();
        }, cooldown * 1002)
    }
    componentDidMount() {
        this.firePlayerinfo();
    }

    collectPlayerinfo = () => {
        try {
            axios
                .post(URL, config)
                .then(res => {
                    this.setState(prevstate => {
                        return {
                            ...prevstate,
                            name: res.data.name,
                            cooldown: res.data.cooldown,
                            encumbrance: res.data.encumbrance,
                            strength: res.data.strength,
                            speed: res.data.speed,
                            gold: res.data.gold,
                            inventory: res.data.inventory,
                            status: res.data.status,
                            errors: res.data.errors,
                            messages: res.data.messages
                        };
                    })
                })
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error);
        }

    }
    render() {
        let { name, cooldown, encumbrance, strength, speed, gold, inventory } = this.state
        return (
            <PlayerDetailsContainer>
                <PlayerTitle>PLAYER INFO</PlayerTitle>
                <TopContainer>
                    <PlayerName>{name}</PlayerName>
                    <PlayerNetworth>{gold}</PlayerNetworth>
                </TopContainer>
                <BottomContainer>
                    <LeftContainer>
                        <Item>
                            <Title>Encumbrance:</Title>
                            <Value>{encumbrance}</Value>
                        </Item>
                        <Item>
                            <Title>Cooldown:</Title>
                            <Value>{cooldown}</Value>
                        </Item>
                        <Item>
                            <Title>Strength:</Title>
                            <Value>{strength}</Value>
                        </Item>
                        <Item>
                            <Title>Speed:</Title>
                            <Value>{speed}</Value>
                        </Item>
                    </LeftContainer>
                    <RightContainer>
                        <Item2>
                            <Title>Inventory:</Title>
                            <Value>{inventory}</Value>
                        </Item2>
                    </RightContainer>
                </BottomContainer>
            </PlayerDetailsContainer>
        );
    }
}
export default PlayerDetails;