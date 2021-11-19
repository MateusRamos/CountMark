import React from "react";
import styles from "./styles";
import { Container,BoxApresentacao, BoxLogin, BoxSubmit } from "./styles";
import { TextoTituloApresentacao, TextoSubtituloApresentacao } from "./styles";
import { TextoTituloLogin, Delimitador, TextoEntradaEmail, TextoEntradaSenha } from "./styles";
import { BotaoSubmit, TextoSubmit, TextoInputSubmit } from "./styles";

import Logo from "../../assets/IconeLogo.png";

export default function Login() {
    return(
    <Container> 
        <BoxApresentacao>
            <img src={Logo} width="33%"/>
            <TextoTituloApresentacao>CountMark</TextoTituloApresentacao>
            <TextoSubtituloApresentacao>Tudo para alavancar seu negócio</TextoSubtituloApresentacao>
        </BoxApresentacao>

        <BoxLogin>
            <TextoTituloLogin>LOGIN</TextoTituloLogin>
            <Delimitador/>
            <TextoEntradaEmail placeholder="E-mail"/>
            <TextoEntradaSenha placeholder="Senha"/>
        </BoxLogin>

        <BoxSubmit>
            <BotaoSubmit>Entrar</BotaoSubmit>
            <TextoSubmit>Já tem uma conta? 
                <TextoInputSubmit>Entrar</TextoInputSubmit>
            </TextoSubmit>
        </BoxSubmit>
    </Container>
    )
}
