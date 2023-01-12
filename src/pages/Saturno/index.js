import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import styles from "../Stylo/styles";

export default function Saturno() {

    return (

        <ImageBackground
            style={styles.imgFundo}
            source={require('../../img/fundo2.jpg')}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>

                <View style={styles.box}>

                    <View style={styles.itens}>
                        <Text style={styles.tittle}> Saturno </Text>
                        <Image style={styles.image} source={require('../../img/saturno.png')} />
                    </View>

                    <Text style={styles.h1}>Dados Gerais</Text>

                    <Text style={styles.text1}>Diâmetro equatorial:
                        <Text style={styles.text2}> 120.536 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Área da superfície:
                        <Text style={styles.text2}> 4,27 × 10^10 km².</Text>
                    </Text>

                    <Text style={styles.text1}>Massa:
                        <Text style={styles.text2}> 5,683 × 10^26 kg.</Text>
                    </Text>

                    <Text style={styles.text1}>Distância do Sol:
                        <Text style={styles.text2}> 1.429.400.000 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Satélites naturais:
                        <Text style={styles.text2}> 82.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de rotação:
                        <Text style={styles.text2}> 10 horas e 34 minutos.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de translação:
                        <Text style={styles.text2}> 29,4 anos.</Text>
                    </Text>

                    <Text style={styles.text1}>Temperatura média:
                        <Text style={styles.text2}> -138 º C.</Text>
                    </Text>

                    <Text style={styles.text1}>Composição atmosférica:
                        <Text style={styles.text2}> sua atmosfera é bastante densa, composta por nitrogênio e metano.</Text>
                    </Text>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}