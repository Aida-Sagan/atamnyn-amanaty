import React, { useState } from 'react';
import {Typography, TextField, Button, Container} from "@mui/material";

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно добавить логику для обработки отправки данных (например, отправка на сервер)
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container sx={{
            width: '600px',
            bgcolor: '#fffafa',
            borderRadius: '25px',

        }}>
            <form onSubmit={handleSubmit}>
                <Typography
                    sx={{ color: '#008B8B', padding: '20px', display: 'flex', justifyContent: 'center'}}
                    variant="h4"
                    component="h2"
                >
                    Авторизация
                </Typography>

                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <TextField
                    label="Пароль"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={handlePasswordChange}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <Button
                    sx={{ bgcolor: '#008B8B', borderRadius: '25px', marginTop: '20px', marginBottom: '40px' }}
                    variant="contained"
                    type="submit"
                >
                    Войти
                </Button>
            </form>
        </Container>

    );
}
