import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomCard = props => {
    return(
        <View style={this.props.style}>
            <TouchableOpacity style={this.props.style}>
                <View style={this.props.style}>
                    <Image source={this.props.image} style={this.props.style}/>
                </View>
                <View style={this.props.style}>
                    <Text style={this.props.style}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default CustomCard;
