

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import NavIOS from './navIOS'
import Tube from '../chats/tube'
import TabNavBar from '../navbar/tabNavBar'
import SearchScreen from '../search/searchScreen'
const EventEmitter=require('EventEmitter')
import {actionFactory as a} from '../actionFactory'
var Subscribable = require('Subscribable');
import dismissKeyboard from 'dismissKeyboard'
export default class TopNavIOS extends Component {
	static contextTypes={focusEmitter:React.PropTypes.instanceOf(EventEmitter)};
	static childContextTypes={topNav:React.PropTypes.func};
	getChildContext(){
		return {topNav: this.getNav,
		}
	}
	getNav=()=>{
		return this.topNav
	}
	handleFocus=(obj)=>{
		a.get('setKeyboardSpacerHeight').next(0)
		// console.log(`${obj.route.component}`,obj)
		// dismissKeyboard()
		a.get('setShowDatePicker').next(false)
		
		a.get('setMessageType').next(-1)
	}
	handleWillFocus=(obj)=>{
		dismissKeyboard()

	}
	componentDidMount(){
		this.didfocus=this.topNav._getFocusEmitter().addListener('didfocus',this.handleFocus)
		// this.willFocus=this.topNav._getFocusEmitter().addListener('willfocus',this.handleWillFocus)
	}
	componentWillUnmount(){
		this.didfocus.remove()
		// this.willfocus.remove()
	}
	_onNavigationProgress=(e)=>{
		console.log(e)
	}
	render() {
		return (
		<View style={{flex:1}}> 
			<NavigatorIOS
				// onNavigationProgress={this._onNavigationProgress}
				// onNavigationComplete={this._onNavigationProgress}
				ref={el=>this.topNav=el}
				navigationBarHidden
				interactivePopGestureEnabled
				itemWrapperStyle={{paddingTop:20}}
		        initialRoute={{
		          component: NavIOS,
		          title: 'My Initial Scene',
		          name:'topNavios',
		          passProps:{topNav:this.topNav}
		        }}
		        style={{flex: 1}}
		    />
		</View>
		);
	}
}

