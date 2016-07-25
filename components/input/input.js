import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import { connect } from 'rx-state'
class Input extends Component {
	static defaultProps = {
	  text:'',
	  inputHeight:0,
	  messageType:'Message'
	}
	componentWillReceiveProps(nextProps){
		if(!nextProps.showDatePicker) this.textInput.focus()
	}
	getPlaceholderText=()=>{
		if(this.props.messageType===0){
			return 'Message to the future'
		}else if(this.props.messageType===1){
			return 'Create a todo due on...'
		}else{
			return 'Message'
		}
	}
	_onChange=(event)=>{
		const text=event.nativeEvent.text
   		const inputHeight=Math.min(event.nativeEvent.contentSize.height,129*k)
   		const addHeight=inputHeight<25*k?0:inputHeight-30*k
   		this.props.messageInput({text,inputHeight,addHeight})
	}
	render() {
		const vStyle={
			height:Math.max(32, this.props.inputHeight+4*k),
			width:/\S/.test(this.props.text)?230*k:275*k
		}
		return (
			<TextInput
      			multiline={true}
      			ref={el=>this.textInput=el}
      			placeholder={this.getPlaceholderText()}
            	placeholderTextColor={'rgb(160,160,160)'}
           	 	style={[styles.textInput,vStyle]}
              	onChange={this._onChange}
      		>
      			<Text>
					{this.props.text}
      			</Text>
      		</TextInput>

		);
	}
}

export default connect(
	state => ({
		text: state.getIn(['newMessage','inputInfo','text']),
		inputHeight: state.getIn(['newMessage','inputInfo','inputHeight']),
		addHeight: state.getIn(['newMessage','inputInfo','addHeight']),
		showDatePicker:state.get('showDatePicker'),
		messageType:state.getIn(['newMessage','type'])
	}),
	[
		'messageInput'
	]
)(Input)

const styles = StyleSheet.create({
  textInput: {
    fontSize:16,
	alignItems:'center',
	backgroundColor:'white',
	borderColor: 'rgb(210,210,210)', 
	borderWidth:1,
	borderRadius:3,
	alignSelf:'center',
	paddingLeft:7,
	marginLeft:2,
  },
});
