

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TabBarIOS,
  Image,
  View
} from 'react-native';
import connect from '../rx-state/connect'
import navigationActions from '../actions/navigation'
import TabNavigator from 'react-native-tab-navigator';
import TabNavBar from '../navbar/tabNavBar'
import ChatList from '../chats/chatList'
import Settings from '../settings/settings'
import TodosContainer from '../todos/todosContainer'
class Tabs extends Component {
	// state={selectedTab:'home'};
	static defaultProps= {
		activeTab:'todos'
	}
	render() {
		// console.log(this.props.navigator)
		return (
	<View style={{flex:1}}>
		<TabNavBar activeTab={this.props.activeTab}/>
		<TabNavigator
			tabBarStyle={{backgroundColor:'rgb(245,245,245)'}}
		>
			<TabNavigator.Item
				selected={this.props.activeTab === 'chats'}
				title="Chats"
				titleStyle={{color:'#929292'}}
				selectedTitleStyle={{color:'black'}}
				renderIcon={() => <Image  style={{height:25,width:25}} source={{uri:'chats',isStatic:true}} />}
				renderSelectedIcon={() => <Image style={{height:25,width:25}} source={{uri:'chatsA',isStatic:true}} />}
				onPress={() => navigationActions.setTab$.next("chats")}>
					<ChatList navigator={this.props.navigator}/>
			</TabNavigator.Item>
			<TabNavigator.Item
				selected={this.props.activeTab === 'todos'}
				title="Todos"
				titleStyle={{color:'#929292'}}
				selectedTitleStyle={{color:'black'}}
				renderIcon={() => <Image style={{height:23,width:23}} source={{uri:'todo',isStatic:true}}  />}
				renderSelectedIcon={() => <Image style={{height:23,width:23}} source={{uri:'todoA',isStatic:true}}  />}
				// renderBadge={() => <CustomBadgeView />}
				onPress={() => navigationActions.setTab$.next("todos")}>
					<TodosContainer/>
			</TabNavigator.Item>
			<TabNavigator.Item
				selected={this.props.activeTab === 'settings'}
				title="Settings"
				titleStyle={{color:'#929292'}}
				selectedTitleStyle={{color:'black'}}
				renderIcon={() => <Image  style={{height:23,width:23}} source={{uri:'settings',isStatic:true}} />}
				renderSelectedIcon={() => <Image style={{height:23,width:23}} source={{uri:'settingsA',isStatic:true}} />}
				onPress={() => navigationActions.setTab$.next("settings")}>
				<Settings/>
			</TabNavigator.Item>
		</TabNavigator>
	</View>
		);
	}
}

export default connect(state => ({
	activeTab: state.getIn(['navigation', 'activeTab'])
}))(Tabs)
