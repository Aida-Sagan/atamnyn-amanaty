import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form, Field, useFormikContext } from 'formik';
import * as Yup from 'yup';
import {Button, Stack, TextField, Typography} from '@mui/material';

interface FormValues {
    email: string;
    password: string;
}

const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Неверный почтовый адрес').required('Заполните это поле'),
                password: Yup.string().required('Заполните это поле'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <LoginFormInner />
        </Formik>
    );
};

const LoginFormInner = () => {
    const formik = useFormikContext<FormValues>();

    return (
        <Form>
            <Typography variant="h5" sx={{display: 'flex', justifyContent: 'center'}}>
                Войти в кабинет админа
            </Typography>
            <Stack spacing={4}>
                <Field
                    name="email"
                    type="email"
                    as={TextField}
                    label="Электронная почта"
                    variant="outlined"
                    required
                    error={Boolean(formik.errors.email && formik.touched.email)}
                    helperText={formik.touched.email ? formik.errors.email : ''}
                />
                <Field
                    name="password"
                    type="password"
                    as={TextField}
                    label="Пароль"
                    variant="outlined"
                    required
                    error={Boolean(formik.errors.password && formik.touched.password)}
                    helperText={formik.touched.password ? formik.errors.password : ''}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={formik.isSubmitting}
                >
                    {formik.isSubmitting ? 'Переходит...' : 'Войти'}
                </Button>

            </Stack>
        </Form>
    );
};

export default LoginForm;
