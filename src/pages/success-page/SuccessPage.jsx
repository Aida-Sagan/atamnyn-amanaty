import React, { useState} from 'react';
import {Container, TextField, Button, MenuItem, Typography, Divider } from "@mui/material";
import {Link} from 'react-router-dom';

export default function SuccessPage(){
    const [id, setId] = useState('');

    return(
        <Container sx={{
            width: '600px',
            bgcolor: '#fffafa',
            borderRadius: '25px',
            paddingBottom: '50px',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
            mt: '50px'
        }}>
            <Typography
                sx={{color: '#008f0e', padding: '20px', display: 'flex', justifyContent: 'center'}}
                variant="h4"
                component="h2"
            >
                Ваша заявка принята!
            </Typography>
            <Typography
                sx={{color: '#8f3c00', padding: '20px', display: 'flex', justifyContent: 'center'}}
                variant="h5"
                component="h2"
            >
                Номер Вашей заявки : {id}
            </Typography>
            <Divider></Divider>
            <Typography
                sx={{color: '#311504', padding: '20px', display: 'flex', justifyContent: 'center'}}
                variant="h6"
                component="h2"
            >
                Проверять свой статус заявки можете на главной странице  по Вашему id
            </Typography>
            <Link to='/'>
                <Button variant="outlined">Вернуться на главную страницу</Button></Link>
        </Container>
    )
}