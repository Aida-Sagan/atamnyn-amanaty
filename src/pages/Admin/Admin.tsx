import React, { useState } from 'react';
import {
    Box,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';

interface Application {
    id: number;
    name: string;
    status: string;
    date: string;
}

const initialApplications: Application[] = [
    { id: 1, name: 'Али Белек Хазретулы', status: 'В процессе', date: '2024-10-01' },
    { id: 2, name: 'Заявка 2', status: 'Завершена', date: '2024-10-02' },
    // Добавьте другие заявки...
];

const Admin = () => {
    const [applications, setApplications] = useState(initialApplications);
    const [search, setSearch] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [deletedApplication, setDeletedApplication] = useState<Application | null>(null);

    const filteredApplications = applications.filter(application =>
        application.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id: number) => {
        const updatedApplications = applications.filter(application => application.id !== id);
        setApplications(updatedApplications);
        setDeletedApplication(applications.find(app => app.id === id) || null);
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Панель Администратора
            </Typography>
            <TextField
                variant="outlined"
                label="Поиск"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Дата</TableCell>
                            <TableCell>Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredApplications.map((application) => (
                            <TableRow key={application.id}>
                                <TableCell>{application.name}</TableCell>
                                <TableCell>{application.status}</TableCell>
                                <TableCell>{application.date}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleDelete(application.id)}
                                    >
                                        Удалить
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity="success">
                    {deletedApplication ? `${deletedApplication.name} удалена.` : 'Заявка удалена.'}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Admin;
