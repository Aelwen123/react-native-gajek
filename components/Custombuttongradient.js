import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const CustomButtonGradient = props => {
    return(
        <LinearGradient 
            colors={props.colors} 
            start={{x:0.1, y:0}}
            end={{x:1, y:0}}
            style={styles.button}>
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
        paddingHorizontal:20,
        borderRadius:10,
        margin:20,
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center'
    },

    text:{
        fontWeight:'bold',
        fontFamily:'Roboto',
        color:'white'
    }
})

export default CustomButtonGradient;