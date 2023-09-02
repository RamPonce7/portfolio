import { Box, Collapse, Divider, Grid, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material';
import { IProject } from '../../../interfaces/project.interface'
import { useLangContext } from '../../../state/lang/langContext';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { GitHub } from '@mui/icons-material';
import { useState } from 'react';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
export const ProjectComponent = ({ project, index }: { project: IProject, index: number }) => {
    const { lang } = useLangContext()
    const { description, techs, title, github, link, background } = project
    const [openProject, setOpenProject] = useState(false)
    const theme = useTheme()
    return (
        <Grid item xs={12} sm={6} key={index} sx={{
            padding: '0 !important',
            mb: 1,
            height: 'fit-content'
        }}>
            <Paper sx={{
                height: '100%',
                margin: 1,
                [theme.breakpoints.down('sm')]: {

                    margin: 0,
                    mt: 2,

                },
            }}>



                <Stack sx={{
                    background: `url(/img/${background})`,
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '220px'
                }}>

                    <Stack sx={{

                        p: 1,
                        background: 'linear-gradient(90deg, rgb(53 53 53 / 0%) 0%, #101010d4 100% 100%)',
                        height: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                    }}>

                        <Stack sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>

                            {link && (<IconButton sx={{
                                color: theme.palette.common.white
                            }}
                                onClick={() => {
                                    window.open(link, '_blank');
                                }}
                            >
                                <TravelExploreIcon />
                            </IconButton>)}

                            {github && (<IconButton sx={{
                                color: theme.palette.common.white
                            }}
                                onClick={() => {
                                    window.open(github, '_blank');
                                }}
                            >
                                <GitHub />
                            </IconButton>)}
                        </Stack>

                        <Stack sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>

                            {techs.map((t) => (
                                <IconButton key={t} >
                                    <img src={`/img/${t}.png`} alt={t} width='24px' />
                                </IconButton>
                            ))}

                        </Stack>


                    </Stack>

                </Stack>
                <Box>

                    <Stack sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        m: 1,
                        ml: 2
                    }}>
                        <Typography variant="body1" color={theme.palette.primary.dark} >
                            {title[lang]}
                        </Typography>
                        <IconButton onClick={() => {
                            setOpenProject(!openProject)
                        }} >
                            {openProject ? (<MinimizeIcon />) : (<AddIcon />)}

                        </IconButton>

                    </Stack>


                    <Collapse in={openProject} collapsedSize={0} >
                        <Divider />
                        <Box m={2}>
                            {description[lang].map((desc, index) => (
                                <Typography key={index} variant="caption" color="text.secondary" display='inline-block'>
                                    {desc}
                                </Typography>
                            ))}
                        </Box>


                    </Collapse>

                </Box>





            </Paper>
        </Grid>
    )
}
