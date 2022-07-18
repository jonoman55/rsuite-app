// rsuitejs docs -> https://rsuitejs.com/guide/usage/
import { HashRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { Container, CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

import { Home, Forms, Header, Footer } from './components';
import useThemeStore from './store';

const App = () => {
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    return (
        <CustomProvider theme={theme}>
            <Container style={{ minHeight: '100vh' }}>
                <Router>
                    <Header
                        theme={theme}
                        toggleTheme={toggleTheme}
                    />
                    <Switch>
                        <Route path='/' element={<Home />} />
                        <Route path='/forms' element={<Forms />} />
                    </Switch>
                    <Footer />
                </Router>
            </Container>
        </CustomProvider>
    );
};

export default App;
