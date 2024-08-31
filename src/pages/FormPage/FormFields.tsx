import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FormComponents from './components/FormComponents';
import {Button, Box} from '@mui/material';

const FormComponent = () => {
    const { t, i18n } = useTranslation();

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
        <Box >
            <Button
                component={Link}
                to="/"
                variant="outlined"
                color="primary"
                style={{ marginTop: '20px' }}
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
