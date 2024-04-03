import React, { useState, useEffect} from 'react';
import {
    Container,
    TextField,
    Table,
    TableHead,
    TableBody,
    Typography,
    TableCell,
    TableRow,
    Button,
    Box
} from "@mui/material";
import {Link} from 'react-router-dom';

export default function Admin() {
    const [formDataList, setFormDataList] = useState([]);
    const [searchData, setSearchData] = useState('');

    useEffect(() => {
        const savedData = sessionStorage.getItem('formData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormDataList([parsedData]);
        }
    }, []);

    return(
        <Container  sx={{
            bgcolor: '#fffafa',
            borderRadius: '25px',
            overflowX: 'auto',
            width: '100%'
        }}>
            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                <Link to='/'><Button sx={{ marginTop: '20px', border: '1px solid blue' }}>Вернуться на главную</Button></Link>
            </Box>


            <Typography variant="h4" sx={{ marginBottom: '10px' }}>Список заявок</Typography>
            <TextField
                label="Поиск"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                variant="outlined"
                sx={{ marginBottom: '20px'}}
            />

            <Table>
                <TableHead>
                    <TableRow sx={{bgcolor: '#c5ddf5'}}>
                        <TableCell >id</TableCell>
                        <TableCell >Дата заявки</TableCell>
                        <TableCell>Вернулся с ВОВ?</TableCell>
                        <TableCell>ФИО</TableCell>
                        <TableCell> Имя прадеда, деда, отца разыскиваемого</TableCell>
                        <TableCell> Год рождения</TableCell>
                        <TableCell> День и месяц рождения</TableCell>
                        <TableCell> Примерный интервал</TableCell>
                        <TableCell>Место рождения: страна и область</TableCell>
                        <TableCell>Место рождения: город, район, населенный пункт</TableCell>
                        <TableCell>Месяц и год призыва</TableCell>
                        <TableCell>Семейный статус</TableCell>
                        <TableCell>Количество детей и их имена</TableCell>
                        <TableCell>Имена родных в анкете</TableCell>
                        <TableCell>Был ли в плену?</TableCell>
                        <TableCell>Где был пленен</TableCell>
                        <TableCell>Файлы</TableCell>
                        <TableCell>ФИО</TableCell>
                        <TableCell>Номер телефона</TableCell>
                        <TableCell>Домашний адрес</TableCell>
                        <TableCell>Электронная почта</TableCell>
                        <TableCell>Откуда узнали</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {formDataList.map((formData, index) => (
                        <TableRow key={index}>
                            <TableCell>{formData.id}</TableCell>
                            <TableCell>{formData.date}</TableCell>
                            <TableCell>{formData.returnedFromWWII}</TableCell>
                            <TableCell>{formData.fio}</TableCell>
                            <TableCell>{formData.relativeName}</TableCell>
                            <TableCell>{formData.birthYear}</TableCell>
                            <TableCell>{formData.birthMonthDay}</TableCell>
                            <TableCell>{formData.birthYearRange}</TableCell>
                            <TableCell>{formData.birthCountry}</TableCell>
                            <TableCell>{formData.birthLocation}</TableCell>
                            <TableCell>{formData.conscriptionMonthYear}</TableCell>
                            <TableCell>{formData.maritalStatus}</TableCell>
                            <TableCell>{formData.childrenInfo}</TableCell>
                            <TableCell>{formData.relativesInDraft}</TableCell>
                            <TableCell>{formData.captivity}</TableCell>
                            <TableCell>{formData.captivityLocation}</TableCell>
                            <TableCell>{formData.uploadedFiles.join(', ')}</TableCell>
                            <TableCell>{formData.searcherFio}</TableCell>
                            <TableCell>{formData.phoneNumbers}</TableCell>
                            <TableCell>{formData.homeAddress}</TableCell>
                            <TableCell>{formData.email}</TableCell>
                            <TableCell>{formData.sourceOfInformation}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Container>
    )
}
