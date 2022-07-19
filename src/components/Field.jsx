import { forwardRef } from "react";
import { Form } from "rsuite";

const { Group, Control, ControlLabel, HelpText } = Form;

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

export const Field = forwardRef((props, ref) => {
    const { name, message, label, accepter, error, ...rest } = props;
    return (
        <Group ref={ref} className={error ? 'has-error' : ''} style={styles}>
            <ControlLabel>{label}</ControlLabel>
            <Control name={name} accepter={accepter} errorMessage={error} {...rest} style={styles} />
            <HelpText>{message}</HelpText>
        </Group>
    );
});