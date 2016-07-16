/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './components/app';
let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');
global.k=windowSize.width/320;
global.h=windowSize.height/568;
global.center={justifyContent:'center',alignItems:'center'};
global.APP_COLOR="#0398EA";
global.GREEN="#26A65B";
global.ORANGE="#F89406";
global.BORDER_COLOR="#E6E6E6";
global.RED="#F33030";
global.BACKGROUND_GREY="#FAFAFA";
global.TEXT_GREY="rgb(100,100,100)";
global.TRANSPARENT_GREY="rgb(220,220,220)";
global.BUBBLE_GREY='#ECEDF1';
class TypiInc extends Component {
  render() {
    return (
      <App/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TypiInc', () => TypiInc);
