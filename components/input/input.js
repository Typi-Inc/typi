

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import connect from '../rx-state/connect'
import creationActions from '../actions/creation'
class Input extends Component {
	static defaultProps = {
	  text:'',
	  inputHeight:0
	}
	componentWillReceiveProps(nextProps){
		if(!nextProps.showDatePicker) this.textInput.focus()
	}
	render() {
		return (
			<TextInput
      			multiline={true}
      			ref={el=>this.textInput=el}
      			placeholder={'Message'}
            	placeholderTextColor={'rgb(160,160,160)'}
           	 	style={{height: Math.max(32, this.props.inputHeight+4*k),
            		fontSize:16,
            		alignItems:'center',
            		backgroundColor:'white',
              		borderColor: 'rgb(210,210,210)', 
              		borderWidth:1,
              		borderRadius:3,
              		alignSelf:'center',
              		width:/\S/.test(this.props.text)?230*k:275*k,
              		paddingLeft:7,
              		marginLeft:2
              	}}
              	value={this.props.text}
              	onChange={(event) => {
               		// this.requestAnimationFrame(()=>LayoutAnimation.configureNext(fast))
               		const text=event.nativeEvent.text
               		const inputHeight=Math.min(event.nativeEvent.contentSize.height,129*k)
               		const addHeight=inputHeight<25*k?0:inputHeight-30*k
               		creationActions.messageInput$.next({text,inputHeight,addHeight})
                	// this.props.setBottom(this.addHeight)


              	}}
      		/>
		);
	}
}
export default connect(state => ({
	text: state.getIn(['newMessage','inputInfo','text']),
	inputHeight: state.getIn(['newMessage','inputInfo','inputHeight']),
	addHeight: state.getIn(['newMessage','inputInfo','addHeight']),
	showDatePicker:state.get('showDatePicker'),
}))(Input)


