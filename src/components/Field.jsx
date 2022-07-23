import { forwardRef } from "react";
import { Form } from "rsuite";

const { Group, Control, ControlLabel, HelpText } = Form;

export const Field = forwardRef((props, ref) => {
    const { name, message, label, accepter, error, tooltip, ...rest } = props;
    return (
        <Group ref={ref} className={error ? 'has-error' : ''}>
            <ControlLabel>{label}</ControlLabel>
            <Control name={name} accepter={accepter} errorMessage={error} {...rest} />
            <HelpText tooltip={tooltip}>{message}</HelpText>
        </Group>
    );
});
