import React, { Component } from 'react';
import {Animated, View, StyleSheet, ScrollView, Image } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import connect from '../rx-state/connect'
import Faces from '../dummy/faces'
import SearchTabBar from '../navbar/searchTabBar'
import Todos from '../todos/todos'
import ChatList from '../chats/chatList'
class SearchScreen extends Component {
	state={zIndex:4}
   static defaultProps= {
		searchScreenIsVisible:true
	}
	componentWillReceiveProps(nextProps,nextContext){
		if(nextProps.searchScreenIsVisible){
			Animated.spring(this.anim,
				{
					toValue:1,
					tension:130,friction:14,
					useNativeDriver:true
				})
			.start()
		}else if(!nextProps.searchScreenIsVisible){
			Animated.timing(this.anim,{toValue:0,duration:1}).start()
		}
	}
	_renderTabOption=()=>{
		return <SearchTabBar activeTab={2}/>
	}
	killSearch=()=>{
		// this.setState({zIndex:1})
		// this.anim.setValue(0)
		// this.search.setNativeProps({zIndex:1})
	}
    render() {
    	this.anim=this.anim || new Animated.Value(1)
  	
	    return (
	    <Animated.View
	    	ref={el=>this.search=el}
	    	style={{position:'absolute',zIndex:this.state.zIndex,
	    		top:0,
	    		width:320*k,
	    		left:0,
	    		height:568*h-65,
	    		backgroundColor:'white'
	    	}}
	    >
	    	{!this.props.searchScreenIsVisible?null:
	     	<ScrollableTabView renderTabBar={this._renderTabOption}>
	           <View style={{flex:1,
	           		justifyContent:'center',
	           		alignItems:'center'}}  
	           		tabLabel="People">
	           		<ChatList/>
	           </View>
	           <View  style={{flex:1,
	           		backgroundColor:'white',
	           		justifyContent:'center',
	           		alignItems:'center'}} 
	           		tabLabel="Todos">
	           		<Todos/>
	           </View>
	           <View  style={{flex:1,
	           		backgroundColor:'white',
	           		justifyContent:'center',
	           		alignItems:'center'}} 
	           		tabLabel="Messages">
	           		
	           </View>
	           
	         </ScrollableTabView>
	    	}
	    </Animated.View>
	    );
	}
}

export default connect(state => ({
	searchScreenIsVisible: state.get('searchScreenIsVisible')
}))(SearchScreen)

