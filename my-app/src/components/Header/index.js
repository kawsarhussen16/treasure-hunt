import React from 'react';
import { HeaderContainer, Title, Item, HeaderToggle } from "./header.style"
const Header = () => (
    <HeaderContainer>
        <Title>Treasure Hunt</Title>
        <HeaderToggle>
            <Item>Map</Item>
            <Item>About</Item>
        </HeaderToggle>
    </HeaderContainer>
);
export default Header;