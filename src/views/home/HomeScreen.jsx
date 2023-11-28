import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'

import Header from '../../components/Header'
import PokemonLists from '../../components/PokemonLists'
import PokemonDetailsScreen from '../pokemon-details/PokemonDetailsScreen'

const HomeScreen = () => {
    return (
        <View style={styles.body}>
        <ScrollView style={styles.container}>
            <Header />
            <PokemonLists />
        </ScrollView>
            <PokemonDetailsScreen/>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#282940',
        paddingTop: Constants.statusBarHeight,
        padding: 10
    }
})