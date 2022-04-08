import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

//Criando a função e recebendo por props o título, valor e imagem do jogo
export default function Jogos({titulo, valor, imagem}) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
        <Image
        style={estilo.images}
        source={require('../../imagens/${imagem}')}
        />

        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
    );
}
