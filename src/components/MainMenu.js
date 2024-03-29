import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'

const MainMenu = () => {
    return (
        <Box component="nav" style={styles.nav}>
            <ul style={styles.ulMenu}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/quem-somos'>Quem Somos</NavLink></li>
                <li><NavLink to='/users'>Users</NavLink></li>
                <li><NavLink to='/contato'>Contato</NavLink></li>
            </ul>
            <Button sx={{
                background: '00FF00'
            }} variant="contained">Contained</Button>
        </Box>

    )
}

const styles = {
    nav: {
        color: '#FFF',
        margin: '0 0 0 auto',
        '& ul li a': {
            color: '#FFF',
            textDecoration: 'none',
            padding: '0 5px 8px 5px',
            '&:hover': {
                color: '#DDD',
                borderBottom: '3px solid #f0c14b',
            }
        }
    },
    ulMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        listStyleType: 'none',
        padding: '0',
        margin: '0'
    }
}


export default MainMenu