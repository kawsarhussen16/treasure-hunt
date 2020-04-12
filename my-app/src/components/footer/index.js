import React, { Component } from 'react';
import { Action, FooterContainer, Explore, ActionDescription, ExploreContainer, AllButton, ActionsContainer, } from "./footer.style";

class Footer extends Component {

    render() {
        let { direction, autoTraversal } = this.props
        //You have flown south. Flight bonus: -10% CD. Wise ExplorerL -50% CD.
        return (
            <FooterContainer>
                <AllButton>
                    <ExploreContainer>
                        <Explore onClick={() => autoTraversal()} > Auto Explore</Explore>
                    </ExploreContainer>
                    <ActionsContainer>
                        <Action onClick={() => direction('n')} > N </Action>
                        <Action onClick={() => direction('s')} > S </Action>
                        <Action onClick={() => direction('e')} > E </Action>
                        <Action onClick={() => direction('w')} > W </Action>
                    </ActionsContainer>
                </AllButton>
                <ActionDescription>
                    You have flown south. Flight bonus: -10% CD. Wise bonus: -50% CD.
                </ActionDescription>
            </FooterContainer>
        );
    }
}

export default Footer;