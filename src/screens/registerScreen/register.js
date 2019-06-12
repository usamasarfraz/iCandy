import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { Item, Input } from 'native-base';
import { store } from '../../store/store';
import registerAction from '../../store/actions/registerAction/registerAction';

export default class Register extends Component {
    state = {
        fName: '',
        lName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    }
    handleInput = (type,value) => {
        this.setState({
            [type]: value
        });
    }
    handleSignup = () => {
        const { fName, lName, email, phone, password, confirmPassword } = this.state;
        if(fName && lName && email && phone && password && confirmPassword){
            store.dispatch(registerAction(this.state,this.props.navigation));
        }
        else{
            alert('Empty Fields Are Not Allowed.');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        style={{width: 140,height: 130}}
                        source={require('../../assets/iCandyLogo.png')}
                    />
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Input onChangeText={value => {this.handleInput('fName',value)}} value={this.state.fName} style={styles.input} placeholderTextColor="white" placeholder="First Name" />
                    </Item>
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Input onChangeText={value => {this.handleInput('lName',value)}} value={this.state.lName} style={styles.input} placeholderTextColor="white" placeholder="Last Name" />
                    </Item>
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Input onChangeText={value => {this.handleInput('email',value)}} value={this.state.email} style={styles.input} placeholderTextColor="white" placeholder="Email" />
                    </Item>
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Input onChangeText={value => {this.handleInput('phone',value)}} value={this.state.phone} style={styles.input} keyboardType='number-pad' placeholderTextColor="white" placeholder="Phone No" />
                    </Item>
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Input onChangeText={value => {this.handleInput('password',value)}} value={this.state.password} style={styles.input} placeholderTextColor="white" secureTextEntry={true} placeholder="Password" />
                    </Item>
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Input onChangeText={value => {this.handleInput('confirmPassword',value)}} value={this.state.confirmPassword} style={styles.input} placeholderTextColor="white" secureTextEntry={true} placeholder="Confirm Password" />
                    </Item>
                </View>
                <TouchableHighlight onPress={this.handleSignup} style={styles.loginButtonView}>
                    <Text style={styles.loginText}>
                        LOGIN
                    </Text>
                </TouchableHighlight>
                <View style={styles.lastTextView}>
                    <Text onPress={() => this.props.navigation.navigate('LoginScreen')} style={styles.lastText}>
                        Already Have An Acount? LOGIN
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ADCDC',
  },
  imageView: {
    marginBottom: 10
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  inputItem: {
    paddingLeft: 10,
    height: 45,
    width: 310,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    borderRadius: 7,
    borderColor: 'transparent',
    backgroundColor: 'rgb(71, 205, 206)',
    color: 'white'
  },
  input: {
    color: 'white'
  },
  loginButtonView: {
    height: 45,
    width: 310,
    backgroundColor: '#FF6766',
    borderRadius: 7,
    marginTop: 15,
    padding: 10,
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  lastTextView: {
    marginTop: 10
  },
  lastText: {
    fontSize: 13,
    color: 'white'
  }
});