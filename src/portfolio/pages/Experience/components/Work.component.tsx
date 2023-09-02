import { KeyboardArrowUp } from "@mui/icons-material"
import { Box, Collapse, Divider, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useLangContext } from "../../../state/lang/langContext";
import { useState } from "react";
import { IWork } from "../../../interfaces/work.interface";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const WorkComponent = ({ work, index }: { work: IWork, index: number }) => {
    const { company, role, from, to, goals } = work
    const theme = useTheme()
    const { lang, w } = useLangContext()
    const [openWork, setOpenWork] = useState(true)
    return (
        <>
            <Paper sx={{
                height: '100%',
                margin: 1,
                mt: index === 0 ? 0 : 1,
                pt: 1,
                pl: 1,
                pb: 1,
                mx: 2,

                [theme.breakpoints.down('md')]: {
                    m: 0,
                    mt: 2,
                },
            }}>
                <Stack sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Stack>
                        <Typography variant="h6" ml={1} color={theme.palette.text.primary} >
                            {company}
                        </Typography>

                        <Typography variant="body1" ml={1} color={theme.palette.text.primary} >
                            {role}
                        </Typography>
                    </Stack>

                    <Stack sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Typography variant="caption" mr={1} color={theme.palette.primary.dark}>
                            <i> {`${from} - ${w(to)}`}</i>
                        </Typography>
                        <IconButton onClick={() => {
                            setOpenWork(!openWork)
                        }} >
                            {openWork ? (<KeyboardArrowUp />) : (<KeyboardArrowDownIcon />)}

                        </IconButton>
                    </Stack>


                </Stack>

                <Collapse in={openWork} collapsedSize={0}>

                    <Divider sx={{
                        mt: 1
                    }} />


                    {goals[lang].map((goal, index) => (
                        <Stack m={2} sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                            key={index}
                        >
                            <Box>
                                <FiberManualRecordIcon sx={{
                                    width: '8px',
                                    height: '8px',
                                    color: theme.palette.primary.light
                                }} />


                            </Box>
                            <Box px={2}>
                                <Typography variant="body2" color="text.secondary">
                                    {goal}
                                </Typography>

                            </Box>

                        </Stack>

                    ))}

                </Collapse>
            </Paper >
        </>
    )
}

export default WorkComponent
