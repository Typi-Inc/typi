

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  LayoutAnimation,
  View
} from 'react-native';
import Input from './input'
import ClockButton from './clockButton'
import connect from '../rx-state/connect'
import {keyboard} from '../animations'
import creationActions from '../actions/creation'
import DatePicker from './datePicker'
import Panel from './panel'
class MainInput extends Component {
	static defaultProps = {
	  inputHeight:0,
	  keyboardSpacerHeight:0
	}
	keyboardWillShow(event){
		LayoutAnimation.configureNext(keyboard)
		creationActions.showDatePicker$.next(false)
		creationActions.keyboardSpacerHeight$.next(event.endCoordinates.height)

	}
	keyboardWillHide(event){
		// LayoutAnimation.configureNext(keyboard)
		// creationActions.keyboardSpacerHeight$.next(0)
	}
	componentWillMount(){
		this.keyboardWillShowSubscription=Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
		this.keyboardWillHideSubscription=Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
	}
	componentWillUnmount(){
		this.keyboardWillShowSubscription.remove()
		this.keyboardWillHideSubscription.remove()
	}
	render() {
		const {
			keyboardSpacerHeight,
			showDatePicker,
			inputHeight,
			messageType
		} = this.props
		const viewHeight=Math.max(43, (12 * k + inputHeight))

		return (
		<View>
			<Panel 
				messageType={messageType}
				showDatePicker={showDatePicker}
				viewHeight={viewHeight} 
				keyboardSpacerHeight={keyboardSpacerHeight}/>
			<View
				style={{
					position:'absolute',
					zIndex:10,
					bottom:keyboardSpacerHeight,
					left:0,right:0,borderTopWidth:0.5,
					borderColor:TRANSPARENT_GREY,
					backgroundColor:'white',
					height:viewHeight,
					flexDirection:'row',
					alignItems:'center',justifyContent:'flex-start',
				}}
			>
				<ClockButton messageType={messageType} showDatePicker={showDatePicker}/>
				<Input/>

			</View>
			<DatePicker/>

		</View>
		);
	}
}
export default connect(state=>({
	inputHeight: state.getIn(['newMessage','inputInfo','inputHeight']),
	keyboardSpacerHeight:state.get('keyboardSpacerHeight'),
	showDatePicker: state.get('showDatePicker'),
	messageType:state.getIn(['newMessage','type'])
}))(MainInput)

