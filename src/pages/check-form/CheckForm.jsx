import React, { useState, useEffect } from 'react';
import {Container, TextField, Button, MenuItem, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function CheckForm() {
    const [formData, setFormData] = useState({
        returnedFromWWII: '',
        fio: '',
        relativeName: '',
        birthYear: '',
        birthMonthDay: '',
        birthYearRange: '',
        birthCountry: '',
        birthLocation: '',
        conscriptionMonthYear: '',
        maritalStatus: '',
        childrenInfo: '',
        relativesInDraft: '',
        captivity: '',
        captivityLocation: '',
        uploadedFiles: [],
        searcherFio: '',
        phoneNumbers: '',
        homeAddress: '',
        email: '',
        sourceOfInformation: '',
    });


    // Получение данных из sessionStorage при загрузке компонента
    useEffect(() => {
        const savedData = sessionStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const navigateTo = useNavigate();

    const handleFileChange = (event) => {
        const files = event.target.files;
        setFormData({
            ...formData,
            uploadedFiles: files,
        });
    };

    // Обновление значения поля формы и состояния компонента
    const handleInputChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sessionStorage.setItem('formData', JSON.stringify(formData));
        navigateTo('/success-page')
    };

    return (
        <Container sx={{
            bgcolor: '#fffafa',
            borderRadius: '25px',
            paddingBottom: '50px',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
            mt: '50px'
        }}>
            <form onSubmit={handleSubmit}>
                <Typography
                    sx={{color: '#8b0019', padding: '20px', display: 'flex', justifyContent: 'center'}}
                    variant="h4"
                    component="h2"> Проверьте свою заявку
                </Typography>

                <TextField
                    label="Ваш дедушка вернулся с ВОВ?"
                    select
                    fullWidth
                    value={formData.returnedFromWWII}
                    onChange={(e) => handleInputChange('returnedFromWWII', e.target.value)}
                    variant="outlined"
                    margin="normal"
                >
                    <MenuItem value="Вернулся">Вернулся</MenuItem>
                    <MenuItem value="Не вернулся">Не вернулся</MenuItem>
                </TextField>

                <TextField
                    label="ФИО (кого ищут)"
                    fullWidth
                    value={formData.fio}
                    onChange={(e) => handleInputChange('fio', e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <TextField
                    label="Если известно, укажите имя прадеда, деда, отца разыскиваемого"
                    fullWidth
                    value={formData.relativeName}
                    onChange={(e) => handleInputChange('relativeName', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Год рождения"
                    fullWidth
                    value={formData.birthYear}
                    onChange={(e) => handleInputChange('birthYear', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="День и месяц рождения (если известно)"
                    fullWidth
                    value={formData.birthMonthDay}
                    onChange={(e) => handleInputChange('birthMonthDay', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Если год рождения неизвестен, укажите примерный интервал (например, 1897-1905)"
                    fullWidth
                    value={formData.birthYearRange}
                    onChange={(e) => handleInputChange('birthYearRange', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Место рождения: страна и область"
                    fullWidth
                    value={formData.birthCountry}
                    onChange={(e) => handleInputChange('birthCountry', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Место рождения: город, район, населенный пункт"
                    fullWidth
                    value={formData.birthLocation}
                    onChange={(e) => handleInputChange('birthLocation', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Месяц и год призыва"
                    fullWidth
                    value={formData.conscriptionMonthYear}
                    onChange={(e) => handleInputChange('conscriptionMonthYear', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Семейный статус"
                    fullWidth
                    value={formData.maritalStatus}
                    onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Количество детей и их имена"
                    fullWidth
                    value={formData.childrenInfo}
                    onChange={(e) => handleInputChange('childrenInfo', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Кого из родных мог указать Ваш дедушка в анкете призыва на фронт? (например, Жанагуль - жена, Ботагоз - сестра)"
                    fullWidth
                    value={formData.relativesInDraft}
                    onChange={(e) => handleInputChange('relativesInDraft', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Есть ли информация, что Ваш дедушка был в плену?"
                    fullWidth
                    value={formData.captivity}
                    onChange={(e) => handleInputChange('captivity', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Если выше указали ответ 'ДА', то известно ли, где был пленен (указать любую информацию)"
                    fullWidth
                    value={formData.captivityLocation}
                    onChange={(e) => handleInputChange('captivityLocation', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Прикрепить файлы, если необходимо:"
                    fullWidth
                    value={formData.uploadedFiles}
                    onChange={(e) => handleInputChange('uploadedFiles', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    multiple
                />

                <TextField
                    label="ФИО кто ищет"
                    fullWidth
                    value={formData.searcherFio}
                    onChange={(e) => handleInputChange('searcherFio', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Номер телефона (указать несколько)"
                    fullWidth
                    value={formData.phoneNumbers}
                    onChange={(e) => handleInputChange('phoneNumbers', e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <TextField
                    label="Домашний адрес"
                    fullWidth
                    value={formData.homeAddress}
                    onChange={(e) => handleInputChange('homeAddress', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Электронная почта"
                    fullWidth
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Откуда Вы узнали об 'Atamnyn Amanaty' ?"
                    fullWidth
                    value={formData.sourceOfInformation}
                    onChange={(e) => handleInputChange('sourceOfInformation', e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <Button
                    sx={{ bgcolor: '#008B8B', borderRadius: '25px' }}
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Отправить
                </Button>
            </form>
        </Container>
    );
}