

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import NavIOS from './navIOS'
import Tube from '../chats/tube'
import connect from '../rx-state/connect'
import navigationActions from '../actions/navigation'
import TabNavBar from '../navbar/tabNavBar'
import SearchScreen from '../search/searchScreen'
const EventEmitter=require('EventEmitter')
var Subscribable = require('Subscribable');
import dismissKeyboard from 'dismissKeyboard'
import creation from '../actions/creation'
class TopNavIOS extends Component {
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
		console.log(`${obj.route.component}`,obj)
		dismissKeyboard()
		creation.showDatePicker$.next(false)
		creation.keyboardSpacerHeight$.next(0)
	}
	componentDidMount(){
		// console.log(this.topNav._getFocusEmitter())
		let jost=this.topNav._getFocusEmitter().addListener('didfocus',this.handleFocus)
		// console.log(jost)
	}
	render() {
		return (
		<View style={{flex:1}}> 
			<NavigatorIOS
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
export default connect(state => ({
	pushTo: state.getIn(['navigation', 'pushTo'])
}))(TopNavIOS)
