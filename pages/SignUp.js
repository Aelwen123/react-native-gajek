import React , { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import Logo from '../assets/bubblesignup.png';
import CustomButtonGradient from '../components/Custombuttongradient';
import CustomButtonBorder from '../components/Custombuttonborder';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class SignUp extends Component{
    state = {
        email: '', securitypin: '', phonenumber: '', name: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    signUp = async() =>{
        const { email, securitypin, phonenumber, name } = this.state
        fetch('http://192.168.100.136:3000/customer/signup', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                phonenumber : phonenumber,
                email : email,
                securitypin : securitypin
            })
        })
        .then(response => response.json())
        .then(res => {
            Actions.replace('signin')
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={Logo} style={styles.image}></Image>
                {/* <Text>{this.props.token}</Text> */}
                <View style={styles.form}>

                    <View style={styles.input}>
                        <Icon name='account-plus' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                            <TextInput style={styles.textinput} mode='outlined' placeholder="Name" onChangeText={val => this.onChangeText('name', val)}>
                                <Text>{this.state.name}</Text>
                            </TextInput>
                    </View>

                    <View style={styles.input}>
                        <Icon name='phone' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                            <TextInput style={styles.textinput} mode='outlined' placeholder="Phonenumber" onChangeText={val => this.onChangeText('phonenumber', val)}>
                                <Text>{this.state.phonenumber}</Text>
                            </TextInput>
                    </View>

                    <View style={styles.input}>
                        <Icon name='email' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                            <TextInput style={styles.textinput} mode='outlined' placeholder="Email" onChangeText={val => this.onChangeText('email', val)}>
                                <Text>{this.state.email}</Text>
                            </TextInput>
                    </View>

                    <View style={styles.input}>
                        <Icon name='onepassword' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                        <TextInput keyboardType='numeric' style={styles.textinput} mode='outlined' placeholder="Email" secureTextEntry={true} onChangeText={val => this.onChangeText('securitypin', val)}>
                            <Text>{this.state.securitypin}</Text>
                        </TextInput>
                    </View>

                    <View style={{alignItems:'center', marginTop: 10}}>
                        <CustomButtonGradient title='Sign Up' colors={['#90dae1', '#4287f5']} onPress={this.signUp.bind(this)}/>
                    </View>

                    <View style={{alignItems:'center'}}>
                        <Text style={{textAlign:'center', paddingTop:20}}>Already have an account?</Text>
                        <CustomButtonBorder title='Login' colors={['#90dae1', '#4287f5']} onPress={()=>{Actions.replace('signin')}}/>
                    </View>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },

    form:{
        flex:1,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:250
    },

    image:{
        position:'absolute',
        top:-50,
        left:-45
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        width: 350,
        height: 55,
        backgroundColor: 'white',
        margin: 10,
        color: '#90dae1',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        shadowColor:'black',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },

      textinput:{
        flex: 1,
        paddingLeft: 10,
        backgroundColor: 'white',
        color: '#424242',
        alignItems:'center',
        justifyContent:'center'
      }
})

export default SignUp;