

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
export default class SwipeActions extends Component {
	render() {
		return (
			<View style={{ flex: 1,
   			 flexDirection: 'row',
   			 justifyContent: 'flex-end',}}>
				<View style={{height:80,width:300,backgroundColor:BUBBLE_GREY}}/>
				<TouchableOpacity onPress={this._test}>
					<View style={{height:80,width:100,backgroundColor:RED,...center}}>
						<Text style={{color:'white',fontSize:16}}>Delete</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
