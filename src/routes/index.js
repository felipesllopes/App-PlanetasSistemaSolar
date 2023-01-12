import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home/index";
import Jupiter from "../pages/Jupiter/index"
import Marte from "../pages/Marte/index";
import Mercurio from "../pages/Mercurio/index";
import Netuno from "../pages/Netuno/index";
import Saturno from "../pages/Saturno/index";
import Terra from "../pages/Terra/index";
import Urano from "../pages/Urano/index";
import Venus from "../pages/Venus/index";

export default function Routes() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Home" component={Home}
                options={{
                    headerShown: false
                }}

            />

            <Stack.Screen
                name="Mercurio" component={Mercurio}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Stack.Screen
                name="Venus" component={Venus}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Stack.Screen
                name="Terra" component={Terra}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Stack.Screen
                name="Marte" component={Marte}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Stack.Screen
                name="Jupiter" component={Jupiter}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Stack.Screen
                name="Saturno" component={Saturno}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Stack.Screen
                name="Urano" component={Urano}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

            <Stack.Screen
                name="Netuno" component={Netuno}
                options={{
                    title: 'Voltar',
                    headerStyle: {
                        backgroundColor: '#1C1C1C'
                    },
                    headerTintColor: 'white',
                }}
            />

        </Stack.Navigator>
    )
}