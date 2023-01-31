import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home";
import Jupiter from "../pages/Jupiter";
import Marte from "../pages/Marte";
import Menu from "../pages/Menu";
import Mercurio from "../pages/Mercurio";
import Netuno from "../pages/Netuno";
import Saturno from "../pages/Saturno";
import Terra from "../pages/Terra";
import Urano from "../pages/Urano";
import Venus from "../pages/Venus";

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
                name="Menu" component={Menu}
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