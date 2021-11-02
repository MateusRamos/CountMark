import React from "react";
import styles from "./styles";
import { Container, BoxEmpresas, Cabecalho, BoxFiltro, BoxEndereco, BoxSubtitulo } from "./styles";
import { SubtituloEndereco, TituloEndereco, BoxFotoMapa, BotaoAlfabetica, BotaoPreco, BotaoVendidos } from "./styles";

import FotoMapa from "../../assets/Mapa.png";
import PinMapa from "../../assets/localizacao.png";


const Empresas = [

]

export default function Lista_Empresa() {
    return(

        <Container>
            <Cabecalho>
                <BoxFotoMapa>
                    <img src={FotoMapa} width="85px" height="85px"></img>
                </BoxFotoMapa>
                <BoxEndereco>
                    <TituloEndereco>Endereço:</TituloEndereco>
                    <BoxSubtitulo>
                        <img src={PinMapa} width="15px" height="15px"></img>
                        <SubtituloEndereco>R. Tiradentes, 597, Birigui-SP</SubtituloEndereco>
                    </BoxSubtitulo>
                </BoxEndereco>
            </Cabecalho>
            <BoxFiltro>
                <BotaoAlfabetica>A-Z</BotaoAlfabetica>
                <BotaoPreco>Preço</BotaoPreco>
                <BotaoVendidos>+ Vendidos</BotaoVendidos>
            </BoxFiltro>
            <BoxEmpresas>

            </BoxEmpresas>
        </Container>

    )
}
