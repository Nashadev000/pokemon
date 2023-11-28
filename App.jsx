import { StyleSheet, ScrollView, Text } from "react-native";
import Constants from 'expo-constants'


import PokemonLists from "./src/components/PokemonLists"
import Header from "./src/components/Header"
// crear pantallas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./src/views/home/HomeScreen";

export default function App() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                >
                    {() => <HomeScreen />}
                </Stack.Screen>
                <Stack.Screen
                    name="PokemonDetails"
                    options={{ headerShown: false }}
                >
                    {() => <PokemonDetailsScreen />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

        // <ScrollView style={styles.container}>
        //     <Header />
        //     <PokemonLists/>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
})

