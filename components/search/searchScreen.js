import React, { Component } from 'react';
import {Animated, View, StyleSheet, ScrollView, Image } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import connect from '../rx-state/connect'
import Faces from '../dummy/faces'
import SearchTabBar from '../navbar/searchTabBar'
class SearchScreen extends Component {

   static defaultProps= {
		searchScreenIsVisible:false
	}
	componentWillReceiveProps(nextProps,nextContext){
		Animated.spring(this.anim,{toValue:nextProps.searchScreenIsVisible?1:0,tension:70,friction:12}).start()
	}
	_renderTabOption=()=>{
		return <SearchTabBar/>
	}
    render() {
    	this.anim=this.anim || new Animated.Value(0)
  	
	    return (
	    <Animated.View
	    	style={{position:'absolute',left:0,top:60,width:320*k,
	    		height:this.anim.interpolate({inputRange:[0,1],outputRange:[0,568*h]}),
	    		backgroundColor:'white'
	    	}}
	    >
	    	{!this.props.searchScreenIsVisible?null:
	     	<ScrollableTabView renderTabBar={this._renderTabOption}>
	           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}  tabLabel="People">
	          		<Faces/>
	           </View>
	           <View  style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}} tabLabel="Todos">
	           </View>
	           <View  style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}} tabLabel="Messages">
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