import React from 'react';
import { Content as RSContent } from 'rsuite';

const Content = (props) => (
    <RSContent>
        {props.children}
    </RSContent>
);

export default Content;