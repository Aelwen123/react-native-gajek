import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const CustomButtonBorder = props => {
    return(
        <LinearGradient colors={props.colors} style={{borderRadius:10}}>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 1,
        borderRadius: 10,
        width:200,
        height:40,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    text:{
        fontWeight:'bold',
        fontFamily:'Roboto'
    }
})

export default CustomButtonBorder;