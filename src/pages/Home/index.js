import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function Home() {

    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.container} source={require('../../img/fundo3.jpg')}>

            <Text style={styles.tittle}>Planetas do Sistema Solar</Text>
            <Image style={styles.imageDecoration} source={require('../../img/decoration.jpg')} />
            <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Menu')}>
                <Text style={styles.textButtom}>Entrar</Text>
                <Image style={styles.imgButtom} source={require('../../img/imgButtom.png')} />
            </TouchableOpacity>

        </ImageBackground>
    )
}