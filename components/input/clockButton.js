

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import creationActions from '../actions/creation'
import dismissKeyboard from 'dismissKeyboard'
import {keyboard} from '../animations'
export default class ClockButton extends Component {
	_onPress=()=>{
		// console.log('here')
		if(!this.props.showDatePicker) dismissKeyboard()
		LayoutAnimation.configureNext(keyboard)
		creationActions.showDatePicker$.next(!this.props.showDatePicker)

	}
	render() {
		return (
			<TouchableOpacity
				onPress={this._onPress}
				style={{alignSelf:'flex-end',marginBottom:2,marginLeft:2,...center,padding:3,
				// backgroundColor:'red',
				paddingLeft:6,paddingRight:6,
			}}
			>
				{
					this.props.showDatePicker?
					<Icon
                    name="ios-keypad"
                    size={27}
                    color={'rgb(60,60,60)'}
                  />: <Icon
                    name="md-time"
                    size={27}
                    color={'rgb(60,60,60)'}
                  />
				}
				

			</TouchableOpacity>
		);
	}
}
