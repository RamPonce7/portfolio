import { useTheme } from "@mui/material";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from "react";
import { useConfigAppContext } from "../state/configApp/configAppContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLangContext } from "../state/lang/langContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useLocation, useNavigate } from "react-router-dom";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey, blue } from '@mui/material/colors';

const ResponsiveAppBar = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const { pathname } = useLocation();

    const { setLang, w, lang: currentLang } = useLangContext()
    const { toggleTheme, typeTheme } = useConfigAppContext()

    const pages = [
        {
            label: pathname === '/' ? w('experience') : w('portfolio'),
            type: 'internal',
            icon: pathname === '/' ? <WorkHistoryIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> : <AccountCircleIcon sx={{ verticalAlign: 'middle', mr: 1 }} />,
            url: pathname === '/' ? '/experience' : '/'
        },
        {
            label: w('resume'),
            icon: <FileDownloadIcon sx={{ verticalAlign: 'middle' }} />,
            type: 'external',
            url: 'http://ramponce7.com/assets/ResumeFullRam2023.pdf'
        },
    ];


    const langs = ['ENG', 'ESP',];


    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (type: string, url: string) => {

        switch (type) {
            case 'internal':
                navigate(url)
                break;
            case 'external':
                window.open(url, "_blank", "noreferrer");
                break;
            default:
                break;
        }


    };

    const handleCloseUserMenu = (setting: string) => {
        if (setting.length) {
            setLang(setting === 'ENG' ? 'ENG' : 'ESP');
        }

        setAnchorElUser(null);
    };


    return (
        <AppBar position="fixed" sx={{ background: theme.palette.mode === 'light' ? blue[900] : grey[900] }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>



                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        {/* <Tooltip title="Languages">
                            <IconButton onClick={handleOpenNavMenu} >
                                <MenuIcon sx={{ color: theme.palette.common.white }} />
                            </IconButton>
                        </Tooltip> */}

                        {pages.map(({ label, type, url, icon }) => (
                            <MenuItem key={label} onClick={() => { handleCloseNavMenu(type, url) }}>
                                {icon && (icon)}
                                <Typography variant="body2" textAlign="center">{label}</Typography>
                            </MenuItem>
                        ))}


                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Mode">
                            <IconButton onClick={toggleTheme} >
                                {typeTheme === 'D' ?
                                    (<DarkModeIcon sx={{ cursor: 'pointer', color: theme.palette.common.white }} />) :
                                    (<LightModeIcon sx={{ cursor: 'pointer', color: theme.palette.common.white }} />)}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Languages">
                            <IconButton onClick={handleOpenUserMenu} >
                                <LanguageIcon sx={{ color: theme.palette.common.white }} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {langs.map((lang) => (
                                <MenuItem selected={lang === currentLang} key={lang} onClick={() => { handleCloseUserMenu(lang) }}>
                                    <Typography textAlign="center">{lang}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;