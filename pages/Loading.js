import React from 'react';
import { View, Text, StyleSheet, Image, Animated, ActivityIndicator } from 'react-native';
import Logo from '../assets/logosplashscreen.png';
import {LinearGradient} from 'expo-linear-gradient';
import {Actions} from 'react-native-router-flux';

const switchtoAuth = () => {
    Actions.replace('auth')
}

class Loading extends React.Component {
    state = {
        LogoAnimate : new Animated.Value(0),
        LogoText : new Animated.Value(0),
        loadingSpinner: false
    };

    componentDidMount(){
        const {LogoAnimate, LogoText} = this.state;
        Animated.parallel([
            Animated.timing(LogoText, {
                toValue: 1,
                duration: 1000
            }),
            Animated.timing(LogoAnimate, {
                toValue:1,
                duration:1000
            })
        ]).start(() => {
            this.setState({
                loadingSpinner: true
            });
            setTimeout(switchtoAuth,1500);
        })
    }

    render(){
        return(
            <LinearGradient colors={['#90dae5', '#4287f5']} style={{ flex:1 }}>
                <View style={styles.container}>
                    <Animated.View style={{
                        opacity: this.state.LogoAnimate,
                        top: this.state.LogoAnimate.interpolate({
                            inputRange: [0,1],
                            outputRange:[80,0]
                        }),
                        width:'100%',
                        height:'100%',
                        justifyContent:'center',
                        alignItems:'center',
                        position:"absolute",
                        right:20
                    }}>
                        <Image source={Logo} />
                    </Animated.View>
                    {this.state.loadingSpinner ? (<ActivityIndicator style={{
                            position:'absolute',
                            left: 0,
                            right: 0,
                            top: 250,
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center'
                    }} size='large' color='white'/>) : null}
                </View>
            </LinearGradient>
        );
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    h5:{
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeight: 'normal'
    },

    logo:{
        width: 200,
        height:200
    },

});


export default Loading;