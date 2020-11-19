import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Card, Button, Title, Paragraph } from 'react-native-paper'
import {Actions} from 'react-native-router-flux';

class SelectMerchant extends Component {
    state = {
        data : [], user_phonenumber: ''
    }

    componentDidMount(){
        this.merchantlist();
        this.setState({user_phonenumber : this.props.user_phonenumbers})
    }

    merchantlist = async() => {
        fetch("http://192.168.100.136:3000/merchant")
        .then(response => response.json())
        .then(res => {
            this.setState({data: res})
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <View style={styles.container}>
                <Card.Title title="Merchant List"></Card.Title>
                <FlatList data={this.state.data}
                    style={{margin:10}}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={({item}) =>
                        <View>  
                            <Card>
                                <Card.Cover source= {{uri: 'https://picsum.photos/700'}}/>
                                <Card.Content>
                                    <Title>{`${item.merchant_name}`}</Title>
                                    <Paragraph>{`${item.merchant_phonenumber}`}</Paragraph>
                                </Card.Content>
                                <Card.Actions>
                                    <Button onPress={()=>{Actions.replace('pay', {
                                        merchant_id : `${item._id}`, 
                                        merchant_name: `${item.merchant_name}`, 
                                        user_phonenumber : this.state.user_phonenumber, 
                                        token : this.props.token,
                                        user_balance : this.props.user_balance
                                        })}}>Select Shop</Button>
                                </Card.Actions>
                            </Card>
                        </View>
                    }
                />
                <View>
                    <Text>This is footer</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default SelectMerchant