import {useState} from 'react'
import Terminal from "./Components/terminal/Terminal";
import {Box, Container, CssBaseline, Fab, ThemeProvider} from "@mui/material";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import {getThemeMode} from "./theme";

function App() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    function animateTerminal() {
        const terminalContainer = document.getElementById('terminal');
        if (terminalContainer) {
            if (isOpened) {
                terminalContainer.classList.add('scale-out');
                setTimeout(() => {
                    terminalContainer.style.display = 'none';
                }, 600);
                terminalContainer.classList.remove('scale-in');
            } else {
                terminalContainer.classList.add('scale-in');
                terminalContainer.style.display = 'block';
                terminalContainer.classList.remove('scale-out');
            }
        }
    }

    const rebootTerminal = () => {
        const terminalContainer = document.getElementById('terminal');
        if (terminalContainer) {
            terminalContainer.classList.add('scale-out');
            terminalContainer.style.display = 'none';
            setIsOpened(false);
            setTimeout(() => {
                terminalContainer.style.display = 'block';
                terminalContainer.classList.add('scale-in');
                terminalContainer.classList.remove('scale-out');
                setIsOpened(true);
            }, 1000);
        }
    }

    const handleOpen = () => {
        animateTerminal();
        setIsOpened(!isOpened);
    }
    const handleClose = () => {
        animateTerminal();
        setIsOpened(false);
    }

    return (
        <ThemeProvider theme={getThemeMode(2)}>
            <CssBaseline>
                <Container maxWidth="xl" sx={{mt: 9, p: 1}}>
                    <Box sx={{backgroundColor: 'secondary.bg', height: 'auto', minHeight: '90vh'}}>
            <Terminal
                title={"Terminal"}
                handleClose={handleClose}
                rebootTerminal={rebootTerminal}
            />

            <Fab
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    left: 16,
                    zIndex: 1000,
                    backgroundColor : '#000000',
                    borderRadius :'10px'
                }}
                onClick={handleOpen}
                aria-label="terminal"
            >
                <TerminalOutlinedIcon fontSize={'large'} color={'success'}/>
            </Fab>
                    </Box>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
