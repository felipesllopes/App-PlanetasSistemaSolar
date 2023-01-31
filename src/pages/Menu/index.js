import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Menu() {

    const navigation = useNavigation();

    return (
        <ImageBackground
            style={styles.imgFundo}
            source={require('../../img/fundo3.jpg')}>
            <ScrollView style={styles.container}>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Mercurio")}>
                    <Text style={styles.nomePlaneta}>Mercúrio</Text>
                    <Image style={styles.imgPlaneta} source={require('../../img/mercurio.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Venus")}>
                    <Text style={styles.nomePlaneta}>Vênus</Text>
                    <Image style={styles.imgPlaneta} source={require('../../img/venus.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Terra")}>
                    <Text style={styles.nomePlaneta}>Terra</Text>
                    <Image style={styles.imgPlaneta} source={require('../../img/terra.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Marte")}>
                    <Text style={styles.nomePlaneta}>Marte</Text>
                    <Image style={styles.imgPlaneta} source={require('../../img/marte.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Jupiter")}>
                    <Text style={styles.nomePlaneta}>Júpiter</Text>
                    <Image style={styles.imgPlaneta} source={require('../../img/jupiter.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Saturno")}>
                    <Text style={styles.nomePlaneta}>Saturno</Text>
                    <Image style={{ height: 50, width: 72, }} source={require('../../img/saturno.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Urano")}>
                    <Text style={styles.nomePlaneta}>Urano</Text>
                    <Image style={styles.imgPlaneta} source={require('../../img/urano.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.icone}
                    onPress={() => navigation.navigate("Netuno")}>
                    <Text style={styles.nomePlaneta}>Netuno</Text>
                    <Image style={styles.imgPlaneta} source={require('../../img/netuno.png')} />
                </TouchableOpacity>

            </ScrollView>
        </ImageBackground>
    )
};