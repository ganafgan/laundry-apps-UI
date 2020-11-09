import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IcAkunActive, IcAkunInactive, IcHomeActive, IcHomeInactive, IcPesananActive, IcPesananInactive } from '../../assets'
import { WARNA_DISABLE, WARNA_UTAMA } from '../../utils/constant'

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
    const Icon = () => {
        if(label === 'Home') return isFocused ? <IcHomeActive/> : <IcHomeInactive/>

        if(label === 'Pesanan') return isFocused ? <IcPesananActive/> : <IcPesananInactive/>

        if(label === 'Akun') return isFocused ? <IcAkunActive/> : <IcAkunInactive/>

        return <IcHomeActive/>

    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        
          > 
            <Icon />
            <Text style={styles.text(isFocused)}>
              {label}
            </Text>
          </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 12,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop: 8
    })
})
