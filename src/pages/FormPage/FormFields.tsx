import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FormComponents from './components/FormComponents';
import {Button, Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {useTheme} from "@mui/material/styles";

const FormComponent = () => {
    const { t, i18n } = useTranslation();
    const theme = useTheme();

    const isDarkMode = theme.palette.mode === 'dark';

    const [formData, setFormData] = useState({
        lookingFor: '',
        returnedFromWar: '',
        lastName: '',
        firstName: '',
        middleName: '',
        ancestorNames: '',
        birthDate: '',
        birthDateUnknown: false,
        approximateDateRange: '',
        birthPlaceCountryRegion: '',
        birthPlaceCity: '',
        conscriptionDate: '',
        maritalStatus: '',
        childrenNames: '',
        relativesListed: '',
        prisoner: false,
        prisonerInfo: '',
        searcherFullName: '',
        phoneNumber: '',
        homeAddress: '',
        email: '',
        heardAboutUs: '',
        heardAboutUsOther: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправленные данные:', formData);
        // Логика отправки данных
    };

    return (
        <Box>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                startIcon={<HomeIcon />}
                sx={{
                    marginLeft: '10px',
                    marginTop: '20px',
                    padding: '10px 20px',
                    borderRadius: '16px',
                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                    '&:hover': {
                        backgroundColor: isDarkMode ? '#2d9d63' : '#2d6448',
                        color: '#ffffff',
                        transform: 'scale(1.05)',
                    },
                }}
            >
                {t('form.backToHome')}
            </Button>

            <FormComponents
                formData={formData}
                handleChange={handleChange}
                handleLanguageChange={handleLanguageChange}
                handleSubmit={handleSubmit}
            />
        </Box>


    );
};

export default FormComponent;
