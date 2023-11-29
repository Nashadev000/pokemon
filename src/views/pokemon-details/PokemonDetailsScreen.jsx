
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const PokemonDetailsScreen = ({ navigation }) => {

    return (
        <View>
            <TouchableOpacity
            title="regresar"
            onPress={()=>navigation.navigate('Home')}>
                <Text>regresar a home</Text>
            </TouchableOpacity>
        </View>

    )
}

export default PokemonDetailsScreen

const styles = StyleSheet.create({

})