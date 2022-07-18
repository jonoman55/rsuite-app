import { ButtonToolbar, Header as RSHeader, IconButton, Navbar, Nav, Avatar, Badge } from 'rsuite';
import { Visible, Unvisible, Others, ArrowRight, TextImage, Review } from '@rsuite/icons';

import ToolTip from './ToolTip';
import { NavLink } from './NavLink';
import Home from './pages/Home';
import Forms from './pages/Forms';

const { Brand } = Navbar;
const { Item, Menu } = Nav;

const Header = ({ theme, toggleTheme }) => {
    return (
        <RSHeader>
            <Navbar>
                <Brand as={NavLink} href='/' children={<Home />} style={{ cursor: 'pointer' }}>
                    THE GOAT COURSE
                </Brand>
                <Nav>
                    <Item as={NavLink} href='/' children={<Home />} icon={<ArrowRight />}>
                        Home
                    </Item>
                    <Item as={NavLink} href='/forms' children={<Forms />} icon={<Others />}>
                        Forms
                    </Item>
                    <Menu title='About'>
                        <Item as={NavLink} href='/' children={<Home />} icon={<TextImage />}>
                            Home
                        </Item>
                        <Item as={NavLink} href='/forms' children={<Forms />} icon={<Review />}>
                            Forms
                        </Item>
                    </Menu>
                </Nav>
                <Nav pullRight>
                    <Item onClick={toggleTheme}>
                        <ButtonToolbar>
                            <ToolTip message={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} placement='bottom' arrow={false} id='control-theme-hover'>
                                <IconButton
                                    color='red'
                                    appearance='ghost'
                                    size='md'
                                    icon={theme === 'dark' ? <Visible /> : <Unvisible />}
                                />
                            </ToolTip>
                        </ButtonToolbar>
                    </Item>
                    <Item>
                        <ToolTip message='Kermit The Frog Here!' placement='bottom' id='control-kermit-hover'>
                            <Badge content={69} style={{ marginTop: 8 }}>
                                <Avatar
                                    size='sm'
                                    src='https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg?20200925012908'
                                    alt='kermit1'
                                    circle
                                />
                            </Badge>
                        </ToolTip>
                    </Item>
                </Nav>
            </Navbar>
        </RSHeader >
    );
};

export default Header;