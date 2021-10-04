import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ backgroundColor: 'crimson' }} position="static">
                    <Toolbar>
                        <img className="logo" src="https://www.dentsu.com/assets/images/main-logo-alt.png" />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dentsu International
                        </Typography>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default Header;
