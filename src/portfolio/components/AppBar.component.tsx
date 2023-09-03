import { FormControl, Select, SelectChangeEvent, useTheme } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useConfigAppContext } from "../state/configApp/configAppContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLangContext } from "../state/lang/langContext";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { grey, blue } from '@mui/material/colors';

const ResponsiveAppBar = () => {

    const theme = useTheme()
    const { page, setPage } = useConfigAppContext()
    const { setLang, w, lang: currentLang } = useLangContext()
    const { toggleTheme, typeTheme } = useConfigAppContext()

    const pages = [
        {
            label: page === 'Portfolio' ? w('experience') : w('portfolio'),
            type: 'internal',
            icon: page === 'Portfolio' ? <WorkHistoryIcon sx={{ verticalAlign: 'middle', mr: 1 }} /> : <AccountCircleIcon sx={{ verticalAlign: 'middle', mr: 1 }} />,
            url: page === 'Portfolio' ? 'Experience' : 'Portfolio'
        },

    ];

    const langs = ['ENG', 'ESP',];

    const handleCloseNavMenu = (type: string, url: string) => {

        switch (type) {
            case 'internal':
                setPage(url === 'Portfolio' ? 'Portfolio' : 'Experience')
                break;
            case 'external':
                window.open(url, "_blank", "noreferrer");
                break;
            default:
                break;
        }


    };

    const handleCloseLangs = (event: SelectChangeEvent) => {
        setLang(event.target.value === 'ENG' ? 'ENG' : 'ESP');
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

                    <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <Tooltip title="Mode">
                            <IconButton onClick={toggleTheme} sx={{
                                mr: 1
                            }} >
                                {typeTheme === 'D' ?
                                    (<DarkModeIcon sx={{ cursor: 'pointer', color: theme.palette.common.white }} />) :
                                    (<LightModeIcon sx={{ cursor: 'pointer', color: theme.palette.common.white }} />)}
                            </IconButton>
                        </Tooltip>


                        <FormControl>
                            <Select
                                variant="standard"
                                value={currentLang}
                                onChange={handleCloseLangs}
                                sx={{
                                    color: theme.palette.common.white,
                                    '::before': {
                                        borderBottom: '1px solid rgba(255, 255, 255, 0.7)'
                                    },
                                    '& svg': {
                                        color: theme.palette.common.white
                                    }

                                }}
                            >

                                {langs.map((lang) => (
                                    <MenuItem value={lang} key={lang}  >
                                        {lang}
                                    </MenuItem>
                                ))}

                            </Select>
                        </FormControl>



                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;