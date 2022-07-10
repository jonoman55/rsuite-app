import React from 'react';
import { Content as RSContent } from 'rsuite';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Content = (props) => (
    <RSContent style={styles}>
        {props.children}
    </RSContent>
);

export default Content;