import { forwardRef } from "react";
import { Notification } from "rsuite";

export const Message = forwardRef(({ message, type, ...rest }, ref) => (
    <Notification ref={ref} {...rest} type={type} header={type}>
        <p>{message}</p>
    </Notification>
));