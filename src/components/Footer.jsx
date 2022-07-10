import React from 'react';
import { Col, FlexboxGrid, Footer as RSFooter, List } from 'rsuite';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';
import ListItem from 'rsuite/esm/List/ListItem';

const colStyle = {
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center'
};

const Footer = () => (
    <RSFooter>
        <List style={{ padding: 8 }}>
            <FlexboxGrid justify='space-between'>
                <FlexboxGridItem as={Col} colspan={6} style={colStyle}>
                    <List>
                        <h6>THICC MEMES INC</h6>
                        <ListItem>342-420-6969</ListItem>
                        <ListItem>Moscow, Russia</ListItem>
                        <ListItem>123 Street South North</ListItem>
                    </List>
                </FlexboxGridItem>
                <FlexboxGridItem as={Col} colspan={6} style={colStyle}>
                    <List>
                        <h6>Stuff</h6>
                        <ListItem>DANK MEMES</ListItem>
                        <ListItem>OTHER STUFF</ListItem>
                        <ListItem>GUD STUFF</ListItem>
                    </List>
                </FlexboxGridItem>
                <FlexboxGridItem as={Col} colspan={6} style={colStyle}>
                    <List>
                        <h6>WELL ANOTHER COLUMN</h6>
                        <ListItem>DANK MEMES</ListItem>
                        <ListItem>OTHER STUFF</ListItem>
                        <ListItem>GUD STUFF</ListItem>
                    </List>{' '}
                </FlexboxGridItem>
            </FlexboxGrid>
            <FlexboxGrid justify="center">
                <FlexboxGridItem>
                    <p>
                        &copy;{new Date().getFullYear()} THICC MEMES
                        | All rights reserved | Terms Of Service | Privacy
                    </p>
                </FlexboxGridItem>
            </FlexboxGrid>
        </List>
    </RSFooter>
);

export default Footer;