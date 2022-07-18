import { useToaster, Button, Notification } from 'rsuite';
import { ArrowRightLine } from '@rsuite/icons';

import Content from '../Content';

const Home = () => {
    const toaster = useToaster();

    const message = (
        <Notification duration={3000}>
            👋 Hello From React Suite!
        </Notification>
    );

    const handleClick = () => toaster.push(message, {
        placement: 'topEnd'
    });

    return (
        <Content>
            <Button color='red' appearance='primary' onClick={handleClick}>
                <ArrowRightLine /> Click Me!
            </Button>
        </Content>
    );
};

export default Home;
