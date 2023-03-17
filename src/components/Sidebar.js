import Box from '@mui/material/Box';
import fotoNina from './assets/img/fotoNina.jpg';
import { ReactComponent as IconCarrinho } from './assets/img/carrinho.svg'
import {
    FaCartPlus as IconCarrinhoMais,
    FaLuggageCart as IconOutroCarrinho
} from 'react-icons/fa';
import { GiCartwheel as CarrinhoRoda } from 'react-icons/gi'


const Sidebar = () => {
    return (
        <Box sx={{
            background: '#DDD',
            width: '200px',
            height: '500px',
            padding: '15px'
        }}>
            <h2>Sidebar</h2>
            <img
                style={{
                    width: 200,
                    height: 123.83
                }}
                src="https://i.natgeofe.com/k/830b5d15-92db-429f-a80a-cc89b5700af5/mt-everest.jpg?w=500"
                alt="Mountain"
            />
            <hr />

            <img style={{
                width: 180,
                height: '123.83px'
            }}
                scr={fotoNina}
                alt="foto gata branca com manchas pretas, chamada Nina" />
            <hr />

            <IconCarrinho style={{
                width: 30,
                height: 30,
                fill: '#345345'
            }} />
            <hr />

            <IconCarrinhoMais
                style={{
                    width: 40,
                    height: 40,
                    color: '#345345'
                }}
            /><hr />

            <IconCarrinho style={{
                width: 30,
                height: 30,
                fill: '#982234'
            }} />
            <IconOutroCarrinho />
            <CarrinhoRoda />
        </Box>
    )
}

export default Sidebar