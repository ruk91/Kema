import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,ScrollView,
  ImageBackground,Image,
  View,StatusBar,TouchableOpacity,TextInput,Button, NetInfo,Alert,KeyboardAvoidingView
} from 'react-native';
import { scale, moderateScale, verticalScale} from '../../Scaling';

import VxTextBox from '../Components/VxTextBox';
import VxButton from '../Components/VxButton';
import VxTextBottom from '../Components/VxTextBottom';

export default class Otp extends Component<{}> {
      static navigationOptions = {
        header: null,
        };

        constructor(props) {
          super(props);
          this.state = {
            isConnected: null,
            typedEmail: '',
            typedPassword: ''
            // loginFromServer: []
  
          };

        }
    
      helloWorld() {
        console.log('You tapped the click2!')
      }

  render() {
   
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>   
          <StatusBar hidden={true} />         
            <View style={styles.keyContainer}>
              <KeyboardAvoidingView behavior="position"> 
          
                <View style={styles.login_logo_container}>
                  <Image source={require('../assets/logo.png')} resizeMode="stretch" style={styles.login_logo} />
                 
                </View>

                <View style={styles.bodyContainer}>

                  <View style={styles.container_input}>
                    <VxTextBox placeholder='One Time Password' onChangeText={(email) => this.email(email)}></VxTextBox>
                    <Text style={{color: '#9c9c9c'}}>{this.state.typedEmail}</Text>

                    <VxButton BtnText='Submit' PageNavigation='Home' navigation={this.props.navigation} method={this.helloWorld}></VxButton>
                  
                  </View>
                </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    flexGrow: 1
  },
  login_logo_container:{
    flex: .2,
    justifyContent:'flex-start'
  },
  login_logo:{
    marginTop: scale(10),
    width: moderateScale(240,0.75),
    height:moderateScale(100,0.50),
    marginLeft:scale(10)
  },
  keyContainer: {
     justifyContent: 'center',
  },
  container_input:{
    alignItems: 'center',
    marginTop: scale(120),
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  bodyContainer:{
    flex: 0.8,
    marginTop: scale(50),
    justifyContent: 'center',
    alignItems: 'center'
  }
});
