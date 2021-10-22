import React from "react";
import {Text} from "react-native";
import { Container, Box, Nome, BoxImg, Box2, Notas, Distancia, Seguidores} from "./styles";
import ImagemPerfil from "../../assets/user.png";
import Estrela from "../../assets/estrela.png";


export default function Perfil() {
    return(
    <Container> 
        <Box>
            <BoxImg>
                <img src={ImagemPerfil} width='40%'></img>
            </BoxImg>
            <Nome>Nome Usuário</Nome>
        </Box>
        <Box2>

        </Box2>
        <Notas>
            <img src={Estrela} width = '25px'></img>
            {/*<TextoNota>4.5/5.0</TextoNota>*/}
            <Text style={{color: 'yellow'}}>4.5/5.0</Text>
        </Notas>
        <Distancia></Distancia>
        <Seguidores></Seguidores>
    </Container>
    )
}