

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   ScrollView,
//   Image,
//   View
// } from 'react-native';
// import Faces from './faces';
// import ScrollableTabView from 'react-native-scrollable-tab-view';
// import PlusButton from '../creation/plusButton';
// import SwipeableList from './swipeableList';
// export default class ScrollableTabBar extends Component {
// 	render() {
// 		return (
// 			<View style={{flex:1,paddingTop:18}}>
// 			<ScrollableTabView 
// 				renderTabBar={() => <MainNavBar />}
// 			>
// 	           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}  tabLabel="ios-search">
// 	           		<View style={{flex:1,height:100}}><Faces/></View>
// 	           		<View style={{flex:20}}/>
// 	           </View>


// 	           <View  style={{flex:1,backgroundColor:RED,justifyContent:'center',alignItems:'center'}} tabLabel="ios-chatbubbles">
// 	           		<SwipeableList/>

// 	           </View>

// 	           <View  style={{flex:1,backgroundColor:APP_COLOR,justifyContent:'center',alignItems:'center'}} tabLabel="ios-checkmark-circle">


// 	           </View>
// 	           <View  style={{flex:1,backgroundColor:ORANGE,justifyContent:'center',alignItems:'center'}} tabLabel="ios-person">


// 	           </View>
//           </ScrollableTabView>

//           <PlusButton/>
//           </View>
// 		);
// 	}
// }
