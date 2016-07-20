

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  DatePickerIOS,
  ScrollView
} from 'react-native';
import MainInput from '../input/mainInput'
import ChatNavBar from '../navbar/chatNavBar'
export default class Tube extends Component {
	render() {
		return (
			<View style={{flex:1,zIndex:100}}>
				<ChatNavBar back={this.props.back}/>
				<ScrollView>
				
		
				</ScrollView>
				<MainInput/>
			</View>
		);
	}
}
