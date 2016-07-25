

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import ChatList from '../chats/chatList'
import MainInput from '../input/mainInput'
export default class NewChat extends Component {
	state={contacts:[]}
	componentWillMount(){
	

	}
	render() {

	
		return (
		<View style={{flex:1,backgroundColor:'white'}}>
			<ChatList/>


			<MainInput/>
		</View>
		);
	}
}
