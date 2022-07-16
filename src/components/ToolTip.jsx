import React from 'react';
import { Tooltip, Whisper } from 'rsuite';

const ToolTip = ({ message, placement, arrow = true, trigger='hover', id, children }) => (
    <Whisper placement={placement} controlId={id} trigger={trigger} speaker={
        <Tooltip arrow={arrow}>{message}</Tooltip>
    }>
        {children}
    </Whisper>
);

export default ToolTip;
