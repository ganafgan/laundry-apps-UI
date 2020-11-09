import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcAddSaldo, IcGetPoint, IcKiloan, IcSatuan, IcVip, IcKarpet, IcSetrika, IcEkspress } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({title, type}) => {
    const Icon = () => {
        if (title === 'Add Saldo') return <IcAddSaldo />

        if (title === 'Get Point') return <IcGetPoint />

        if (title === 'Kiloan') return <IcKiloan />

        if (title === 'Satuan') return <IcSatuan />

        if (title === 'VIP') return <IcVip />

        if (title === 'Karpet') return <IcKarpet />

        if (title === 'Setrika Saja') return <IcSetrika />

        if (title === 'Ekspress') return <IcEkspress />

        return <IcAddSaldo />
    }
    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.button(type)}>
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: type === 'layanan' ? 12 : 0,
        marginRight: type === 'layanan' ? 30 : 0
    }),
    button: (type) => ({
        backgroundColor: WARNA_SEKUNDER,
        padding: type === 'layanan' ? 12 : 7,
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: type === 'layanan' ? 14 : 10,
        fontFamily: type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
        textAlign: 'center'
    })
})
