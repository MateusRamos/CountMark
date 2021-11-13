import React from "react";
import { Container, Cabecalho, Busca, Destaques, Categorias, MaisProcurados, TextoBusca } from "./styles";
import { ImgLogo, BotaoLogin, TextoSlogan, TextoSubSlogan, EntradaEndereco, BotaoBuscar } from "./styles";
import { ListaCategorias, BoxCategoria, TextoNomeCategoria, BoxCorretiva, Delimitador } from "./styles";
import { LinhaDelimitador, ListaProcurados, BoxItemEmpresa, BoxDadosEmpresa } from "./styles";
import { TextoNomeEmpresa, TextoCategoriaEmpresa} from "./styles";
import Icon from 'react-native-vector-icons/Entypo';

import Logo from "../../assets/logo.png";
import Promocao1 from "../../assets/Promocao1.png";
import Promocao from "../../assets/Promocao.gif"


const Category = [
    {id: '1', src:require('../../assets/Cervejarias.png')},
    {id: '2', src:require('../../assets/Farmacias.png')},
    {id: '3', src:require('../../assets/Postos.png')},
    {id: '4', src:require('../../assets/Lojas.png')}
]

const TopEmpresas = [
    {id: '1', nome: 'Padaria Fátima', categoria: 'Panificadora', src:require('../../assets/FotoEmpresa1.png')},
    {id: '2', nome: 'Padaria Masterpão', categoria: 'Panificadora', src:require('../../assets/FotoEmpresa2.png')},
    {id: '3', nome: 'Torino Pizzas', categoria: 'Pizzaria', src:require('../../assets/FotoEmpresa3.png')},
    {id: '4', nome: 'Restaurante Barroco', categoria: 'Restaurante', src:require('../../assets/FotoEmpresa4.png')},
    {id: '5', nome: 'Churrascaria Querência', categoria: 'Restaurante', src:require('../../assets/FotoEmpresa5.png')},
    {id: '6', nome: 'Carla Calçados', categoria: 'Loja de Calçados', src:require('../../assets/FotoEmpresa6.png')},
    {id: '7', nome: 'Rainha Calçados', categoria: 'Loja de Calçados', src:require('../../assets/FotoEmpresa7.png')},
]



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
                <img src={Promocao} width='330px' height='254px'/>
            </Destaques>

            <Categorias>
                <ListaCategorias 
                horizontal
                ItemSeparatorComponent={() => <BoxCorretiva/>}
                showsHorizontalScrollIndicator={false}
                data= {Category}
                keyExtractor = {(item) => item.id}
                renderItem={({item}) =>
    
                    <BoxCategoria>
                      <img src={item.src} width='150px' height='150px'/>
                      <TextoNomeCategoria></TextoNomeCategoria>
                    </BoxCategoria>

                }
                />
            </Categorias>

            <Delimitador><LinhaDelimitador/></Delimitador>

            <MaisProcurados>
                <ListaProcurados 
                numColumns={2}
                data= {TopEmpresas}
                keyExtractor = {(item) => item.id}
                renderItem={({item}) =>
    
                    <BoxItemEmpresa>
                      <img src={item.src} width='50px' height='50px'/>
                      <BoxDadosEmpresa>
                        <TextoNomeEmpresa>{item.nome} </TextoNomeEmpresa>
                        <TextoCategoriaEmpresa>{item.categoria}</TextoCategoriaEmpresa>
                      </BoxDadosEmpresa>    
                    </BoxItemEmpresa>

                }
                />
            </MaisProcurados>

        </Container>

    )
}