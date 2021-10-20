import React from "react";
import { View, Text, TextInput, Button } from 'react-native';
import styles from "./styles";

import { Container } from "./styles";
import Logo from "../../assets/logo2.png";
import Loading from "../../assets/loading.gif";

export default function Preload() {
    return(
    <Container> 
        <img src={Logo} width="90%"/>
        <img src={Loading} width="20%"/>
    </Container>
    )
}