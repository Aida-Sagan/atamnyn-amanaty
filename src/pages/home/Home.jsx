import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import {Divider, Container} from "@mui/material";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


const Block = ({ title, value }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '15px',
            margin: '10px',
    }}>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bolder', color: '#10a3b9'}}>{title}</Typography>
        <QueryStatsIcon sx={{ color: '#195c6b',fontSize: '50px', margin: '10px' }} />
        <Typography variant="h4" color="secondary">{value}</Typography>
    </Box>
);

export default function Home() {
    const [openModal, setOpenModal] = useState(false);
    const [query, setQuery] = useState('');

    const handleQuerySubmit = () => {
        // выполнить логику для запроса статуса заявки
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <Container sx={{
            bgcolor: '#ffffff',
            borderRadius: '25px',
            paddingBottom: '50px',
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
            mt: '50px'
        }}>
            <Header />
            <Title>
                ATAMNYN AMANATY
            </Title>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mb: '50px'}}>
                <TextHello>
                    Мы рады приветствовать Вас на сайте ОО "ATAMNYN AMANATY", посвященному
                    поиску родственников и солдат, пропавших без вести в годы Великой Отечественной войны.
                    Мы готовы помочь
                    Вам в поиске своего деда и восстановлении истории вашей семьи. Заполните нашу форму поиска,
                    и давайте вместе вернем память о наших героях.
                </TextHello>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Block title="Поданных заявок" value="0" />
                    <Block title="Найдено на сегодня" value="0" />
                </Box>

            </Box>

            <Divider />

            <Box
                sx={{ display: 'flex',
                    alignItems: 'center',
                    marginTop: '20px',
                    justifyContent: 'center',
                    gap: '150px',
                }}>
                <Link to='/form'>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{fontWeight: 'bolder',
                            color: '#175a6b',
                            height: '55px',
                            borderRadius: "20px"}}
                    >
                        Подать новую заявку
                    </Button>
                </Link>

                <Box sx={{ display: 'flex' }}>
                    <TextField
                        label="Номер заявки"
                        variant="outlined"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        sx={{ marginRight: '10px',  }}
                    />
                    <Button variant="contained"
                            sx={{bgcolor: '#195c6b'}}
                            onClick={handleQuerySubmit}>
                        Узнать статус</Button>
                </Box>
            </Box>

            <Modal open={openModal} onClose={handleCloseModal}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '5px' }}>
                    <Typography variant="h6" id="modal-modal-title">Статус заявки</Typography>
                    <Typography variant="body1" id="modal-modal-description">Статус вашей заявки здесь.</Typography>
                    <Button onClick={handleCloseModal}>Закрыть</Button>
                </Box>
            </Modal>
        </Container>
    )
}

const Title = styled.div`
  color: #1b5e6e;
  font-size: 38px;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const TextHello = styled.div`
  font-size: 18px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  width: 550px;
  border-radius: 25px;
  padding: 20px;
  color: #85701b;
  margin: 20px 0 40px 20px;
`