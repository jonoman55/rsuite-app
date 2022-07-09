import React from 'react';
import { ButtonToolbar, Header as RSHeader, IconButton, Navbar, Nav } from 'rsuite';
import { Visible, Unvisible, Others, ArrowUp, TextImage, Review } from '@rsuite/icons';

const { Brand } = Navbar;
const { Item, Menu } = Nav;

const Header = ({ theme, toggleTheme }) => (
    <RSHeader>
        <Navbar>
            <Brand>THE GOAT COURSE</Brand>
            <Nav>
                <Item icon={<ArrowUp />}>Home</Item>
                <Item icon={<Others />}>Modal</Item>
                <Menu title="About">
                    <Item icon={<TextImage />}>Home</Item>
                    <Item icon={<Review />}>Modal</Item>
                </Menu>
            </Nav>
            <Nav pullRight>
                <Item>
                    <ButtonToolbar>
                        <IconButton
                            onClick={toggleTheme}
                            color="red"
                            appearance="ghost"
                            size="lg"
                            icon={theme ? <Visible /> : <Unvisible />}
                        />
                    </ButtonToolbar>
                </Item>
            </Nav>
        </Navbar>
    </RSHeader>
);

export default Header;