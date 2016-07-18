

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  LayoutAnimation
} from 'react-native';
import {openAnimation} from '../animations'
import navigationActions from '../actions/navigation'
export default class TabNavBar extends Component {
	_onFocus=()=>{
		navigationActions.toggleSearchScreen$.next(true)
	}
	_onBlur=()=>{
		// navigationActions.toggleSearchScreen$.next(false)

	}
	render() {
		return (
			<View style={{height:45, left:0,top:0,right:0,
				backgroundColor:'white',borderColor:'rgb(200,200,200)',
				borderBottomWidth:this.props.activeTab==='todos'?0:.5,flexDirection:'row'}}>
				<TextInput
					onFocus={this._onFocus}
					onBlur={this._onBlur}
					autoCorrect={false} 
					clearButtonMode={'while-editing'}
					ref={el => this.textInput = el}
					placeholder={'Search Typi'}
					placeholderTextColor={'rgb(145,145,145)'}
					style={{left:8,right:60,top:3,bottom:5,
						height:30, width:260*k,
						paddingLeft:10,fontSize:15,
						backgroundColor:'rgb(235,235,235)',
						borderColor: 'rgb(230,230,230)',
                		borderWidth: 1,
                		borderRadius: 3,
					}}
				/>




			</View>
		);
	}
}
