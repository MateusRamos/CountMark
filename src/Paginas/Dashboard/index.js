import React from "react";
import { Container, Cabecalho, Busca, Destaques, Categorias, MaisProcurados } from "./styles";
import { ImgLogo, BotaoLogin, TextoSlogan, TextoSubSlogan, EntradaEndereco, BotaoBuscar } from "./styles";

import Icon from 'react-native-vector-icons/Entypo';
import Logo from "../../assets/logo.png";

export default function Dashboard() {
    return(

        <Container>

            <Cabecalho>
                <ImgLogo> <img src={Logo} width='90%'/> </ImgLogo>
                <BotaoLogin> Entrar </BotaoLogin>
            </Cabecalho>

            <Busca>
                <TextoSlogan>Tudo para alavancar seu negócio</TextoSlogan>
                <TextoSubSlogan>As melhores parcerias estão aqui.</TextoSubSlogan>
                <EntradaEndereco/>
                <BotaoBuscar></BotaoBuscar>
            </Busca>
            <Destaques></Destaques>
            <Categorias></Categorias>
            <MaisProcurados></MaisProcurados>

        </Container>

    )
}