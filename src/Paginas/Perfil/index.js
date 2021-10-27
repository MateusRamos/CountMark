import React from "react";
import {Text} from "react-native";
import { Container} from "./styles";
import { BoxTopo, BoxMenu, Dados, Pedidos, Cupons, Favoritos, Configuracoes, NomeUsuario, TextoMenu} from "./styles";

import FotoPerfil from "../../assets/user.png"
import FotoDados from "../../assets/dados.png"
import FotoPedidos from "../../assets/pedidos.png"
import FotoCupons from "../../assets/cupons.png"
import FotoFavoritos from "../../assets/favoritos.png"
import FotoConfiguracoes from "../../assets/configuracoes.png"

export default function Perfil() {
    return(
        <Container>
            <BoxTopo>
                <img src={FotoPerfil} width="130px" height="130px;"></img>
                <NomeUsuario>Lucas Heideric</NomeUsuario>
            </BoxTopo>
            <BoxMenu>

                <Dados>
                    <img src={FotoDados} width="40px" height="40px"></img>
                    <TextoMenu>Meus dados</TextoMenu> 
                </Dados>

                <Pedidos>
                    <img src={FotoPedidos} width="40px" height="40px"></img>
                    <TextoMenu>Meus pedidos</TextoMenu> 
                </Pedidos>

                <Cupons>
                    <img src={FotoCupons} width="40px" height="40px"></img>
                    <TextoMenu>Cupons</TextoMenu>
                </Cupons>

                <Favoritos>
                    <img src={FotoFavoritos} width="40px" height="40px"></img>
                    <TextoMenu>Favoritos</TextoMenu>
                </Favoritos>

                <Configuracoes>
                    <img src={FotoConfiguracoes} width="40px" height="40px"></img>
                    <TextoMenu>Configurações</TextoMenu>
                </Configuracoes>

            </BoxMenu>

        </Container>

    )
};