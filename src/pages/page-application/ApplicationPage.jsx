import React, {useEffect, useState} from 'react';
import {Container, TableRow, Button, TableCell, TableBody, Table, Box, Typography} from "@mui/material";
import {Link} from 'react-router-dom';

export default function ApplicationPage(){
    const [formDataList, setFormDataList] = useState([]);

    useEffect(() => {
        const savedData = sessionStorage.getItem('formData');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormDataList([parsedData]);
        }
    }, []);

    return(
        <Container sx={{
            bgcolor: '#fffafa',
            borderRadius: '25px',
            paddingBottom: '50px',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
            mt: '50px',
        }}>

            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                <Link to='/'><Button sx={{ marginTop: '20px', border: '1px solid blue' }}>Вернуться на главную</Button></Link>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center' }}>
                <img src={ '../../img/logo.png'} alt="Logo" />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: "row",  }}>
                <Table >
                    <TableBody >
                        {formDataList.map((formData, index) => (
                            <TableRow key={index}  sx={{ display: 'flex', flexDirection: "column", alignItems: 'start', }}>
                                <TableCell><strong>Номер заявки:</strong> {formData.id}</TableCell>
                                <TableCell><strong>Дата: </strong>{formData.date}</TableCell>
                                <TableCell><strong>Вернулся из ВОВ:</strong> {formData.returnedFromWWII}</TableCell>
                                <TableCell><strong>ФИО:</strong> {formData.fio}</TableCell>
                                <TableCell><strong>Имя родственника:</strong> {formData.relativeName}</TableCell>
                                <TableCell><strong>Год рождения:</strong> {formData.birthYear}</TableCell>
                                <TableCell><strong>Дата рождения:</strong> {formData.birthMonthDay}</TableCell>
                                <TableCell><strong>Диапазон годов рождения:</strong> {formData.birthYearRange}</TableCell>
                                <TableCell><strong>Страна рождения:</strong> {formData.birthCountry}</TableCell>
                                <TableCell><strong>Место рождения:</strong> {formData.birthLocation}</TableCell>
                                <TableCell><strong>Месяц и год призыва:</strong> {formData.conscriptionMonthYear}</TableCell>
                                <TableCell><strong>Семейное положение:</strong> {formData.maritalStatus}</TableCell>
                                <TableCell><strong>Информация о детях:</strong> {formData.childrenInfo}</TableCell>
                                <TableCell><strong>Родственники на фронте:</strong> {formData.relativesInDraft}</TableCell>
                                <TableCell><strong>Пленность:</strong> {formData.captivity}</TableCell>
                                <TableCell><strong>Место пленности:</strong> {formData.captivityLocation}</TableCell>
                                <TableCell><strong>Загруженные файлы:</strong> {formData.uploadedFiles.join(', ')}</TableCell>
                                <TableCell><strong>ФИО искателя:</strong> {formData.searcherFio}</TableCell>
                                <TableCell><strong>Номера телефонов:</strong> {formData.phoneNumbers}</TableCell>
                                <TableCell><strong>Домашний адрес:</strong> {formData.homeAddress}</TableCell>
                                <TableCell><strong>Электронная почта:</strong> {formData.email}</TableCell>
                                <TableCell><strong>Источник информации:</strong> {formData.sourceOfInformation}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Box sx={{ ml: 2, width: "280px" }}>
                    <Typography variant="h5" sx={{ color: '#008B8B'}}><strong>Статус заявки:</strong></Typography>
                    <Typography variant="h6" sx={{ color: '#d56284'}}>на рассмотрении</Typography>
                </Box>
            </Box>
        </Container>
    )
}