import React, { Component } from 'react';
import {
    PlayerDetailsContainer, Title, PlayerTitle, Value, Item, Inventory
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
            name: "Mr Lion",
            cooldown: 10,
            encumbrance: 19,
            strength: 10,
            speed: 10,
            gold: 8600,
            inventory: [
                "shiny treasure",
                "shiny treasure",
                "shiny treasure",
                "shiny treasure",
                "shiny treasure",
                "great treasure",
                "great treasure",
                "small treasure",
                "tiny treasure"
            ],
            abilities: [
                "pray",
                "mine"
            ],
            status: [],
            errors: [],
            messages: [],
        }
    }
    firePlayerinfo = () => {
        let { cooldown } = this.state.cooldown;
        setTimeout(async () => {
            await this.collectPlayerinfo();
        }, cooldown)
    }
    componentDidMount() {
        this.setState({ cooldown: this.props.cooldown })
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
        let { name, cooldown, encumbrance, strength, speed, gold, inventory } = this.state;
        let treasures = [...inventory];
        return (
            <PlayerDetailsContainer>
                <PlayerTitle>PLAYER INFO</PlayerTitle>
                <PlayerTitle>{name}</PlayerTitle>
                <Item>
                    <Title>Gold:</Title><Value> {gold}</Value>
                </Item>
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

                <Inventory>
                    <Title>Inventory:</Title>
                    <Value> {treasures.map(treasure => <p>{treasure}</p>)}</Value>
                </Inventory>
            </PlayerDetailsContainer>
        );
    }
}
export default PlayerDetails;