import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Logo from '../assets/logosignup.png';
import CustomButtonGradient from '../components/Custombuttongradient';
import CustomButtonBorder from '../components/Custombuttonborder';
import {Actions} from 'react-native-router-flux';

class Auth extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text1}>Your Life.</Text>
                    <Text style={styles.text2}>Your Experience</Text>
                </View>

                <Image source={Logo} style={styles.image}/>

                <View style={styles.buttonplacement}>
                    <CustomButtonGradient title='Login' colors={['#4287f5','#90dae1']} onPress={()=>{Actions.replace('signin')}}/>
                    <CustomButtonBorder title='Sign Up' colors={['#90dae1', '#4287f5']} onPress={()=>{Actions.replace('signup')}}/>
                    <TouchableOpacity style={styles.tos}>
                        <Text style={styles.text}>Terms of services</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'absolute',
        top:150
    },

    text1:{
        color: 'black',
        fontWeight:'bold',
        fontSize:22
    },

    text2:{
        color: '#4287f5',
        fontWeight:'bold',
        fontSize:22
    },
    
    image:{
        position:"absolute",
        top:275,
        bottom:0,
        left:100,
        right:0
    },

    buttonplacement:{
        position:"absolute",
        top:400,
        bottom:0,
        left:100,
        right:0,
        width:'50%',
        justifyContent:'center',
        alignItems:'center'
    },

    tos:{
        marginTop:20,
    },

    text:{
        color:'gray',
        fontSize:12
    }
})

export default Auth;