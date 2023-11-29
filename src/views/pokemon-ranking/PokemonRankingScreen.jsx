import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Constants from 'expo-constants'

const PokemonRankingScreen = ({ navigation }) => {
    const PokemonRanking = {
            agua:{
                pok1: 'Vaporeon',
                pok2: 'Blastoise',
                pok3: 'Gyarados',
            },
            Fuego:{
                pok4: 'Charizard',
                pok5: 'Arcanine',
                pok6: 'Ninetales'
            }
        }

    return (
        <View style={styles.containerDetails}>
            <TouchableOpacity
                style={styles.styleButtonDetails}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.styleTextButton}>Go Back Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PokemonRankingScreen

const styles = StyleSheet.create({
    containerDetails: {
        flex: 1,
        backgroundColor: '#282940',
        paddingTop: Constants.statusBarHeight,
        justifyContent:'flex-end'
    },
    styleButtonDetails: {
        backgroundColor: '#BACDD9',
        borderRadius: 10,
        marginTop: 10,
        padding: 15,
        alignSelf:'center',
    },
    styleTextButton: {
        fontWeight: '600',
        fontSize: 15,
        
    },
    styleText: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'center'
    },

})