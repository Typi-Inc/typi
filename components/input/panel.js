

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
import navigationActions from '../actions/navigation'
export default class Panel extends Component {

	show=()=>{
		Animated.spring(this.anim,{toValue:1,tension:120,friction:12}).start()
	}
	hide=()=>{
		Animated.timing(this.anim,{toValue:0,duration:1}).start()
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
			viewHeight} = this.props
		let bottom=this.anim.interpolate({inputRange:[0,1],
			outputRange:[keyboardSpacerHeight,keyboardSpacerHeight+viewHeight]})
		return (
			<Animated.View
				style={{
					zIndex:4,
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
					<Text style={{color:'rgb(110,110,110)',fontSize:13,marginBottom:5}} >
						18/01/2016
					</Text>
					<Text style={{color:'rgb(110,110,110)',fontSize:13}}>
						12:34 AM
					</Text>
				</View>
				<SegmentedControlIOS
						style={{width:150*k,marginLeft:20*k}}
						tintColor='black'
						values={['Message', 'Todo']}
						selectedIndex={1}
						onChange={(event) => {
						  navigationActions.setTodosSelectedIndex$.next(event.nativeEvent.selectedSegmentIndex);
						}}
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
                    	backgroundColor:'rgb(160,160,160)'

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
