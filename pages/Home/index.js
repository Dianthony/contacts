import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native"

export default function Home(){
    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.headerTitle}> Meus Contatos </Text>
            </View>
            <View style={style.body}>
                <View style={style.bodySearchBar}>
                    <TextInput style={style.searchBar}></TextInput>
                    <TouchableOpacity style={style.searchBarButton}><Text style={style.searchBarText}>Buscar</Text></TouchableOpacity>
                </View>

                <ScrollView>
                    <View style={style.bodyScroll}>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                        <View style={style.boxBody}>
                            <Image source={require('../../src/img/profile.png')} style={style.imgBox} />
                            <TouchableOpacity><Text style={style.boxText}>Contato 1</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121212',
        gap:10
    },
    header:{
        marginTop:20,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    headerTitle:{
        fontSize:20,
        fontWeight: 'bold',
        color: '#fff'
    },
    body:{
        gap:15,
        marginLeft:10,
        marginRight:10,
        paddingBottom: 100
    },
    bodySearchBar:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBar:{
        paddingLeft: 15,
        width: '85%',
        borderWidth: 0.5,
        fontSize:18
    },
    searchBarButton:{
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBarText:{
        color:'#fff',
        fontSize:15
    },
    bodyScroll:{
        gap:15,
        marginBottom:100,
    },
    boxBody:{
        width: '100%',
        borderWidth: 1,
        padding:10,
        alignItems: 'center',
        flexDirection: 'row',
        gap:10.
    },
    boxText:{
        fontSize:20,
        fontWeight: 'bold',
        color: '#fff'
    },
    imgBox:{
        height:50,
        width:50
    }
})