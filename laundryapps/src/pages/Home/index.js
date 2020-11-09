import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header, Logo } from '../../assets/'
import { ButtonIcon, PesananAktif, Saldo } from '../../components'
import { WARNA_ABU } from '../../utils/constant'

const Home = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={Header} style={styles.header}>
                    <Image source={Logo} style={styles.logo}/>
                    <View style={styles.title}>
                        <Text style={styles.welcome}>Selamat Datang,</Text>
                        <Text style={styles.name} >Afgan Taufiq H</Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <View style={styles.layanan}>
                    <Text style={styles.label}>Layanan Kami</Text>
                    <View style={styles.iconLayanan}>
                        <ButtonIcon title='Kiloan' type='layanan'/>
                        <ButtonIcon title='Satuan' type='layanan'/>
                        <ButtonIcon title='VIP' type='layanan'/>
                        <ButtonIcon title='Karpet' type='layanan'/>
                        <ButtonIcon title='Setrika Saja' type='layanan'/>
                        <ButtonIcon title='Ekspress' type='layanan'/>
                    </View>
                </View>
                <View style={styles.pesananAktif}>
                    <Text style={styles.label}>Pesanan Aktif</Text>
                    <PesananAktif title='Pesanan No. 000011' status='Sudah Selesai' />
                    <PesananAktif title='Pesanan No. 000012' status='Sudah Selesai' />
                    <PesananAktif title='Pesanan No. 000013' status='Sudah Selesai' />
                    <PesananAktif title='Pesanan No. 000014' status='Masih Dicuci' />
                    <PesananAktif title='Pesanan No. 000015' status='Masih Dicuci' />
                    <PesananAktif title='Pesanan No. 000016' status='Masih Dicuci' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.3,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {
        width: windowWidth * 0.3,
        height: windowHeight* 0.06
    },
    title: {
        marginTop: windowHeight * 0.03
    },
    welcome: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Regular'
    },
    name: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold',
        color: 'black'
    },
    layanan: {
        paddingLeft: 30,
        paddingTop: 15
    },
    label: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Bold'
    },
    iconLayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap'
    },
    pesananAktif: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 30,
        backgroundColor: WARNA_ABU,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    }
})
