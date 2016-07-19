

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  InteractionManager,
  View
} from 'react-native';
import Input from '../input/input'
import TimerMixin from 'react-timer-mixin';
import ChatItem from './chatItem'
import SwipeActions from './swipeActions'
import navigationActions from '../actions/navigation'
import SwipeableListView from 'SwipeableListView'
import SwipeableQuickActionButton from 'SwipeableQuickActionButton'
import SwipeableQuickActions from 'SwipeableQuickActions'
import {openAnimation, keyboard} from '../animations'
const data=[{id:1,name:"Ilyas",text:"hello how is it", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrPejL8jdaLj3mT3ctMeOaNMMFA_Kzsuvk4Pz5nBA69CkU73D"},
	{id:2,name:"Almas",text:"well lets go", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VnUvIIiJZdm9a-Dt7xYMmrKGGyke5dK1aSXItcGEN4G_iP-v2A"},
	{id:3,name:"Yerden",text:"ok cool", uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9yFopv09IE5PMe4Xt-yZoFZ07QENLKrY12Fl-5PTugmwn__a6WA"},
	{id:4,name:"John",text:"ok cool nice", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiAu6wBRWXEF02mYmi8AWgdgbKjAgYYpsoLctaM_9nRuRK1y9OA"},
	{id:5,name:"Harley",text:"lets go", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPM6jiYqKQZ3RuYqNDY8PgeNN3cTBOjTXfNSdcIi7UlwM1uRbvFQ"},
	{id:6,name:"James",text:"lets go to movies", uri:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5HsVp72K-ZXtjU84-jESAhKH7UgHSYVXTv5rIBPLXHaHb-8LU"},

]
export default class ChatList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {ds:new SwipeableListView.getNewDataSource(),
	  	show:true,
	  	renderPlaceholder:true
	  };
	}
	
	componentWillMount(){
		this.anim=this.anim || new Animated.Value(0)
		// this.setState({ds:this.state.ds.cloneWithRowsAndSections({s1:data},["s1"],null)})
		this.setState({renderPlaceholder:true,ds:this.state.ds.cloneWithRowsAndSections({s1:data},["s1"],null)})
	}

	
	deleteRow= () => {

	}
	render() {

		return (
	<View style={{flex:1,backgroundColor:'white'}}>
		<SwipeableListView
			keyboardShouldPersistTaps={true}
			keyboardDismissMode={'none'}
			maxSwipeDistance={100}
			automaticallyAdjustContentInsets={false}
			dataSource={this.state.ds}
			renderRow={this._renderRow}
			renderQuickActions={this._renderQuickActions}
			renderSeparator={this._renderSeparator}
		/>
	</View>
		);
	}
	_renderRow=(row) => {
		return <ChatItem item={row}/>
	}
	_renderQuickActions=() => {
		return <SwipeActions/>
	}
	_renderSeparator=(sectionID, rowID, adjacentRowHighlighted)=>{
		return <View key={rowID} style={{marginLeft:60*k,
			width:260*k,height:0.5,backgroundColor:TRANSPARENT_GREY}}/>
	}

}
Object.assign(ChatList.prototype, TimerMixin);




