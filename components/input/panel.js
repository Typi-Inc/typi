

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  SegmentedControlIOS,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import creationActions from '../actions/creation'
import moment from 'moment'
import connect from '../rx-state/connect'
class Panel extends Component {
	static defaultProps = {
		messageType:0
	}
	show=()=>{
		Animated.spring(this.anim,{toValue:1,tension:130,friction:14}).start()
	}
	hide=()=>{
		Animated.timing(this.anim,{toValue:0,duration:1}).start(()=>{
			creationActions.showDatePicker$.next(false)
			creationActions.setMessageType$.next(-1)
		})
	}
	_setMessageType=(event)=>{
		creationActions
			.setMessageType$
				.next(event.nativeEvent.selectedSegmentIndex)
	}

	displayDate=(date)=>{
		const d = moment(date)
      	return d.format('D MMM YYYY')
	}
	displayTime=(time)=>{
		const d=moment(time)
		return d.format('h:mm A')
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.showDatePicker){
			this.show()
		}
	}

	render() {
		this.anim=this.anim || new Animated.Value(0)
		const {
			keyboardSpacerHeight,
			messageType,
			deliveryDate,
			viewHeight} = this.props
		let bottom=this.anim.interpolate({inputRange:[0,1],
			outputRange:[keyboardSpacerHeight,keyboardSpacerHeight+viewHeight]})
		return (
			<Animated.View
				style={{
					flexDirection:'row',
					height:48,
					backgroundColor:'white',
					borderTopWidth:0.5,
					borderColor:TRANSPARENT_GREY,
					position:'absolute',
					backgroundColor:'white',
					width:320*k,
					left:0,
					opacity:this.anim,
					paddingLeft:5,
					alignItems:'center',
					justifyContent:'center',
					bottom:bottom
				}}
			>
				<View style={{...center,position:'absolute',left:10,top:5}}>
					<Text style={{color:'rgb(110,110,110)',fontWeight:'500',
							fontSize:13,marginBottom:5}} >
						{this.displayDate(deliveryDate)}
					</Text>
					<Text style={{color:'rgb(110,110,110)',
								fontWeight:'500',fontSize:13}}>
						{this.displayTime(deliveryDate)}
					</Text>
				</View>
				<SegmentedControlIOS
						style={{width:145*k,marginLeft:20*k}}
						tintColor='black'
						values={['Message', 'Todo']}
						selectedIndex={messageType}
						onChange={this._setMessageType}
					/>
				<TouchableOpacity
                    style={{ 
                    	right:10,
                    	top:11,
                    	width: 26,
                    	height: 26,
                    	...center,
                    	position:'absolute',
                    	paddingTop:2,
                    	borderRadius:4,
                    	backgroundColor:'rgb(130,130,130)'

                    }}
                    onPress={this.hide}
                  >
                    <Icon
                      name="ios-close"
                      style={{ backgroundColor: 'transparent' }}
                      size={25}
                      color={'white'}
                    />
                  </TouchableOpacity>



			</Animated.View>
		);
	}
}
export default connect(state=>({
	deliveryDate:state.getIn(['newMessage','deliveryDate']),
}))(Panel)

