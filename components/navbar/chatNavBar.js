

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import navigationActions from '../actions/navigation'
import creationActions from '../actions/creation'
export default class ChatNavBar extends Component {
	static contextTypes={getNav:React.PropTypes.func,topNav:React.PropTypes.func}
	returnToChats=()=>{
		creationActions.showDatePicker$.next(false)
		creationActions.messageInput$.next({text:''})
		this.context.topNav().pop()

		// this.props.back&&this.props.back()
	}
	render() {
		return (
			<View style={{height:45, left:0,top:0,right:0,
				backgroundColor:'white',borderColor:'rgb(200,200,200)',
				borderBottomWidth:.5,flexDirection:'row'}}>
				<TouchableOpacity onPress={this.returnToChats}>
					<Text>Back</Text>
				</TouchableOpacity>



			</View>
		);
	}
}
