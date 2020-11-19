// import React, {Component} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SafeAreaView, ImageBackground} from 'react-native'
// import ProfilePicture from '../assets/aelwen1.jpg'
// import {ScrollView, FlatList} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Avatar } from 'react-native-paper';
// import MyImage from '../assets/kartu1.png';
// import {Actions} from 'react-native-router-flux';
// import CustomButtonBorder from '../components/Custombuttonborder';

// const colors = {
//     theme: "#4287f5",
//     white:'white',
//     grey:'#a4a4a4'
// }

// // var balance;
// class Dashboard extends Component{
//     state = {
//         balance : '',
//         phonenumber: ''

//     }

//     componentDidMount(){
//         fetch("http://192.168.100.136:3000/customer/balance", {
//             method : 'POST',
//             headers: {
//                 'Accept' : 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 phonenumber : this.props.phonenumber,
//                 token: this.props.token
//             })
//         })
//         .then(response => response.json())
//         .then(res => {
//             this.setState({balance: res.balance})
//             this.setState({phonenumber: this.props.phonenumber})
//             console.log({
//                 token: this.props.token
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     }
//     render(){
//         return(
//             <ScrollView style={styles.container}>
//                 <StatusBar barStyle="light-content" backgroundColor={colors.theme}/>
//                 <View style={styles.profile}>
//                     <View style={styles.top}>
//                         <View style={{flexDirection:'row'}}>
//                             <View style={styles.profilepicture}>
//                                 <Avatar.Image source={ProfilePicture} size={46} style={{backgroundColor:'white'}}/>
//                             </View>
//                             <View style={styles.profilecontainer}>
//                                 <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{this.props.user_name}</Text>
//                                 <Text style={{color:'white'}}>{this.props.email}</Text>
//                             </View>
//                         </View>
//                         <TouchableOpacity>
//                             <Icon name="cash-usd" size={40} style={{color:colors.white}}/>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={styles.main}>
//                     <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>My cards</Text>
//                     <View style={{paddingBottom:20}}>
//                         <ScrollView
//                             horizontal={true}
//                             scrollEnabled={true}
//                             showsHorizontalScrollIndicator={true}
//                             scrollEventThrottle={16}
//                             snapToAlignment='center'
//                             style={{overflow:'visible', paddingTop:10, height:250}}
//                         >
//                             <TouchableOpacity activeOpacity={0.95} style={{backgroundColor:'white', borderRadius:20}}>
//                                 <View style={styles.card}>
//                                     <View style={styles.cardImage}>
//                                         <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                         <View style={{position:'absolute', paddingTop:10, paddingLeft: 10}}>
//                                             <Text style={{color:'white', fontWeight:'bold', fontSize:30, textAlign: 'left', alignContent: 'center'}}>{this.props.phonenumber}</Text>
//                                             <Text style={{color:'yellow', fontWeight:'bold', fontSize:30, textAlign: 'left', alignContent: 'center'}}>{this.state.balance} IDR</Text>
//                                         </View>
//                                     </View>
//                                 </View>
//                             </TouchableOpacity>

//                             <View style={styles.card}>
//                                 <View style={styles.cardImage}>
//                                     <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                 </View>
//                             </View>
//                             <View style={styles.card}>
//                                 <View style={styles.cardImage}>
//                                     <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                 </View>
//                             </View>
//                             <View style={styles.card}>
//                                 <View style={styles.cardImage}>
//                                     <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                 </View>
//                             </View>                        
//                         </ScrollView>
//                     </View>
                    
//                     <CustomButtonBorder title='Pay' colors={['#4287f5','#90dae1']} onPress={()=>{Actions.replace('merchantlist', {phonenumbers : this.state.phonenumber, token : this.props.token, user_balance: this.state.balance})}}/>

//                     <Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>How to use balance</Text>
//                     <View>
//                         <ScrollView
//                             horizontal={true}
//                             scrollEnabled={true}
//                             showsHorizontalScrollIndicator={false}
//                             scrollEventThrottle={16}
//                             snapToAlignment='center'
//                             style={{overflow:'visible', paddingTop:10}}
//                         >
//                             <View style={styles.howtousecard}>
//                                 <View style={styles.imageContainer}>
//                                     <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                 </View>
//                                 <Text style={{fontSize:20}}>MUAHAHAk</Text>
//                             </View>
//                             <View style={styles.howtousecard}>
//                                 <View style={styles.imageContainer}>
//                                     <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                 </View>
//                                 <Text style={{fontSize:20}}>MUAHAHA</Text>
//                             </View>
//                             <View style={styles.howtousecard}>
//                                 <View style={styles.imageContainer}>
//                                     <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                 </View>
//                                 <Text style={{fontSize:20}}>MUAHAHA</Text>
//                             </View>
//                             <View style={styles.howtousecard}>
//                                 <View style={styles.imageContainer}>
//                                     <Image source={MyImage} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:20}}/>
//                                 </View>
//                                 <Text style={{fontSize:20}}>MUAHAHA</Text>
//                             </View>
//                         </ScrollView>
//                     </View>
//                 </View>
//             </ScrollView>
//         )
//     }
// }

// mycard = item => {
//     return(
//         <View style={{width:100, position:'absolute'}}>
//             <View>
//                 <Text style={{fontSize:100}}>HAHA</Text>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor: colors.white
//     },

//     profile:{
//         backgroundColor:colors.white
//     },

//     main:{
//         paddingLeft:16,
//         paddingRight:16,
//         paddingBottom:16,
//         paddingTop:20,
        
//     },

//     top:{
//         padding:16,
//         flexDirection:'row',
//         justifyContent:'space-between',
//         backgroundColor:colors.theme,
//         borderBottomEndRadius:20,
//         borderBottomStartRadius:20,
//         width:'100%',
//         height:150,
//         alignItems:'center'
//     },

//     profilepicture:{
//         borderRadius:30,
//         backgroundColor:'white',
//         width:50,
//         height:50,
//         alignItems:'center',
//         justifyContent:'center'
//     },

//     profilecontainer:{
//         paddingLeft:20
//     },

//     imageContainer:{
//         width:150, 
//         height:120, 
//         borderRadius:20,
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.23,
//         shadowRadius: 2.62,
//         elevation: 10, 
//         borderColor:'black', 
//         borderStyle:'solid'
//     },

//     cardImage:{
//         width:360, 
//         height:230, 
//         borderRadius:20
//     },

//     card:{
//         marginRight:20, 
//         alignItems:'center',
//         shadowColor: 'black',
//         borderColor:'black',
//         borderRadius:20,
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.23,
//         shadowRadius: 2.62,
//         elevation: 4, 
//         height:230, 
//         width:360,
//         paddingTop:2
//     },

//     howtousecard:{
//         marginRight:20, 
//         alignItems:'center', 
//         borderColor:'black', 
//         borderStyle:'solid', 
//         borderWidth:1, 
//         borderRadius:20
//     }
// })

// export default Dashboard;