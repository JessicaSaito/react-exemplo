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

    {/*
        return (
        <Box sx={{
            background: "#DDD",
            width: 200,
            height: 500,
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
            <img
                style={{
                    width: 200,
                    heigh: 120
                }}
                src={fotoMontanha}
                alt="Mountain"
            />
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
    */}
}

export default Sidebar