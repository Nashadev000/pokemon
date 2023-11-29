import { StyleSheet, } from "react-native";

// import PokemonLists from "./src/components/PokemonLists"
// import Header from "./src/components/Header"
// crear pantallas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./src/views/home/HomeScreen";
import PokemonRankingScreen from "./src/views/pokemon-ranking/PokemonRankingScreen";

export default function App() {
    
    const Stack = createNativeStackNavigator()

    return (
        
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                // screenOptions={{headerStyle:{
                //     backgroundColor:'violet'
                // }}}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                >
                    {/* {() => <HomeScreen />} */}
                </Stack.Screen>

                <Stack.Screen
                    name="PokemonRanking"
                    component={PokemonRankingScreen}
                    // options={{title: 'Pokemon Details'}}
                    options={{ headerShown: false }}
                >
                    {/* {() => <PokemonRankingScreen />} */}
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

