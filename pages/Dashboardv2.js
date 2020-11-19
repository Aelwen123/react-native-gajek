// import React, {Component} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
// import ProfilePicture from '../assets/favicon.png'
// import {ScrollView} from 'react-native-gesture-handler';
// import { withSafeAreaInsets } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// class Dashboardv2 extends Component{
//     render(){
//         return(
//             <ScrollView>
//                 <View style={styles.container}>
//                     <View style={styles.top}>
//                         <View style={styles.profilepicture}>
//                             <Image source={ProfilePicture}></Image>
//                         </View>
//                         <View style={styles.profilecontainer}>
//                             <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{this.props.user_name}</Text>
//                             <Text style={{color:'white'}}>{this.props.email}</Text>
//                         </View>
//                     </View>
//                         <View style={styles.main}>
//                             <View style={styles.mycard}>
//                                 <Text style={{fontWeight:'bold', fontSize:15}}>My Card</Text>
//                                 <TouchableOpacity style={{paddingLeft:150}}>
//                                     <Text style={{color:'#4287f5', fontWeight:'bold', fontSize:15}}>+Add</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             <View style={styles.card}>
                                
//                             </View>
//                             <View style={styles.howtousebalance}>
//                                 <Text style={{fontWeight:'bold', fontSize:15}}>How to use balance</Text>
//                             </View>
//                             <View style={styles.card}>
                                
//                             </View>
//                         </View>
//                 </View>
//             </ScrollView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'white'
//     },

//     top:{
//         flex:0,
//         flexDirection:'row',
//         width:'100%',
//         height:250,
//         backgroundColor:'#4287f5',
//         alignItems:'center',
//         position:'absolute',
//         top:0,
//         borderRadius:30,
//         paddingLeft:30,
//     },

//     profilepicture:{
//         borderRadius:50,
//         backgroundColor:'white',
//         width:80,
//         height:80,
//         alignItems:'center',
//         justifyContent:'center'
//     },

//     profilecontainer:{
//         paddingLeft:20
//     },

//     main:{
//         width:'100%',
//         top:250
//     },

//     mycard:{
//         flex:0,
//         flexDirection:'row',
//         justifyContent:'space-evenly',
//         height:60,
//         paddingTop:15,
//         paddingBottom:20
//     },

//     card:{
//         flex:0,
//         flexShrink:0,
//         width:320,
//         height:190,
//         backgroundColor:'#90dae1',
//         borderRadius:30,
//         left:33,
//         justifyContent:'center',
//         alignItems:'center',
//         borderColor:'#90dae1',
//         borderStyle:'solid',
//         borderWidth:1,
//     },

//     howtousebalance:{
//         flex:0,
//         top:30,
//         justifyContent:'center',
//         height:30,
//         paddingBottom:57,
//         left:33
//     }


// })

// export default Dashboardv2;