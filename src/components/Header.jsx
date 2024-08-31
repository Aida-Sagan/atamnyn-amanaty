import React from 'react';
import logo from '../assets/images/logo.png';
import {Box, MenuItem, Select} from "@mui/material";
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const theme = useTheme();
    const {t,i18n} = useTranslation();

    const isDarkMode = theme.palette.mode === 'dark';
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };
    return (
        <header style={{ display: 'flex', justifyContent: 'center'}}>
            <Box display="flex" alignItems='end' justifyContent="end" >
                <Link to="/" style={{ marginRight: 'auto' }}>
                    <img src={logo} alt="Logo" style={{ width: '35%' }} />
                </Link>

                <Box textAlign="center" p={3} style={{ marginLeft: 'auto' }}>
                    <Select
                        value={i18n.language || 'ru'}
                        onChange={changeLanguage}
                        sx={{

                            color: isDarkMode ? '#FFFFFF' : '#0A2640',
                            borderRadius: '16px',
                            border: '1px solid #FFFFFF',
                            '& .MuiSelect-icon': {
                                color: isDarkMode ? '#FFFFFF' : '#0A2640',
                            },
                            '& .MuiMenuItem-root': {
                                color: isDarkMode ? '#FFFFFF' : '#0A2640',
                            },
                        }}
                    >
                        <MenuItem value="ru">{t('Русский')}</MenuItem>
                        <MenuItem value="kk">{t('Қазақша')}</MenuItem>
                    </Select>
                </Box>

            </Box>
        </header>

    );
}

export default Header;
