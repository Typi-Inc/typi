

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS
} from 'react-native';
import connect from '../rx-state/connect'
import creationActions from '../actions/creation'
class DatePicker extends Component {
	static defaultProps = {
	  deliveryDate:new Date,
	  showDatePicker:false
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.showDatePicker){
			this.show()
		}else if(!this.showDatePicker){
			this.hide()
		}
	}
	// shouldComponentUpdate(nextProps,nextState){
	// 	// if(nextProps.)
	// }
	getDatePickerType=()=>{
		if(this.props.messageType===0){
			return 'datetime'
		}else if(this.props.messageType===1){
			return 'date'
		}else{
			return 'datetime'
		}
	}
	_onDateChange=(date)=>{
		if (date < new Date) creationActions.futureMessageDate$.next(new Date)
		else creationActions.futureMessageDate$.next(date)
	}
	show(){
		this.datePicker.setNativeProps({style:{bottom:0}})
		creationActions.keyboardSpacerHeight$.next(216)
	}
	hide(){
		this.datePicker.setNativeProps({style:{bottom:-230}})
		// creationActions.keyboardSpacerHeight$.next(0)
	}
	render() {
		return (
			 <View
              ref={el => this.datePicker = el}
              style={{
              	backgroundColor:'white',
                position: 'absolute',
                bottom: -230,
                left: 0,
                ...center,
              }}
            >
	              <DatePickerIOS
	                style={{ width: 320 * k }}
	                ref={el => this.datePicker = el}
	                date={this.props.deliveryDate}
	                mode={this.getDatePickerType()}
	                timeZoneOffsetInMinutes={(-1) * (new Date()).getTimezoneOffset()}
	                onDateChange={this._onDateChange}
	              />
            </View>
		);
	}
}
export default connect(state=>({
	deliveryDate:state.getIn(['newMessage','deliveryDate']),
	showDatePicker:state.get('showDatePicker'),
	messageType:state.getIn(['newMessage','type'])
}))(DatePicker)

