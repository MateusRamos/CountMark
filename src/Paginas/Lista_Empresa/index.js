import React from "react";
import styles from "./styles";
import { Container, BoxEmpresas, Cabecalho, BoxFiltro, BoxEndereco, BoxSubtitulo } from "./styles";
import { SubtituloEndereco, TituloEndereco, TituloEmpresas, BoxFotoMapa, BotaoAlfabetica, BotaoPreco, BotaoVendidos, ListaEmpresas } from "./styles";
import {BoxEmpresaItem, BoxEmpresaTitulo, BoxEmpresaDados, TituloItemEmpresas, Categoria, Distancia, Nota} from "./styles";



import FotoMapa from "../../assets/Mapa.png";
import PinMapa from "../../assets/localizacao.png";

import Icon from 'react-native-vector-icons/FontAwesome';

const Empresas = [
    {id: '1', nome: 'Padaria Fátima', nota: '4.8', categoria: 'Panificadora', distancia: '2.7', src:require('../../assets/FotoEmpresa1.png')},
    {id: '2', nome: 'Padaria Masterpão', nota: '4.7', categoria: 'Panificadora', distancia: '2', src:require('../../assets/FotoEmpresa2.png')},
    {id: '3', nome: 'Torino Pizzas', nota: '4.8', categoria: 'Pizzaria', distancia: '3', src:require('../../assets/FotoEmpresa3.png')},
    {id: '4', nome: 'Restaurante Barroco Carnes e Pastas', nota: '4.9', categoria: 'Restaurante', distancia: '0.35', src:require('../../assets/FotoEmpresa4.png')},
    {id: '5', nome: 'Churrascaria Querência', nota: '4.8', categoria: 'Restaurante', distancia: '1.7', src:require('../../assets/FotoEmpresa5.png')},
    {id: '6', nome: 'Carla Calçados', nota: '4.6', categoria: 'Loja de Calçados', distancia: '2', src:require('../../assets/FotoEmpresa6.png')},
    {id: '7', nome: 'Rainha Calçados', nota: '4.8', categoria: 'Loja de Calçados', distancia: '3', src:require('../../assets/FotoEmpresa7.png')},
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
                <TituloEmpresas>Lojas</TituloEmpresas>
                <ListaEmpresas 
                data= {Empresas}
                keyExtractor = {(item) => item.id}
                renderItem={({item}) =>
    
                <BoxEmpresaItem>
                        <img src={item.src} width="60px;" height="60px;"/>
                    <BoxEmpresaTitulo>
                        <TituloItemEmpresas>
                            {item.nome}
                        </TituloItemEmpresas>
                        <BoxEmpresaDados>
                        <Icon name="star" size={17} color="#FFD710" />
                        <Nota>{item.nota}</Nota>
                        <Categoria>•  {item.categoria}  •</Categoria>
                        <Distancia>{item.distancia} km</Distancia>
                        </BoxEmpresaDados>
                    </BoxEmpresaTitulo>
                </BoxEmpresaItem>

                }
                />
            </BoxEmpresas>
        </Container>

    )
}
