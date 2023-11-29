import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'

const width = Dimensions.get('screen').width

const PokemonItem = ({ pokemon, index }) => {

  const [powerState, setPowerState] = useState(0)

  const onPress = () => setPowerState((prev) => prev + 1)

  return (
    <View style={styles.box}>
      <Text style={styles.pokemonName} >{pokemon.name}</Text>
      <View style={styles.countContainer}>
        <Text style={styles.power}>powerState: {powerState}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Image
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png` }}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        >
        </Image>
      </TouchableOpacity>
    </View>

  )
}

export default PokemonItem

const styles = StyleSheet.create({
  box: {
    padding: 15,
    width: width * 0.42,
    backgroundColor: '#464873',
    height: width * 0.42,
    borderRadius: 20,
  },
  button: {
    alignItems: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  pokemonName: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500'
  },
  power: {
    color: 'white'
  }
})