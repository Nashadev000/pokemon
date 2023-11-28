import { StyleSheet, View, Text } from 'react-native'
import PokemonItem from './PokemonItem'
import { useEffect, useState } from 'react'

const PokemonLists = () => {

  const [dataPokemones, setDataPokemones] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        const data = await response.json()
        setLoading(false)
        setDataPokemones(data.results)
      } catch (err) {
        console.error('Error al obtener datos:', err);
      }
    }

    fetchData()

  }, [])

  return (
    <View style={styles.container}>
      {loading &&
        <Text style={{ color: 'white' }}>
          Cargando pokemones...
        </Text>
      }

      {dataPokemones.map((pokemon, index) =>
        <PokemonItem
          key={index}
          index={index + 1}
          pokemon={pokemon}
        />
      )}

    </View>
  )
}

export default PokemonLists

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 20,
    marginVertical: 50
  }
})
