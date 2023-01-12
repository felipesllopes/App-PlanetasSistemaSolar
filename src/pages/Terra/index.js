import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import styles from "../Stylo/styles";

export default function Terra() {

    return (

        <ImageBackground
            style={styles.imgFundo}
            source={require('../../img/fundo2.jpg')}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>

                <View style={styles.box}>

                    <View style={styles.itens}>
                        <Text style={styles.tittle}> Terra </Text>
                        <Image style={styles.image} source={require('../../img/terra.png')} />
                    </View>

                    <Text style={styles.h1}>Dados Gerais</Text>

                    <Text style={styles.text1}>Diâmetro equatorial:
                        <Text style={styles.text2}> 12.756,2 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Área da superfície:
                        <Text style={styles.text2}> 510.100.000 km².</Text>
                    </Text>

                    <Text style={styles.text1}>Massa:
                        <Text style={styles.text2}> 5,972 × 10^24 kg.</Text>
                    </Text>

                    <Text style={styles.text1}>Distância do Sol:
                        <Text style={styles.text2}> 149.600.000 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Satélites naturais:
                        <Text style={styles.text2}> 1 (Lua).</Text>
                    </Text>

                    <Text style={styles.text1}>Período de rotação:
                        <Text style={styles.text2}> 23 horas e 56 minutos.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de translação:
                        <Text style={styles.text2}> 365 dias.</Text>
                    </Text>

                    <Text style={styles.text1}>Temperatura média:
                        <Text style={styles.text2}> 15º C.</Text>
                    </Text>

                    <Text style={styles.text1}>Composição atmosférica:
                        <Text style={styles.text2}> a atmosfera terrestre atual é constituída por diferentes gases, dos quais podemos destacar: o nitrogênio, com 78%; oxigênio, 21%; e outros gases (como dióxido de carbono, neônio, ozônio, hélio e vapor de água) 1%.</Text>
                    </Text>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}