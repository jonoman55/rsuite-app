// rsuitejs docs -> https://rsuitejs.com/guide/usage/
import React from 'react';
import { useToaster, Button, Container, CustomProvider, Notification } from 'rsuite';
import { ArrowRightLine } from '@rsuite/icons';
import 'rsuite/dist/rsuite.min.css';

import { Header, Content, Footer } from './components';
import useThemeStore from './store';

const App = () => {
    const toaster = useToaster();
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    const message = (
        <Notification duration={3000}>
            👋 Hello From React Suite!
        </Notification>
    );

    return (
        <CustomProvider theme={theme}>
            <Container style={{ minHeight: '100vh' }}>
                <Header
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <Content>
                    <Button
                        color='red'
                        appearance='primary'
                        onClick={() => toaster.push(message, {
                            placement: 'topEnd'
                        })}
                    >
                        <ArrowRightLine /> Click Me!
                    </Button>
                </Content>
                <Footer />
            </Container>
        </CustomProvider>
    );
};

export default App;
