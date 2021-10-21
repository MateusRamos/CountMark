import React from "react";
import { Container, Box, Nome} from "./styles";
import ImagemPerfil from "../../assets/user.png";


export default function Perfil() {
    return(
    <Container> 
        <Box>
            <img src={ImagemPerfil} width='40%'></img>
            <Nome>Nome Usuário</Nome>
        </Box>
    </Container>
    )
}