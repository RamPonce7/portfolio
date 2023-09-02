import { Box, Collapse, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material"
import { useLangContext } from "../../../state/lang/langContext"
import CoursesComponent from "./Courses.component"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import ProjectsComponent from "./Projects.component";

export const DetailsComponent = () => {
    const { w } = useLangContext()
    const theme = useTheme()
    const [openCourses, setOpenCourses] = useState(true)
    const [openProjects, setOpenProjects] = useState(true)
    return (
        <Box sx={{
            [theme.breakpoints.up('md')]: {
                ml: '320px'
            },

        }}>


            <Stack sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                [theme.breakpoints.down('sm')]: {
                    mt: 2,
                },
            }}>
                <Typography variant="h6" ml={2} color={theme.palette.text.primary} sx={{
                    [theme.breakpoints.down('sm')]: {
                        ml: 0,
                    },
                }} >
                    {w('projects_title')}
                </Typography>
                <IconButton onClick={() => {
                    setOpenProjects(!openProjects)
                }} >
                    {openProjects ? (<KeyboardArrowUp />) : (<KeyboardArrowDownIcon />)}

                </IconButton>

            </Stack>

            <Collapse in={openProjects} collapsedSize={0}>
                <Divider sx={{
                    ml: 2,
                    mb: 1,
                    [theme.breakpoints.down('sm')]: {
                        mt: 1,
                        ml: 0,
                    },
                }} />
                <ProjectsComponent />
            </Collapse>

            <Stack sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <Typography variant="h6" mt={0} ml={2} color={theme.palette.text.primary} sx={{
                    [theme.breakpoints.down('sm')]: {
                        ml: 0,

                    },
                }} >
                    {w('courses_title')}
                </Typography>
                <IconButton onClick={() => {
                    setOpenCourses(!openCourses)
                }} >
                    {openCourses ? (<KeyboardArrowUp />) : (<KeyboardArrowDownIcon />)}

                </IconButton>

            </Stack>

            <Collapse in={openCourses} collapsedSize={0}>
                <Divider sx={{
                    ml: 2,
                    mb: 1,
                    [theme.breakpoints.down('sm')]: {
                        mt: 1,
                        ml: 0,
                        mb: 2
                    },
                }} />
                <CoursesComponent />
            </Collapse>





        </Box>
    )
}
