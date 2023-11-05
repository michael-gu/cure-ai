import { AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const menu = <AppBar className='menu' position="fixed" color='primary'>
    <Toolbar className='toolbar-container'>
        <Box className='menu-title-container'>
            <Typography className="menu-button" variant="h2" color={'white'}>
                CureAI
            </Typography>
        </Box>
        <Box className='menu-button-container'> {/* Adjust the margin value as needed */}
            <Link to="/" style={{ textDecoration: 'none' }}>
            <Button className="menu-button" variant='contained' color='secondary' size='large'>
                <Typography variant='h6' fontWeight={'bold'} color={'white'}>Home</Typography>
            </Button>
            </Link>
        </Box>
        <Box className='menu-button-container'>
            <Link to="/cure-ai" style={{ textDecoration: 'none' }}>
            <Button className='menu-button' variant='contained' color='secondary' size='large'>
                <Typography variant='h6' fontWeight={'bold'} color={'white'}>CURE AI</Typography>
            </Button>
            </Link>
        </Box>
        <Box className='menu-button-container'>
            <Link to="/diagnosis-page" style={{ textDecoration: 'none' }}>
            <Button className="menu-button" variant='contained' color='secondary' size='large'>
                <Typography variant='h6' fontWeight={'bold'} color={'white'}>Diagnose</Typography>
            </Button>
            </Link>
        </Box>
    </Toolbar>
</AppBar>;

const footer = <div className='footer'>
    <Typography variant='h6' fontWeight={'bold'}>&copy; 2023 Michael Gu</Typography>
</div>

export { menu, footer };