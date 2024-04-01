import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Typography, TextField, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";


const FormFields = () => {
    const [returnedFromWWII, setReturnedFromWWII] = useState('');
    const [fio, setFio] = useState('');
    const [relativeName, setRelativeName] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [birthMonthDay, setBirthMonthDay] = useState('');
    const [birthYearRange, setBirthYearRange] = useState('');
    const [birthCountry, setBirthCountry] = useState('');
    const [birthLocation, setBirthLocation] = useState('');
    const [conscriptionMonthYear, setConscriptionMonthYear] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [childrenInfo, setChildrenInfo] = useState('');
    const [relativesInDraft, setRelativesInDraft] = useState('');
    const [captivity, setCaptivity] = useState('');
    const [captivityLocation, setCaptivityLocation] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [searcherFio, setSearcherFio] = useState('');
    const [phoneNumbers, setPhoneNumbers] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [email, setEmail] = useState('');
    const [sourceOfInformation, setSourceOfInformation] = useState('');

    const navigateTo = useNavigate();

    // Функция для сохранения данных формы в sessionStorage
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            returnedFromWWII,
            fio,
            relativeName,
            birthYear,
            birthMonthDay,
            birthYearRange,
            birthCountry,
            birthLocation,
            conscriptionMonthYear,
            maritalStatus,
            childrenInfo,
            relativesInDraft,
            captivity,
            captivityLocation,
            uploadedFiles,
            searcherFio,
            phoneNumbers,
            homeAddress,
            email,
            sourceOfInformation
        };

        if(!fio || !birthYearRange || !searcherFio || !phoneNumbers || !sourceOfInformation){
            alert('Пожалуйста, заполните поля с "*" !')
            return
        }

        sessionStorage.setItem('formData', JSON.stringify(formData));
        navigateTo('/check-form');
    };

    const handleFileChange = (e) => {
        setUploadedFiles(e.target.files);
    };

    return (
        <Container sx={{
            display: 'flex',
            mt: '50px'

        }}>
            <FormAnswers>
                <Link to='/'>
                    <Typography
                        sx={{color: '#008B8B'}}
                        variant="h4"
                        component="h2"> ATAMNYN AMANATY
                    </Typography>
                </Link>


                <TextField
                    label="Ваш дедушка вернулся с ВОВ?"
                    select
                    fullWidth
                    value={returnedFromWWII}
                    onChange={(e) => setReturnedFromWWII(e.target.value)}
                    variant="outlined"
                    margin="normal"
                >
                    <MenuItem value="Вернулся">Вернулся</MenuItem>
                    <MenuItem value="Не вернулся">Не вернулся</MenuItem>
                </TextField>
                <TextField
                    label="ФИО (кого ищут)"
                    fullWidth
                    value={fio}
                    onChange={(e) => setFio(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    label="Если известно, укажите имя прадеда, деда, отца разыскиваемого"
                    fullWidth
                    value={relativeName}
                    onChange={(e) => setRelativeName(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    label="Год рождения"
                    fullWidth
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="День и месяц рождения (если известно)"
                    fullWidth
                    value={birthMonthDay}
                    onChange={(e) => setBirthMonthDay(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Если год рождения неизвестен, укажите примерный интервал (например, 1897-1905)"
                    fullWidth
                    value={birthYearRange}
                    onChange={(e) => setBirthYearRange(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <TextField
                    label="Место рождения: страна и область"
                    fullWidth
                    value={birthCountry}
                    onChange={(e) => setBirthCountry(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Место рождения: город, район, населенный пункт"
                    fullWidth
                    value={birthLocation}
                    onChange={(e) => setBirthLocation(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Месяц и год призыва"
                    fullWidth
                    value={conscriptionMonthYear}
                    onChange={(e) => setConscriptionMonthYear(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Семейный статус"
                    fullWidth
                    value={maritalStatus}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Количество детей и их имена"
                    fullWidth
                    value={childrenInfo}
                    onChange={(e) => setChildrenInfo(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Кого из родных мог указать Ваш дедушка в анкете призыва на фронт? (например, Жанагуль - жена, Ботагоз - сестра)"
                    fullWidth
                    value={relativesInDraft}
                    onChange={(e) => setRelativesInDraft(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Есть ли информация, что Ваш дедушка был в плену?"
                    fullWidth
                    value={captivity}
                    onChange={(e) => setCaptivity(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Если выше указали ответ 'ДА', то известно ли, где был пленен (указать любую информацию)"
                    fullWidth
                    value={captivityLocation}
                    onChange={(e) => setCaptivityLocation(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField

                    label="Прикрепить файлы, если необходимо:"
                    fullWidth
                    value={uploadedFiles}
                    onChange={(e) => setUploadedFiles(e.target.value)}
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
                    value={searcherFio}
                    onChange={(e) => setSearcherFio(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <TextField
                    label="Номер телефона (указать несколько)"
                    fullWidth
                    value={phoneNumbers}
                    onChange={(e) => setPhoneNumbers(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <TextField
                    label="Домашний адрес"
                    fullWidth
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Электронная почта"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    margin="normal"
                />

                <TextField
                    label="Откуда Вы узнали об 'Atamnyn Amanaty' ?"
                    fullWidth
                    value={sourceOfInformation}
                    onChange={(e) => setSourceOfInformation(e.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                />

                <Button
                    sx={{bgcolor: '#008B8B', borderRadius: '25px'}}
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                >Отправить
                </Button>
            </FormAnswers>
            <Box sx={{mt: '30px',}}>


            <Button
                sx={{bgcolor: 'rgba(3,37,37,0.62)', color: 'white'}}
                variant="contained"
            ><a href='example.pdf' download='example.pdf'>
                Скачать образец заявки
            </a>

            </Button>

            </Box>

        </Container>
    );
};

const FormAnswers = styled.div`
  width: 60%;
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 20px;
  border-radius: 20px;
`


export default FormFields;
