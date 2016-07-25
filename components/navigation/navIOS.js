

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import Tabs from './tabs'
import Tube from '../chats/tube'
import {connect} from 'rx-state'
import TabNavBar from '../navbar/tabNavBar'
import SearchScreen from '../search/searchScreen'
class NavIOS extends Component {
	static defaultProps= {
		activeTab:'todos'
	}
	static childContextTypes={getNav:React.PropTypes.func};
	getChildContext(){
		return {getNav: this.getNav,
		}
	}
	getNav=()=>{
		return this.navigator
	}
	render() {
		return (
		<View style={{flex:1}}>
			<TabNavBar activeTab={this.props.activeTab}/>
			<NavigatorIOS
				ref={el=>this.navigator=el}
				navigationBarHidden
				interactivePopGestureEnabled
		        initialRoute={{
		          component: Tabs,
		          title: 'My Initial Scene',
		        }}
		        style={{flex: 1,zIndex:2}}
		    />
		</View>
		);
	}
}
export default connect(state => ({
	pushTo: state.getIn(['navigation', 'pushTo']),
	activeTab: state.getIn(['navigation', 'activeTab'])
}))(NavIOS)

