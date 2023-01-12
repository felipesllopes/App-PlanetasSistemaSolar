import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import styles from "../Stylo/styles";

export default function Urano() {

    return (

        <ImageBackground
            style={styles.imgFundo}
            source={require('../../img/fundo2.jpg')}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>

                <View style={styles.box}>

                    <View style={styles.itens}>
                        <Text style={styles.tittle}> Urano </Text>
                        <Image style={styles.image} source={require('../../img/urano.png')} />
                    </View>

                    <Text style={styles.h1}>Dados Gerais</Text>

                    <Text style={styles.text1}>Diâmetro equatorial:
                        <Text style={styles.text2}> 51.118 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Área da superfície:
                        <Text style={styles.text2}> 8,083 × 10^9 km².</Text>
                    </Text>

                    <Text style={styles.text1}>Massa:
                        <Text style={styles.text2}> 8,681 × 10^25 kg.</Text>
                    </Text>

                    <Text style={styles.text1}>Distância do Sol:
                        <Text style={styles.text2}> 2.870.990.000 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Satélites naturais:
                        <Text style={styles.text2}> 27.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de rotação:
                        <Text style={styles.text2}> 17 horas e 14 minutos.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de translação:
                        <Text style={styles.text2}> 84 anos.</Text>
                    </Text>

                    <Text style={styles.text1}>Temperatura média:
                        <Text style={styles.text2}> -197º C.</Text>
                    </Text>

                    <Text style={styles.text1}>Composição atmosférica:
                        <Text style={styles.text2}> a atmosfera de Urano é composta por 83% de hidrogénio, 15% de hélio, 2% de metano e pequenas porções de acetileno e outros hidrocarbonetos. O metano na alta atmosfera absorve a luz vermelha, dando a Urano a sua cor azul-esverdeada.</Text>
                    </Text>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}