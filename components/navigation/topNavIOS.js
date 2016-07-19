

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
class TopNavIOS extends Component {

	static childContextTypes={topNav:React.PropTypes.func};
	getChildContext(){
		return {topNav: this.getNav,
		}
	}
	getNav=()=>{
		return this.topNav
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

