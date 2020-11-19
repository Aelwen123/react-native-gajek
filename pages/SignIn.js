import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, AsyncStorage } from 'react-native';
import Logo from '../assets/bubblelogin.png';
import CustomButtonGradient from '../components/Custombuttongradient';
import CustomButtonBorder from '../components/Custombuttonborder';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import JWT from 'expo-jwt'

class SignIn extends Component{
    state = {
        phonenumber: '', securitypin: ''
      }
      onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    componentDidMount(){
        AsyncStorage.getItem('token', (err, result) => {
            if(result){
                try{
                    Actions.replace('dashboard', {
                        token: result,
                        user_phonenumber : JWT.decode(result, 'secret').userPhonenumber
                    })
                }
                catch{
                    console.log({
                        message : err
                    })
                }
            }
        })
    }

    signIn = async () => {
        const { phonenumber, securitypin } = this.state
        fetch('http://192.168.100.136:3000/customer/login', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phonenumber : phonenumber,
                securitypin : securitypin
            })
        })
        .then(response => response.json())
        .then(res => {
            if(res.status != 200){
                Actions.replace('auth')
            }
            else{
                AsyncStorage.setItem('token', res.token)
                AsyncStorage.setItem('phonenumber', res.userPhonenumber)
                AsyncStorage.getItem('token', (err, result) => {
                    Actions.replace('dashboard', {
                        token : result,
                        user_phonenumber : res.userPhonenumber
                    })
                })
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Image source={Logo} style={styles.image}></Image>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Icon name='phone' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                            <TextInput keyboardType='numeric' style={styles.textinput} mode='outlined' placeholder="Phonenumber" onChangeText={val => this.onChangeText('phonenumber', val)}>
                                <Text>{this.state.phonenumber}</Text>
                            </TextInput>
                    </View>

                    <View style={styles.input}>
                        <Icon name='onepassword' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                        <TextInput keyboardType='numeric' style={styles.textinput} mode='outlined' placeholder="Security pin" secureTextEntry={true} onChangeText={val => this.onChangeText('securitypin', val)}>
                            <Text>{this.state.securitypin}</Text>
                        </TextInput>
                    </View>

                    <View style={{alignItems:'center', marginTop: 55}}>
                        <CustomButtonGradient title='Login' colors={['#90dae1', '#4287f5']} onPress={this.signIn.bind(this)}/>
                    </View>

                    <View style={{alignItems:'center', marginTop: 25}}>
                        <Text style={{textAlign:'center', paddingTop:20}}>Don't have an account?</Text>
                        <CustomButtonBorder title='Sign Up' colors={['#90dae1', '#4287f5']} onPress={()=>{Actions.replace('signup')}}/>
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
        justifyContent:'center',
    },

    form:{
        position:'absolute',
        top:300,
        flex:1
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
        elevation: 5,
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

export default SignIn;