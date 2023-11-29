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
            </ScrollView>
                <TouchableOpacity
                    style={styles.styleButton}
                    onPress={() => navigation.navigate('PokemonRanking')}
                >
                    <Text style={styles.styleText}>
                        Go To Ranking
                    </Text>
                </TouchableOpacity>
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
        alignSelf:'center',
        backgroundColor: '#BACDD9',
        borderRadius: 10,
        marginTop:10,
        padding: 15

    },
    styleText: {
        fontWeight: '600',
        fontSize: 15,
    }
})