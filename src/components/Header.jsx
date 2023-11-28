import { StyleSheet, Text, View, Image } from 'react-native'

const Header = () => {

    const userDate = {
        name: 'Nasha',
        phone: 963852741
    }

    return (
        <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>Pokemon!</Text>
            <View style={{}}>
                <Text style={styles.titleUSer} >Bienvenido {userDate.name} al emocionante mundo de Pokémon</Text>
            </View>
            <View>
                <Image
                    source={{ uri: 'https://i.ebayimg.com/images/g/YPwAAOSwKpBfeTzQ/s-l1600.jpg' }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title: {
        padding: 5,
        fontSize: 45,
        color: '#F8FFFE',
        fontWeight: '900',
        alignSelf: 'center',
    },
    titleUSer: {
        fontSize: 25,
        color: '#F8FFFE',
        fontWeight: '800',
        textAlign: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 15,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})