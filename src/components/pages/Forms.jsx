/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import { FlexboxGrid, Form, Notification, Schema, Uploader, useToaster } from 'rsuite';

import { Field } from '../Field';
import Content from '../Content';
import { Message } from '../Message';

const { Item } = FlexboxGrid;

// function asyncCheckFileType(file) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         if (/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(file)) {
//           resolve(false);
//         } else {
//           resolve(true);
//         }
//       }, 500);
//     });
// };

// const model = Schema.Model({
//     name: Schema.Types.MixedType().addRule((value, data) => {
//         return asyncCheckFileType(value);
//     }, 'Please select a legal file type.')
// });

const styles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

// TODO : Figure out how to hook up file type validation
// DOCS : https://rsuitejs.com/components/form-validation/
const Forms = () => {
    const toaster = useToaster();
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({});

    console.log(formValue);

    const message = (
        <Message duration={3000} type="error" message="Please select a legal file type." />
    );

    return (
        <Content>
            <FlexboxGrid style={styles}>
                <Item colspan={12}>
                    <Form
                        ref={formRef}
                        onChange={setFormValue}
                        onCheck={setFormError}
                        formError={formError}
                        formDefaultValue={formValue}
                        // model={model}
                        style={styles}
                    >
                        <Field
                            onUpload={(e) => {
                                if (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e.name.toString().toLowerCase())) {
                                    toaster.push(message, {
                                        placement: 'topEnd'
                                    });
                                }
                            }}
                            onError={(e) => {
                                toaster.push(message, {
                                    placement: 'topEnd'
                                });
                            }}
                            onSuccess={() => {
                                
                            }}
                            listType="picture-text"
                            name="file"
                            label="Upload A Picture"
                            error={formError.name}
                            accepter={Uploader}
                            action="//jsonplaceholder.typicode.com/posts/"
                            accept="image/*"
                        />
                    </Form>
                </Item>
            </FlexboxGrid>
        </Content>
    );
};

export default Forms;