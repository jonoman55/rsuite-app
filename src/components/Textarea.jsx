import React, { forwardRef } from "react";
import { Input } from "rsuite";

export const Textarea = forwardRef((props, ref) => {
    return <Input {...props} as='textarea' ref={ref} />;
});
