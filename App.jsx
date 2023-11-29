import { StyleSheet, } from "react-native";

// import PokemonLists from "./src/components/PokemonLists"
// import Header from "./src/components/Header"
// crear pantallas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./src/views/home/HomeScreen";
import PokemonDetailsScreen from "./src/views/pokemon-details/PokemonDetailsScreen";

export default function App() {
    
    const Stack = createNativeStackNavigator()

    return (
        
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                >
                    {/* {() => <HomeScreen />} */}
                </Stack.Screen>

                <Stack.Screen
                    name="PokemonDetails"
                    component={PokemonDetailsScreen}
                    options={{title: 'pokemon details'}}
                    // options={{ headerShown: false }}
                >
                    {/* {() => <PokemonDetailsScreen />} */}
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

