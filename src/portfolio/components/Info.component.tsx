import { Avatar, Box, Grid, IconButton, Paper, Snackbar, Stack, Tooltip, Typography, useTheme } from '@mui/material'

import { useLangContext } from '../state/lang/langContext';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const InfoComponent = () => {
    const theme = useTheme()
    const { w } = useLangContext()
    const { pathname } = useLocation()

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Box sx={{

            [theme.breakpoints.up('md')]: {
                position: 'fixed',
                maxWidth: '320px',
                top: 80

            },
        }}>

            <Stack sx={{
                [theme.breakpoints.only('sm')]: {
                    flexDirection: 'row'

                },
            }} >
                <Paper sx={{
                    padding: 3,
                    [theme.breakpoints.down('lg')]: {
                        mb: 1
                    },
                    [theme.breakpoints.only('lg')]: {
                        mb: 1
                    },
                    [theme.breakpoints.only('sm')]: {
                        mr: 1
                    },
                    textAlign: 'center'
                }}>

                    <Box sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        mb: 1
                    }}>



                        <Avatar
                            alt={w('name')}
                            src="/img/me.jpg"
                            sx={{ width: 56, height: 56, boxShadow: '0px 3px 3px -2px #1976d2, 0px 3px 4px 0px #42a5f5, 0px 1px 8px 0px #1565c0;' }}
                        />
                    </Box>


                    <Box mt={2}>
                        <Typography variant="body1" fontWeight={600} color={theme.palette.primary.dark}>
                            {w('name')}
                        </Typography>
                    </Box>



                    <Box mt={2} textAlign='left' sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1
                    }}>
                        <Typography variant="caption" color="text.secondary">
                            {w('description_1')}
                        </Typography>

                        <Typography variant="caption" color="text.secondary" >
                            {w('description_2')}
                        </Typography>

                        <Typography variant="caption" color="text.secondary">
                            {w('description_3')}
                        </Typography>
                    </Box>

                    <Stack mt={2} textAlign='center' sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        gap: 1
                    }}>
                        <IconButton onClick={() => {
                            window.open('https://www.linkedin.com/in/ivan-ramses-mart%C3%ADnez-ponce-b17724116/', '_blank');
                        }} >
                            <LinkedIn />
                        </IconButton>
                        <IconButton onClick={() => {
                            window.open('https://github.com/RamPonce7/', '_blank');
                        }}  >
                            <GitHub />
                        </IconButton>
                        <Tooltip title="ramponcemtz@gmail.com" onClick={handleClick}>
                            <IconButton   >
                                <Mail />
                            </IconButton>
                        </Tooltip>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="ramponcemtz@gmail.com"
                        />
                    </Stack>



                </Paper>

                {pathname === '/' && (<Paper sx={{
                    padding: 2,
                    [theme.breakpoints.only('sm')]: {
                        height: 'fit-content'

                    },
                }}>
                    <Grid container alignItems={'center'}>
                        <Grid item xs={12} mb={1}>
                            <Typography variant='body1' >
                                {w('current_stack')}

                            </Typography>
                        </Grid>

                        <Grid item xs={4} sx={{
                            'display': 'flex',
                            justifyContent: 'space-around'
                        }}>
                            <Box maxWidth='60px'>
                                <img alt='react' src="/img/react.png" width='100%' />
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{
                            'display': 'flex',
                            justifyContent: 'space-around'
                        }}>
                            <Box maxWidth='80px'>
                                <img alt='react-native' src="/img/rn.png" width='100%' />
                            </Box>
                        </Grid>
                        <Grid item xs={4} sx={{
                            'display': 'flex',
                            justifyContent: 'space-around'
                        }}>
                            <Box maxWidth='80px'>
                                <img alt='typescript' src="/img/ts.png" width='100%' />
                            </Box>
                        </Grid>


                    </Grid>
                </Paper>)}

                {pathname !== '/' && (<Paper sx={{
                    padding: 2,

                    [theme.breakpoints.only('sm')]: {
                        height: 'fit-content'

                    },
                }}>
                    <Grid container alignItems={'center'}>
                        <Grid item xs={12} mb={1}>
                            <Typography variant='body1' fontWeight={600} color={theme.palette.primary.dark} >
                                {w('education')}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} mb={1}>
                            <Stack>
                                <Typography variant='body2' mt={1} >
                                    {w('school')}
                                </Typography>
                                <Typography variant='caption' mt={1} color="text.secondary">
                                    {w('career')}
                                </Typography>
                                <Typography variant='caption' mt={1} color="text.secondary">
                                    <i> 07/2013 - 07/2017</i>
                                </Typography>


                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>)}


            </Stack>



        </Box>
    )
}
