import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PokemonDetailsScreen = () => {
    return (
        <View>
            <Text style={styles.deailsText}>PokemonDetailsScreen</Text>
        </View>
    )
}

export default PokemonDetailsScreen

const styles = StyleSheet.create({
    deailsText:{
        backgroundColor: 'red'
    }

})