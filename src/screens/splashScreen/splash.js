import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Splash extends Component {
  render() {
    return (
        <LinearGradient style={styles.container} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={['#ff4081','#ff7a99']}>
          <View>
            <Image
                style={{width: 220,height: 200}}
                source={require('../../assets/iCandyLogo.png')}
            />
          </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});