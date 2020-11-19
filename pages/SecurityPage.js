import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'
import Logo from '../assets/bubblelogin.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import CustomButtonBorder from '../components/Custombuttonborder';

let merchant_balance = 0
let user_balance = 0

class SecurityPage extends Component{
    state = {
        securitypin: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    componentDidMount(){
        user_balance = this.props.user_balance
        merchant_balance = this.props.merchant_balance
    }

    pay = async() =>{
        user_balance -= this.props.amount
        merchant_balance += this.props.amount

        fetch("http://192.168.100.136:3000/payment/pay", {
            method: 'POST',
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phonenumber: this.props.user_phonenumber,
                merchant_id : this.props.merchant_id,
                token : this.props.token,
                newBalance : user_balance,
                newMerchantBalance : merchant_balance,
                securitypin : this.state.securitypin
            })
        })
        .then(response => response.json())
        .then(res => {
            if(res.status === 200){
                Actions.jump('dashboard',{
                    user_phonenumber: this.props.user_phonenumber,
                    token : this.props.token
                });
            }else{
                return (
                    console.log({
                        message: "Payment Failed!"
                    }),
                    user_balance = this.props.user_balance,
                    merchant_balance = this.props.merchant_balance
                )}
            
        }).catch(err=>{
            res.status(401).json({
                err : err
            })
        })        
    }

    render(){
        return(
            <View>
                <Image source={Logo} style={styles.image}></Image>
                <View style={styles.form} id="form">
                    <View style={styles.input}>
                        <Icon name='account-circle' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
                        <TextInput keyboardType="number-pad" mode='outlined' placeholder="Security Pin" onChangeText={val => this.onChangeText('securitypin', val)}>
                            <Text style={{color: "black"}}>{this.state.securitypin}</Text>
                        </TextInput>
                    </View>

                    <View style={{alignItems:'center', marginTop: 55}}>
                        <CustomButtonBorder title='Pay' colors={['#90dae1', '#4287f5']} onPress={this.pay.bind(this)}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    form:{
        position:'absolute',
        top:300,
        flex:1
    },

    input:{
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

    image:{
        position:'absolute',
        top:-50,
        left:-45
    }
})

export default SecurityPage