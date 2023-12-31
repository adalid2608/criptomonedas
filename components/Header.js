import React from 'react'
import {
    StyleSheet,
    Text,
    Platform,
    SafeAreaViewComponent
} from 'react-native';

const Header= () => (
    <Text style={styles.encabezado}>Criptomonedas</Text>
)

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: "Lato-Black",
        backgroundColor:'#5E49E2',
        color: '#FFF',
        paddingBottom: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        marginBottom: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
})

export default Header