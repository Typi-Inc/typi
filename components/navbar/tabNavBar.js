

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
export default class TabNavBar extends Component {
	render() {
		return (
			<View style={{height:45, left:0,top:0,right:0,
				backgroundColor:'white',borderColor:'rgb(200,200,200)',
				borderBottomWidth:.5,flexDirection:'row'}}>
				<TextInput
					autoCorrect={false} 
					clearButtonMode={'while-editing'}
					ref={el => this.textInput = el}
					placeholder={'Search Typi'}
					placeholderTextColor={'rgb(160,160,160)'}
					style={{left:8,right:60,top:3,bottom:5,
						height:33, width:260*k,
						paddingLeft:10,fontSize:15,
						backgroundColor:'rgb(240,240,240)',
						borderColor: 'rgb(230,230,230)',
                		borderWidth: 1,
                		borderRadius: 3,
					}}
				/>




			</View>
		);
	}
}
