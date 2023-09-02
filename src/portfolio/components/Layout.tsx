
import { Outlet } from 'react-router-dom'
import { Box, Container, useTheme } from '@mui/material'
import ResponsiveAppBar from './AppBar.component';
import { Suspense, useEffect } from 'react';
import { InfoComponent } from './Info.component';

export const Layout = () => {
    const theme = useTheme()

    useEffect(() => {
        document.body.style.backgroundColor = theme.palette.mode === 'dark' ? theme.palette.background.default : 'rgb(243,243,243)'
    }, [theme])


    return (
        <Suspense >
            <ResponsiveAppBar />

            <Container sx={{ marginTop: { xs: 7, md: 8 }, flex: 1 }} >
                <Box p={2}>
                    <InfoComponent />
                    <Outlet />
                </Box>

            </Container>
            {/* <Footer /> */}
        </Suspense>

    )
}
