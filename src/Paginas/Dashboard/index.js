import React from "react";
import { Container, Cabecalho, Busca, Destaques, Categorias, MaisProcurados, TextoBusca } from "./styles";
import { ImgLogo, BotaoLogin, TextoSlogan, TextoSubSlogan, EntradaEndereco, BotaoBuscar } from "./styles";
import Icon from 'react-native-vector-icons/Entypo';

import Logo from "../../assets/logo.png";
import Promocao1 from "../../assets/Promocao1.png";
import Promocao2 from "../../assets/Promocao2.gif"


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
                <EntradaEndereco>   
                    <Icon name="location-pin" size={20} color="#18BFF0"/>
                    <TextoBusca placeholder="Endereço da cidade desejada"/>
                </EntradaEndereco>
                <BotaoBuscar> Buscar </BotaoBuscar>
                
            </Busca>

            <Destaques>
                <img src={Promocao2} width='88%'/>
            </Destaques>

            <Categorias></Categorias>
            <MaisProcurados></MaisProcurados>

        </Container>

    )
}