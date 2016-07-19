

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
import navigationActions from '../actions/navigation'
import connect from '../rx-state/connect'
import searchActions from '../actions/search'
import SearchScreen from '../search/searchScreen'
import Tabs from '../navigation/tabs'
class TabNavBar extends Component {
   	static defaultProps= {
		text:''
	}
	static contextTypes={getNav:React.PropTypes.func};
	_onFocus=()=>{
		this.context.getNav().replace({component:SearchScreen})
		// navigationActions.setTab$.next("todos")
		this.main.setNativeProps({style:{borderBottomWidth:0}})
		LayoutAnimation.configureNext(fast)
		// navigationActions.toggleSearchScreen$.next(true)
		this.textInput.setNativeProps({style:{width:240*k}})
		this.cancel.setNativeProps({style:{fontSize:16,marginBottom:8}})
	}
	// _onBlur=()=>{
	// 	// navigationActions.toggleSearchScreen$.next(false)

	// }

	_onChangeText=(text)=>{
		searchActions.appSearchText$.next(text)
	}
	_onCancel=()=>{
		this.context.getNav().replace({component:Tabs})
		this.main.setNativeProps({style:{borderBottomWidth:this.props.activeTab==='todos'?0:0.5}})
		LayoutAnimation.configureNext(fast)
		// navigationActions.toggleSearchScreen$.next(false)
		this.textInput.blur()
		searchActions.appSearchText$.next('')
		this.textInput.setNativeProps({style:{width:260*k}})
		this.cancel.setNativeProps({style:{fontSize:0.1,marginBottom:20}})

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
				<TextInput
					onFocus={this._onFocus}
					// onBlur={this._onBlur}
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

				<TouchableOpacity onPress={this._onCancel}>
					<Text 
						style={{fontSize:0.1,fontWeight:'500',

							marginLeft:18*k,marginBottom:20}} 
						ref={el=>this.cancel=el}>Cancel</Text>
				</TouchableOpacity>



			</View>
		);
	}
}
export default connect(state => ({
	text: state.getIn(['appSearch','inputText'])
}))(TabNavBar)

