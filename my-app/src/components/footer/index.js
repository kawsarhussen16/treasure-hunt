import React, { Component } from 'react';
import { Action, FooterContainer, Explore, ActionDescription, ActionsContainer } from "./footer.style";

class Footer extends Component {

    render() {
        let { direction, autoTraversal } = this.props
        //You have flown south. Flight bonus: -10% CD. Wise ExplorerL -50% CD.
        return (
            <FooterContainer>
                <Explore> <button onClick={() => autoTraversal()} > Auto Explore </button> </Explore>

                <ActionsContainer>
                    <Action><button onClick={() => direction('n')} > N</button> </Action>
                    <Action><button onClick={() => direction('s')} > S</button> </Action>
                    <Action><button onClick={() => direction('e')} > E</button> </Action>
                    <Action><button onClick={() => direction('w')} > W</button> </Action>
                    <Action>Store</Action>
                    <Action>$</Action>
                    <Action>Drop</Action>
                </ActionsContainer>
                <ActionDescription>
                    You have flown south. Flight bonus: -10% CD. Wise bonus: -50% CD.
        </ActionDescription>
            </FooterContainer>
        );
    }
}

export default Footer;