import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { Item, Input, Icon } from 'native-base';
import { store } from '../../store/store';
import loginAction from '../../store/actions/loginAction/loginAction';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleInput = (type,value) => {
        this.setState({
            [type]: value
        });
    }
    handleLogin = () => {
        const { email, password } = this.state;
        if(email && password){
            store.dispatch(loginAction(this.state,this.props.navigation));
        }
        else{
            alert('Empty Fields Are Not Allowed.');
        }
    }
    handleFbLogin = () => {
        alert('login with facebook.');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        style={{width: 150,height: 140}}
                        source={require('../../assets/iCandyLogo.png')}
                    />
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Icon active name='mail' style={{ color: "white" }} />
                        <Input onChangeText={value => {this.handleInput('email',value)}} value={this.state.email} style={styles.input} placeholderTextColor="white" placeholder="Email" />
                    </Item>
                </View>
                <View style={styles.inputView}>
                    <Item style={styles.inputItem}>
                        <Icon active name='md-key' style={{ color: "white" }} />
                        <Input onChangeText={value => {this.handleInput('password',value)}} value={this.state.password} style={styles.input} placeholderTextColor="white" secureTextEntry={true} placeholder="Password" />
                    </Item>
                </View>
                <TouchableHighlight onPress={this.handleLogin} style={styles.loginButtonView}>
                    <Text style={styles.loginText}>
                        LOGIN
                    </Text>
                </TouchableHighlight>
                <View style={styles.divider}>
                    <View style={styles.hrLine} />
                        <Text style={styles.dividerText}>OR CONNECT WITH</Text>
                    <View style={styles.hrLine} />
                </View>
                <TouchableHighlight onPress={this.handleFbLogin} style={styles.fbButtonView}>
                    <View style={styles.fbMainView}>
                        <View style={styles.fbImageView}>
                            <Image
                                style={{width: 30,height: 20}}
                                source={require('../../assets/fb.png')}
                            />
                        </View>
                        <View style={styles.fbSigninTextView}>
                            <Text style={styles.fbText}>
                                Sign in with Facebook
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
                <View style={styles.lastTextView}>
                    <Text onPress={() => this.props.navigation.navigate('RegisterScreen')} style={styles.lastText}>
                        Don't you have an account? Sign Up!
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
    marginBottom: 20
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  inputItem: {
    height: 50,
    padding: 10,
    width: 310,
    marginTop: 20,
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
    height: 50,
    width: 310,
    backgroundColor: '#FF6766',
    borderRadius: 7,
    marginTop: 20,
    padding: 13,
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  hrLine: {
    width: 86,
    backgroundColor: 'white',
    height: 1,
  },
  dividerText: {
    color: 'white',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5
  },
  fbButtonView: {
    height: 40,
    width: 210,
    backgroundColor: '#0054A5',
    borderRadius: 7,
    padding: 10,
  },
  fbText: {
    color: 'white',
    fontSize: 14,
  },
  lastTextView: {
    marginTop: 10
  },
  lastText: {
    fontSize: 13,
    color: 'white'
  },
  fbMainView: {
    display: 'flex',
    flexDirection: 'row',
  },
  fbImageView: {
    flex: 0.7
  },
  fbSigninTextView: {
    flex: 3
  }
});