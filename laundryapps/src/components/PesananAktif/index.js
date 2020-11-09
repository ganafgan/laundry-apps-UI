import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcPesanan } from '../../assets'
import { WARNA_UTAMA, WARNA_WARNING } from '../../utils/constant'

const PesananAktif = ({title, status}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <IcPesanan />
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.status(status)}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PesananAktif

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 17,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: windowHeight * 0.03,
        alignItems: 'center'
    },
    text: {
        marginLeft: windowWidth*0.02
    },
    title: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-SemiBold'
    },
    status: (status) => ({
        fontSize: 14,
        fontFamily: 'TitilliumWeb-Light',
        color: status === 'Sudah Selesai' ? WARNA_UTAMA : WARNA_WARNING
    })
})
