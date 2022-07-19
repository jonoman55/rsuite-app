import React from 'react';
import { Content as RSContent } from 'rsuite';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
};

const Content = (props) => (
    <RSContent style={styles}>
        {props.children}
    </RSContent>
);

export default Content;