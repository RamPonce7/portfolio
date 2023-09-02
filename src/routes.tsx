import { useRoutes } from "react-router-dom";
import { Layout } from "./portfolio/components/Layout";
import MePage from "./portfolio/pages/Me/loader";

import ResumePage from "./portfolio/pages/Resume/loader";
import { ThemeProvider } from "@emotion/react";
import { useMemo } from "react";
import { useConfigAppContext } from "./portfolio/state/configApp/configAppContext";
import { createTheme } from "@mui/material";
import ExperiencePage from "./portfolio/pages/Experience/loader";

const PortfolioRouter = () => {
    const { typeTheme } = useConfigAppContext()
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: typeTheme === 'D' ? 'dark' : 'light',
                },
            }),
        [typeTheme],
    );
    const routes = useRoutes([
        {
            path: '/',
            element: (
                <ThemeProvider theme={theme}>
                    <Layout />
                </ThemeProvider>
            ),
            children: [
                { path: '/', element: <MePage /> },
                { path: '/experience', element: <ExperiencePage /> },
                { path: '/resume', element: <ResumePage /> },
            ]
        }

    ]);
    return routes
}

export default PortfolioRouter
