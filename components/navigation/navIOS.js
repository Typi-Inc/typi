

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
		// console.log(this.props.navigator)
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
		          // passProps:{navigator:this.navigator}
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

