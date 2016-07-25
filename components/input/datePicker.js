

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  InteractionManager
} from 'react-native';
import {connect} from 'rx-state'
class DatePicker extends Component {
	static defaultProps = {
	  deliveryDate:new Date,
	  showDatePicker:false
	}
	state={loading:true}
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
	componentWillMount(){
		InteractionManager.runAfterInteractions(()=>{
			this.setState({loading:false})
		})
	}
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
		if (date < new Date) this.props.futureMessageDate(new Date)
		else this.props.futureMessageDate(date)
	}
	show(){
		this.datePicker.setNativeProps({style:{bottom:0}})
		this.props.setKeyboardSpacerHeight(216)
	}
	hide(){
		this.datePicker&&this.datePicker.setNativeProps({style:{bottom:-230}})
	}
	render() {
		if(this.state.loading){
			return null
		}
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
	                mode={'datetime'}
	                timeZoneOffsetInMinutes={(-1) * (new Date()).getTimezoneOffset()}
	                onDateChange={this._onDateChange}
	              />
            </View>
		);
	}
}
export default connect(
	state=>({
		deliveryDate: state.getIn(['newMessage','deliveryDate']),
		showDatePicker: state.get('showDatePicker'),
		messageType: state.getIn(['newMessage','type'])
	}),
	['futureMessageDate','setKeyboardSpacerHeight']
)(DatePicker)

