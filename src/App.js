import React from 'react';
import { Container, CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import { Header, Content, Footer } from './components';
import useThemeStore from './store';

const App = () => {
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    return (
        <CustomProvider theme={theme}>
            <Container style={{ minHeight: '100vh' }}>
                <Header
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <Content>
                    <p>Hello from rsuite</p>
                </Content>
                <Footer />
            </Container>
        </CustomProvider>
    );
};

export default App;
