import React, { useRef, useState } from 'react';
import { ButtonToolbar, Button, Form, useToaster, Notification } from 'rsuite';
import { SchemaModel, StringType } from 'schema-typed'

import Content from '../Content';
import { Field } from '../Field';
import { Textarea } from '../Textarea';

const initialState = {
    name: '',
    email: '',
    textarea: ''
};

const Forms = () => {
    const formRef = useRef();
    const toaster = useToaster();

    const [formValues, setFormValues] = useState(initialState);

    const model = SchemaModel({
        name: StringType().isRequired("Full Name is required."),
        email: StringType().isEmail("Email must be valid!").isRequired("Email is required."),
        textarea: StringType().isRequired("Please provide a message.")
    });

    const error = (
        <Notification duration={3000} type='error' header='Error'>
            Please fill out the form properly!
        </Notification>
    );

    const success = (name) => (
        <Notification duration={3000} type='success' header='Success'>
            👋 {name}!!!
        </Notification>
    );

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            toaster.push(error, {
                placement: 'topEnd'
            });
            return;
        } else {
            toaster.push(success(formValues.name), {
                placement: 'topEnd'
            });
            setFormValues(initialState);
        }
    };

    return (
        <Content>
            <Form
                fluid
                ref={formRef}
                model={model}
                formValue={formValues}
                onChange={setFormValues}
                onSubmit={handleSubmit}
                style={{ width: '25%' }}
            >
                <Field
                    controlid='name'
                    name='name'
                    label='Name'
                    message='Full Name is required'
                    tooltip
                />
                <Field
                    controlid='name'
                    name='email'
                    label='Email'
                    message='Email is required'
                    tooltip
                />
                <Field
                    controlid='textarea'
                    name='textarea'
                    label='Enter a message'
                    rows={6}
                    accepter={Textarea}
                />
                <ButtonToolbar>
                    <Button appearance='primary' type='submit'>
                        Submit
                    </Button>
                    <Button appearance='default' onClick={() => setFormValues(initialState)}>
                        Cancel
                    </Button>
                </ButtonToolbar>
            </Form>
        </Content>
    );
};

export default Forms;