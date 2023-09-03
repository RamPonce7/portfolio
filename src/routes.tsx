import { useRoutes } from "react-router-dom";
import { Layout } from "./portfolio/components/Layout";
import { ThemeProvider } from "@emotion/react";
import { useMemo } from "react";
import { useConfigAppContext } from "./portfolio/state/configApp/configAppContext";
import { createTheme } from "@mui/material";

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
        }

    ]);
    return routes
}

export default PortfolioRouter
