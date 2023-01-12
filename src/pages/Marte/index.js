import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import styles from "../Stylo/styles";

export default function Marte() {

    return (

        <ImageBackground
            style={styles.imgFundo}
            source={require('../../img/fundo2.jpg')}>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>

                <View style={styles.box}>

                    <View style={styles.itens}>
                        <Text style={styles.tittle}> Marte </Text>
                        <Image style={styles.image} source={require('../../img/marte.png')} />
                    </View>

                    <Text style={styles.h1}>Dados Gerais</Text>

                    <Text style={styles.text1}>Diâmetro equatorial:
                        <Text style={styles.text2}> 6.794,4 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Área da superfície:
                        <Text style={styles.text2}> 144.800.000 km².</Text>
                    </Text>

                    <Text style={styles.text1}>Massa:
                        <Text style={styles.text2}> 6,39 × 10^23 kg.</Text>
                    </Text>

                    <Text style={styles.text1}>Distância do Sol:
                        <Text style={styles.text2}> 227.940.000 km.</Text>
                    </Text>

                    <Text style={styles.text1}>Satélites naturais:
                        <Text style={styles.text2}> 2 (Fobos e Deimos).</Text>
                    </Text>

                    <Text style={styles.text1}>Período de rotação:
                        <Text style={styles.text2}> 24 horas e 37 minutos.</Text>
                    </Text>

                    <Text style={styles.text1}>Período de translação:
                        <Text style={styles.text2}> 687 dias.</Text>
                    </Text>

                    <Text style={styles.text1}>Temperatura média:
                        <Text style={styles.text2}> -60º C.</Text>
                    </Text>

                    <Text style={styles.text1}>Composição atmosférica:
                        <Text style={styles.text2}> o principal componente da atmosfera de Marte é o dióxido de carbono (CO2). Durante o inverno marciano os polos entram em um período de escuridão contínua, o que resfria a superfície de tal forma que 25% do CO2 atmosférico condensa em dióxido de carbono sólido (gelo seco) formando uma capa de gelo nos polos.</Text>
                    </Text>

                </View>
            </ScrollView>
        </ImageBackground>
    )
}