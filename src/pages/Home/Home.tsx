import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button,Box } from '@mui/material';
import Header from '../../components/Header';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import Preloader from './components/preloader';

const Home = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a data fetching/loading process
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    const isDarkMode = theme.palette.mode === 'dark';
    const submittedToday = 11260;
    const foundToday = 5680;

    return (
        <>
            {loading ? (
                    <Preloader />
            ):(
            <Box
                sx={{
                    backgroundColor: isDarkMode ? '#0A2640' : '#FFFFFF',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '97.5vh',
                    padding: '0 20px',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '1293px',
                        height: '1293px',
                        top: '-789px',
                        left: '777px',
                        backgroundColor: isDarkMode ? '#1C3D5B' : '#F1F1F1',
                        borderRadius: '50%',
                        opacity: isDarkMode ? 0.4 : 0.5,
                    },
                }}
            >
                <Box sx={{

                    padding: '20px 0',
                    zIndex: 555522222
                }}>
                    <Header />
                </Box>

                {/* Main Content Block */}
                <Box sx={{
                    alignItems: 'start',
                    padding: '80px 80px 0 80px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '0px',
                    opacity: 1
                }}>
                    {/* Left Part */}
                    <Box sx={{
                        width: '545px',
                        height: '310px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                        alignItems:'center'
                    }}>
                        <Typography
                            sx={{
                                color: isDarkMode ? '#FFFFFF' : '#0A2640',
                                fontFamily: 'Manrope',
                                fontSize: '20px',
                                fontWeight: '400',
                                textAlign: 'center',
                            }}
                        >
                            {t('search_message')}

                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '16px'
                        }}>
                            <Link to={'/validation'}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        padding: '16px 56px',
                                        fontFamily: 'Open Sans',
                                        borderRadius: '56px',
                                        border: `2px solid ${isDarkMode ? '#69E6A6' : '#0A2640'}`,
                                        backgroundColor: isDarkMode ? '#69E6A6' : '#0A2640',
                                        color: isDarkMode ? '#0A2640' : '#FFFFFF',
                                        opacity: 1,
                                        '&:hover': {
                                            backgroundColor: isDarkMode ? '#2d9d63' : '#2d6448',
                                            border: isDarkMode
                                                ? '2px solid #2d6448'
                                                : '2px solid #b09328',
                                            color: '#ffffff',
                                        },
                                    }}
                                >
                                    {t('apply_application')}
                                </Button>
                            </Link>
                            <Button
                                variant="outlined"
                                sx={{
                                    width: '247px',
                                    fontFamily: 'Open Sans',
                                    height: '60px',
                                    padding: '16px 56px',
                                    borderRadius: '56px',
                                    border: '2px solid #FFFFFF',
                                    borderColor: isDarkMode ? '#FFFFFF' : '#000000',
                                    color: isDarkMode ? '#F1F1F1' : '#000000',
                                    opacity: 1,
                                    '&:hover': {
                                        borderColor: isDarkMode ? '#b09328' : '#000000',
                                        color: isDarkMode ? '#F1F1F1' : '#000000',
                                    },
                                }}
                            >
                                {t("check_status_application")}
                            </Button>
                        </Box>
                    </Box>

                    {/* Right Part */}
                    <Box sx={{
                        display: 'flex',
                        gap: '16px',
                        padding: '20px',
                        justifyContent: 'space-between'
                    }}>
                        {/* First Box */}
                        <Box sx={{
                            backgroundColor:  isDarkMode ? '#FFFFFF2E' : '#0A2640CC',
                            borderRadius: '15px',
                            width: '280px',
                            height: '180px',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                            zIndex: 2222222
                        }}>
                            <Box>
                                <svg width="49" height="10" viewBox="0 0 49 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="4.94209" cy="5" rx="4.8" ry="5" fill="#FC5B00"/>
                                    <ellipse cx="24.1422" cy="5" rx="4.8" ry="5" fill="#ECAA00"/>
                                    <ellipse cx="43.342" cy="5" rx="4.8" ry="5" fill="#009D10"/>
                                </svg>
                                <Typography variant="h6"
                                            sx={{
                                                fontSize: '18px',
                                                marginBottom: '10px',
                                                color: '#F1F1F1',
                                                fontFamily: 'Open Sans',
                                            }}>

                                    {t("number_applications_applied")}
                                </Typography>
                                <Typography variant="h4"
                                            sx={{
                                                color: '#0DBBFC',
                                                fontWeight: 'bold',
                                                display: 'flex',
                                                justifyContent: 'center'
                                }}>
                                    {submittedToday}
                                </Typography>
                            </Box>

                        </Box>


                        {/* Second Box */}
                        <Box sx={{
                            backgroundColor:  isDarkMode ? '#FFFFFF2E' : '#0A2640CC',
                            borderRadius: '15px',
                            width: '280px',
                            height: '180px',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                            zIndex: 2222222
                        }}>

                            <Box sx={{rowPosition: 'column'}}>
                                <svg width="49" height="10" viewBox="0 0 49 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="4.94209" cy="5" rx="4.8" ry="5" fill="#FC5B00"/>
                                    <ellipse cx="24.1422" cy="5" rx="4.8" ry="5" fill="#ECAA00"/>
                                    <ellipse cx="43.342" cy="5" rx="4.8" ry="5" fill="#009D10"/>
                                </svg>
                                <Typography variant="h6"
                                            sx={{fontSize: '18px',
                                                fontFamily: 'Open Sans',
                                                marginBottom: '10px',
                                                color: '#F1F1F1',
                                }}>
                                        {t("number_applications_found")}
                                </Typography>
                                <Typography variant="h4"
                                            sx={{ color: '#65E4A3',
                                                fontWeight: 'bold',
                                                display: 'flex',
                                                justifyContent: 'center'
                                }}>
                                    {foundToday}
                                </Typography>
                            </Box>

                        </Box>

                    </Box>

                </Box>


                {/* Contact Info */}
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                        color: isDarkMode ? '#FFFFFF' : '#0A2640',
                    }}
                >
                    <Typography variant="h4" sx={{ fontSize: '22px', fontWeight: '700',fontFamily: 'Open Sans', }}>
                        {t("questions")}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px',fontFamily: 'Open Sans', }}>
                        8-776-828-45-35
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '18px',fontFamily: 'Open Sans', }}>
                        8-771-287-21-11
                    </Typography>
                </Box>
            </Box>
            )}
        </>
    );
};

export default Home;
