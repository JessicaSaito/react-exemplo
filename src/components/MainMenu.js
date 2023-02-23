import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const MainMenu = () => { 
    return (
        <Box component="nav" style={styles.nav}>
            <ul style={styles.ulMenu}>menu...</ul>
            <Button sx={{
                background: '00FF00'
            }} variant="contained">Contained</Button>
        </Box>
        
    )
}

const styles = {
    nav: {
        background: '#555',
        color: '#000',
        padding: '20px',
        marginTop: '5px'
    },
    ulMenu: {
        listStyleType: 'none'
    }
}


export default MainMenu