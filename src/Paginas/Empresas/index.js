import React from "react";
import { Wallpaper, Container } from "./styles";
import Icon from 'react-native-vector-icons/Entypo';
import { BoxEmpresa, LogoEmpresa, BoxTitulo, Sub1, Sub2, Sub3, BuscaProdutos, TextoBusca, BoxBusca} from "./styles";
import { Delimitador, LinhaDelimitador, Itens, TextoTitulo, TextoDescricao, TextoQuantidade, TextoValor } from "./styles";

import { BoxProdutos, ListaProdutos, BoxEmpresaItem, BoxItemDados, BoxItemFoto } from "./styles";

import WallpaperLogo from "../../assets/Wallpaper.png";
import LogoApresent from "../../assets/FotoEmpresa1.png"


const Produtos = [
    {id: '1', nome: 'Embalagens p/ Viagem', descricao: 'Logo nas embalagens p/ viagem da loja e filiais.', quantidade: 'Referente a 6000 unidades.', valor: 'R$200,00', src:require('../../assets/Embalagem.png')},
    {id: '2', nome: 'Cardápios', descricao: 'Logo nas embalagens p/ viagem da loja e filiais.', quantidade: '', valor: 'R$600,00', src:require('../../assets/Embalagem.png')},
]

export default function Empresas(){
    return(
        <Container>

            <Wallpaper>
                <img src={WallpaperLogo} width='375px' height='122px'></img>
            </Wallpaper>

            <BoxEmpresa>
                    ⠀<LogoEmpresa><img src={LogoApresent} width='75px' height='75px'/> </LogoEmpresa>
                    <BoxTitulo>Padaria Fatima
                        <Sub1>Ver mais • <Sub2>Panificadora</Sub2> <Icon name="star" size={12} color="#FFD710"/><Sub3>4,8</Sub3></Sub1> 
                    </BoxTitulo>    
            </BoxEmpresa>

            <BoxBusca>
                <BuscaProdutos>
                &nbsp;&nbsp;<Icon name="shopping-cart" size={20} color="#C0C0C0"/>
                        <TextoBusca placeholder="Busca dos produtos disponíveis"/>
                </BuscaProdutos>
            </BoxBusca>


            <Itens>
                Itens
            </Itens>

            <BoxProdutos>
                <ListaProdutos 
                    data= {Produtos}
                    keyExtractor = {(item) => item.id}
                    renderItem={({item}) =>

                    
                    <BoxEmpresaItem>

                        <BoxItemDados>
                            <TextoTitulo>Embalagens para viagem</TextoTitulo>
                            <TextoDescricao>Logo de sua empresa em todas as embalagens utilizadas para viagem</TextoDescricao>
                            <TextoQuantidade>6000 unidades</TextoQuantidade>
                            <TextoValor>R$ 200,00</TextoValor>
                        </BoxItemDados>

                        <BoxItemFoto>
                            <img src={item.src} width="90%" />
                        </BoxItemFoto>

                    </BoxEmpresaItem>
                    
                    } />
            </BoxProdutos>


        </Container>
    )

}