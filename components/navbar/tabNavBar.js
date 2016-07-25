

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  LayoutAnimation
} from 'react-native';
import {openAnimation, fast} from '../animations'
import {connect} from 'rx-state'
import SearchScreen from '../search/searchScreen'
import Tabs from '../navigation/tabs'
import NewChat from '../creation/newChat'
class TabNavBar extends Component {
   	static defaultProps= {
		text:''
	}
	static contextTypes={getNav:React.PropTypes.func};
	

	_onChangeText=(text)=>{
		this.props.appSearchText(text)
	}
	_onFocus=()=>{
		this.context.getNav().replace({component:SearchScreen})
		this.main.setNativeProps({style:{borderBottomWidth:0}})
		LayoutAnimation.configureNext(fast)
		this.textInput.setNativeProps({style:{width:240*k}})
		this.cancel.setNativeProps({style:{fontSize:16,marginBottom:8}})
	}
	_onCancel=()=>{
		this.context.getNav().replace({component:Tabs})
		this.main.setNativeProps({style:{
			borderBottomWidth:this.props.activeTab==='todos'?0:0.5}})
		LayoutAnimation.configureNext(fast)
		this.textInput.blur()
		this.props.appSearchText('')
		this.textInput.setNativeProps({style:{width:260*k}})
		this.cancel.setNativeProps({style:{fontSize:0.1,marginBottom:20}})

	}

	_onCreate=()=>{
		LayoutAnimation.configureNext(openAnimation)
		this.title.setNativeProps({style:{opacity:1,fontSize:17}})
		this.textInput.setNativeProps({style:{opacity:0,width:120}})
		this.context.getNav().replace({component:NewChat})
	}
	render() {
		return (
			<View 
				ref={el=>this.main=el}
				style={{height:45,left:0,top:0,right:0,
					alignItems:'center',zIndex:3,
					backgroundColor:'white',
					borderColor:'rgb(200,200,200)',
					paddingBottom:5,paddingTop:3,
					borderBottomWidth:this.props.activeTab==='todos'?0:.5,
					flexDirection:'row'}}>		
				{this.renderTextInput()}
				{this.renderCreateTitle()}
				{this.renderCancelButton()}

			</View>
		);
	}
	renderCancelButton=()=>{
		return <TouchableOpacity onPress={this._onCancel}>
					<Text 
						style={{fontSize:0.1,fontWeight:'500',

							marginLeft:18*k,marginBottom:20}} 
						ref={el=>this.cancel=el}>Cancel</Text>
				</TouchableOpacity>
	}
	renderTextInput=()=>{
		return 	<TextInput
					onFocus={this._onFocus}
					onChangeText={this._onChangeText}
					value={this.props.text}
					autoCorrect={false} 
					clearButtonMode={'while-editing'}
					ref={el => this.textInput = el}
					placeholder={'Search Typi'}
					placeholderTextColor={'rgb(145,145,145)'}
					style={{left:8,right:60,
						height:32, width:260*k,
						paddingLeft:10,fontSize:15,
						backgroundColor:'rgb(235,235,235)',
						borderColor: 'rgb(230,230,230)',
                		borderWidth: 1,
                		borderRadius: 3,
					}}
				/>
	}
	renderCreateTitle=()=>{
		if(this.props.activeTab==='chats'){
			return	<View style={{flexDirection:'row'}}>
						<Text ref={el=>this.title=el}
							style={{fontSize:0.1,opacity:0,fontWeight:'500'}}>New messate</Text>
						<TouchableOpacity  ref={el=>this.do=el} onPress={this._onCreate}>
						<Text 
							style={{fontSize:14,fontWeight:'500',
							marginLeft:18*k,marginBottom:10}} >do</Text>
				</TouchableOpacity>
			</View>
		}else{
			return null
		}
	}
}
export default connect(state => ({
	text: state.getIn(['appSearch','inputText'])
}),['appSearchText'])(TabNavBar)

