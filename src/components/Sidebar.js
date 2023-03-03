import Box from '@mui/material/Box';
import fotoNina from './assets/img/fotoNina.jpg';
import { ReactComponent as IconNinja } from './assets/img/ninjas.svg';
import {
    FaCartPlus as IconCarrinhoMais,
    FaLuggageCart as IconOutroCarrinho
} from 'react-icons/fa'
import { FaCartPlus as IconCarrinhoMais } from 'react-icons/gi'

const Sidebar = () => {
    return (
        <Box sx={{
            background: '#DDD',
            width: '200px',
            height: '500px',
            padding: '15px'
        }}>
            <h2>Sidebar</h2>
            <hr />

            <img style={{
                width: 180,
                height: '123.83px'
            }}
                scr="" alt="" />
            {/* {colocar url da imagem, problema de img na url, se a imagem sumir, o site não exibira ela} */}

            <img style={{
                width: 180,
                height: '123.83px'
            }}
                scr={fotoNina}
                alt="foto gata branca com manchas preta, chamada Nina" />
            <hr />

            <IconNinja style={{
                width: 30,
                height: 30,
                color: '#345345'
                /*{ provavelmente nao vai mudar a cor, daria mudar direto no svg no fill e forcar perder a cor padrao}*/
            }} />
            <hr />

            <IconCarrinhoMais style={{
                width: 30,
                height: 30,
                color: '#345345'
            }} />
            <hr />

            <IconOutroCarrinho style={{
                width: 30,
                height: 30
            }} />
        </Box>
    )
}

export default Sidebar