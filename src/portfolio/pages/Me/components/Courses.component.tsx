
import { useLangContext } from "../../../state/lang/langContext"
import { Box, Chip, Grid, Paper, Stack, Typography, useTheme } from "@mui/material"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
const courses = [
    {
        img: '/img/flutter.png',
        year: '2024',
        platform: 'Udemy',
        tags: ['Flutter', 'Dart', 'Go Router', 'Provider', 'Http', 'Push Notification', 'Local Storage', 'Animations', 'Widgets', 'State Management', 'PlayStore']

    },

    {
        img: '/img/redux.png',
        year: '2024',
        platform: 'Udemy',
        tags: ['Redux', 'Redux Toolkit', 'RTK Query', 'Persist', 'Middlewares', 'Selectors', 'Slices', 'Async Actions', 'Thunks']

    },
    {
        img: '/img/next.png',
        year: '2023',
        platform: 'Udemy',
        tags: ['React', 'NextJs', 'Router', 'LazyLoad', 'Auth', 'Server Side Render']

    },
    {
        img: '/img/rn.png',
        year: '2023',
        platform: 'Udemy',
        tags: ['React', 'React Native', 'TS', 'Axios', 'Context', 'Redux', 'Push Notification']
    },
    {
        img: '/img/ngrx.png',
        year: '2022',
        platform: 'Udemy',
        tags: ['Angular', 'Redux', 'TS', 'RxJs', 'State Management']
    },
    {
        img: '/img/rn.png',
        year: '2021',
        platform: 'Platzi',
        tags: ['React', 'React Native', 'JS', 'Expo', 'Cli', 'State']

    },
    {
        img: '/img/react.png',
        year: '2021',
        platform: 'Udemy',
        tags: ['React', 'Context', 'Router', 'Formik', 'TS', 'Axios', 'LazyLoad', 'Suspense']

    },
    {
        img: '/img/js.png',
        year: '2020',
        platform: 'Platzi',
        tags: ['Js', 'ECS6+']

    },
    {
        img: '/img/flutter.png',
        year: '2020',
        platform: 'Udemy',
        tags: ['Flutter', 'Push Notification', 'Redux', 'Http']

    },
    {
        img: '/img/react.png',
        year: '2020',
        platform: 'Udemy',
        tags: ['React', 'Components', 'State', 'Styled']

    },
    {
        img: '/img/js.png',
        year: '2019',
        platform: 'Udemy',
        tags: ['Js', 'Arrow functions', 'Promises']

    },
    {
        img: '/img/sass.png',
        year: '2019',
        platform: 'Platzi',
        tags: ['Sass', 'css', 'mixin']

    },
    {
        img: '/img/flutter.png',
        year: '2019',
        platform: 'Platzi',
        tags: ['Flutter', 'Widgets', 'State']

    },
    {
        img: '/img/spark.png',
        year: '2018',
        platform: 'Udemy',
        tags: ['Spark', 'Big Data', 'Clustering']

    },
    {
        img: '/img/docker.png',
        year: '2018',
        platform: 'Udemy',
        tags: ['Docker', 'Swarm', 'Compose', 'Cluster']

    },
    {
        img: '/img/angular.png',
        year: '2018',
        platform: 'Udemy',
        tags: ['Angular', 'Router', 'Reactive Forms', 'Http', 'Interceptor', 'Auth']

    },
    {
        img: '/img/angular.png',
        year: '2017',
        platform: 'Platzi',
        tags: ['Angular', 'Router', 'Components', 'Directives', 'Services']

    },
    {
        img: '/img/docker.png',
        year: '2017',
        platform: 'Platzi',
        tags: ['Docker', 'Images', 'Dockerfile',]

    },

    {
        img: '/img/git.png',
        year: '2017',
        platform: 'Platzi',
        tags: ['Git', 'Commands', 'Github']

    },
]
const CoursesComponent = () => {
    const { w } = useLangContext()
    const theme = useTheme()
    return (
        <Grid container width={'100%'} sx={{
            [theme.breakpoints.down('md')]: {
                ml: 0
            },
            ml: 1
        }} >
            {courses.map(({ img, tags, year, platform }, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{
                    padding: '0 !important',
                    mb: 1,
                    mt: 1
                }}>
                    <Paper sx={{
                        height: '100%',
                        margin: 1,
                        [theme.breakpoints.down('sm')]: {
                            ml: 0,
                            mr: 0
                        },
                    }}>
                        <Grid container spacing={1} sx={{ alignItems: 'center' }}>
                            <Grid item xs={3}   >
                                <Box p={1}>
                                    <img alt={w(`course_title_${courses.length - (index + 1)}`)} src={img} style={{ maxWidth: '100%' }} />
                                </Box>

                            </Grid>
                            <Grid item xs={9} sx={{
                            }} >
                                <Stack sx={{
                                    paddingBottom: 1,
                                    paddingRight: 1
                                }}>
                                    <Stack spacing={1} pt={1} pb={1}>
                                        <Typography variant="body1" color={theme.palette.primary.dark}>
                                            {w(`course_title_${courses.length - (index + 1)}`)}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <CalendarMonthIcon sx={{
                                                verticalAlign: 'middle',
                                            }} /> {year}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            <SchoolIcon sx={{
                                                verticalAlign: 'middle'
                                            }} /> {platform}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sx={{
                                paddingTop: '0px !important'
                            }}>

                                <Box mb={1} ml={2} mr={1} >
                                    {tags.map((tag) => (
                                        <Chip sx={{ mr: 1, mt: 1 }} label={tag} key={tag} />
                                    ))}

                                </Box>
                            </Grid>
                        </Grid>

                    </Paper>

                </Grid>
            ))}

        </Grid>
    )
}

export default CoursesComponent

