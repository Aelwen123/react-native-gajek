// import React, {Component, useState} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, TextInput, ImageBackground} from 'react-native'
// import Logo from '../assets/bubblelogin.png';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Actions} from 'react-native-router-flux';
// import CustomButtonBorder from '../components/Custombuttonborder';

// let merchant_balance = 0
// let user_balance = 0


// class Pay extends Component{
//     state = {
//         merchant_id: '', merchant_name: '', user_phonenumber: '', amount: ''
//     }
//     onChangeText = (key, val) => {
//         this.setState({ [key]: parseInt(val,10) })
//     }

//     componentDidMount(){
//         this.setState({user_phonenumber: this.props.phonenumber})
//         this.setState({merchant_id: this.props.merchant_id})
//         this.setState({merchant_name: this.props.merchant_name})
//         this.merchantBalance()
//         const [shouldShow, setShouldShow] = useState(true)
//     }

//     merchantBalance = async() => {
//         fetch("http://192.168.100.136:3000/merchant/balance", {
//             method: 'POST',
//             headers:{
//                 'Accept' : 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 phonenumber: this.props.phonenumber,
//                 token: this.props.token,
//                 merchant_id : this.props.merchant_id
//             })
//         })
//         .then(response => response.json())
//         .then(res => {
//             merchant_balance = res.merchant_balance
//             user_balance = this.props.balance
//         })
//     }

//     pay = async() =>{
//         user_balance -= this.state.amount
//         merchant_balance += this.state.amount

//         fetch("http://192.168.100.136:3000/payment/pay", {
//             method: 'POST',
//             headers:{
//                 'Accept' : 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 phonenumber: this.props.phonenumber,
//                 merchant_id : this.props.merchant_id,
//                 newBalance : user_balance,
//                 newMerchantBalance : merchant_balance
//             })
//         })
//         .then(response => response.json())
//         .then(res => {
//             console.log({
//                 response : res,
//                 newBalance : user_balance,
//                 newMerchantBalance : merchant_balance,
//                 token: this.props.token,
//                 phonenumber: this.props.phonenumber
//             })         
//         })        
//     }

//     render(){
//         return(
//             <View>
//                 <Image source={Logo} style={styles.image}></Image>
//                 <View style={styles.form} id="form">
//                     <View style={styles.input}>
//                         <Icon name='account-circle' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
//                         <TextInput editable={false} mode='outlined' placeholder="Security Pin">
//                             <Text style={{color: "black"}}>{this.state.user_phonenumber}</Text>
//                         </TextInput>
//                     </View>

//                     <View style={styles.input}>
//                         <Icon name='store' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
//                         <TextInput editable={false} keyboardType="numeric" mode='outlined' placeholder="Nomor tujuan">
//                             <Text style={{color: "black"}}>{this.state.merchant_name}</Text>
//                         </TextInput>
//                     </View>

//                     <View style={styles.input}>
//                         <Icon name='calculator' size={30} color="#4287f5" style={{alignItems:'center', justifyContent:'center', padding:12}}/>
//                         <TextInput style={{width:350}} keyboardType="numeric" mode='outlined' placeholder="Amount" onChangeText={val => this.onChangeText('amount', val)}>
//                             <Text style={{color: "black"}}>{this.state.amount}</Text>
//                         </TextInput>
//                     </View>

//                     <View style={{alignItems:'center', marginTop: 55}}>
//                         <CustomButtonBorder title='Pay' colors={['#90dae1', '#4287f5']} onPress={this.pay.bind(this)}/>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     form:{
//         position:'absolute',
//         top:300,
//         flex:1
//     },

//     input:{
//         flex: 1,
//         flexDirection: 'row',
//         width: 350,
//         height: 55,
//         backgroundColor: 'white',
//         margin: 10,
//         color: '#90dae1',
//         borderRadius: 14,
//         fontSize: 18,
//         fontWeight: '500',
//         shadowColor:'black',
//         shadowOffset:{width: 0, height: 2},
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//     },

//     image:{
//         position:'absolute',
//         top:-50,
//         left:-45
//     }
// })

// export default Pay