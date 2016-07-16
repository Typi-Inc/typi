

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import Tabs from './tabs'
import Tube from '../chats/tube'
import connect from '../rx-state/connect'
import navigationActions from '../actions/navigation'
let navios;
class NavIOS extends Component {

	static childContextTypes={getNav:React.PropTypes.func};
	getChildContext(){
		return {getNav: this.getNav,
		}
	}
	getNav=()=>{
		return this.navigator
	}
	componentWillUpdate(props){
		if(props.pushTo==='tube'){
			// console.log('here')

			this.navigator.push({component:Tube})
			navigationActions.push$.next('tube reached')
		}else if(props.pushTo==='chats'){
			this.navigator.pop()
			navigationActions.push$.next('chats reached')
		}else{
			return;
		}
	}
	
	render() {

		return (
			<NavigatorIOS
				ref={el=>this.navigator=el}
				navigationBarHidden
				interactivePopGestureEnabled
				itemWrapperStyle={{paddingTop:20}}
		        initialRoute={{
		          component: Tabs,
		          title: 'My Initial Scene',
		          // passProps:{navigator:this.navigator}
		        }}
		        style={{flex: 1}}
		    />
		);
	}
}
export default connect(state => ({
	pushTo: state.getIn(['navigation', 'pushTo'])
}))(NavIOS)

