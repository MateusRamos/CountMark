import React from "react";
import { Container, Box, Nome, BoxImg, Box2} from "./styles";
import ImagemPerfil from "../../assets/user.png";


export default function Perfil() {
    return(
    <Container> 
        <Box>
            <BoxImg>
                <img src={ImagemPerfil} width='40%'></img>
            </BoxImg>
            <Nome>Nome Usuário</Nome>
        </Box>
    </Container>
    )
}