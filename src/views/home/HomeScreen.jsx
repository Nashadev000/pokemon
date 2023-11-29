import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native'
import Constants from 'expo-constants'

import Header from '../../components/Header'
import PokemonLists from '../../components/PokemonLists'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <ScrollView style={styles.container}>
                <Header />
                <PokemonLists />
                <TouchableOpacity
                    style={styles.styleButton}
                    title="ir a detalles"
                    onPress={() => navigation.navigate('PokemonDetails')}
                >
                    <Text style={styles.styleText}>
                        Go to Details
                    </Text>
                </TouchableOpacity>

            </ScrollView>
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
    },
    styleButton: {
        alignItems: 'center',
        backgroundColor: '#BACDD9',
        borderRadius: 10,
        marginHorizontal: 90,
        padding: 10,

    },
    styleText: {
        fontWeight: '600',
        fontSize: 15,
    }
})