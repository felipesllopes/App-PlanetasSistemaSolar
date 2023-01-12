import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import styles from "../Stylo/styles";

export default function Mercurio() {

    return (

        <ImageBackground
            style={styles.imgFundo}
            source={require('../../img/fundo2.jpg')}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>

                <View style={styles.box}>

                    <View style={styles.itens}>
                        <Text style={styles.tittle}> Mercúrio </Text>
                        <Image style={styles.image} source={require('../../img/mercurio.png')} />
                    </View>


                    <Text style={styles.h1}>Dados Gerais</Text>

                    <Text style={styles.text1}>Diâmetro equatorial:
                        <Text style={styles.text2}> 4.879,4 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Área da superfície:
                        <Text style={styles.text2}> 74.800.000 km².</Text>
                    </Text>

                    <Text style={styles.text1}>Massa:
                        <Text style={styles.text2}> 3,285 × 10^23 kg.</Text>
                    </Text>

                    <Text style={styles.text1}>Distância do Sol:
                        <Text style={styles.text2}> 57.910.000 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Satélites naturais:
                        <Text style={styles.text2}> não possui.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de rotação:
                        <Text style={styles.text2}> 58 dias, 15 horas e 30 minutos.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de translação:
                        <Text style={styles.text2}> aproximadamente 88 dias.</Text>
                    </Text>

                    <Text style={styles.text1}>Temperatura média:
                        <Text style={styles.text2}> 179 ºC.</Text>
                    </Text>

                    <Text style={styles.text1}>Composição atmosférica:
                        <Text style={styles.text2}> por estar tão próximo do Sol, a atmosfera de Mercúrio é bem instável e fraca, se comparada com a da Terra. Em geral, possui gases como hélio, sódio e oxigênio, com predomínio dos dois primeiros.</Text>
                    </Text>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}