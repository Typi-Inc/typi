

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
  View
} from 'react-native';
import Todo from './todo'
import SwipeableListView from 'SwipeableListView'
const data=[{id:1,name:"Ilyas",text:"hello how is it", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrPejL8jdaLj3mT3ctMeOaNMMFA_Kzsuvk4Pz5nBA69CkU73D"},
	{id:2,name:"Almas",text:"well lets go and watch the movies ", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VnUvIIiJZdm9a-Dt7xYMmrKGGyke5dK1aSXItcGEN4G_iP-v2A"},
	{id:3,name:"Yerden",text:"ok cool", uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9yFopv09IE5PMe4Xt-yZoFZ07QENLKrY12Fl-5PTugmwn__a6WA"},
	{id:4,name:"John",text:"ok cool nice", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiAu6wBRWXEF02mYmi8AWgdgbKjAgYYpsoLctaM_9nRuRK1y9OA"},
	{id:5,name:"Harley",text:"lets go", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPM6jiYqKQZ3RuYqNDY8PgeNN3cTBOjTXfNSdcIi7UlwM1uRbvFQ"},
	{id:6,name:"James",text:"lets go to movies", uri:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5HsVp72K-ZXtjU84-jESAhKH7UgHSYVXTv5rIBPLXHaHb-8LU"},

]
export default class Todos extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {ds:new SwipeableListView.getNewDataSource(),
	  	show:true
	  };
	}
	componentWillMount(){
		this.anim=this.anim || new Animated.Value(0)
		this.setState({ds:this.state.ds.cloneWithRowsAndSections({s1:data},["s1"],null)})
	}
	render() {
		return (
		<SwipeableListView
			maxSwipeDistance={80}
			automaticallyAdjustContentInsets={false}
			dataSource={this.state.ds}
			renderRow={this._renderRow}
			renderQuickActions={this._renderQuickActions}
			renderSeparator={this._renderSeparator}
		/>
		);
	}
	_renderRow=(row) => {
		return <Todo key={row.id} item={row}/>
	}
	_renderQuickActions=() => {
		return <View style={{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',}}>
				<View style={{height:60,width:300,backgroundColor:BUBBLE_GREY}}/>
				<TouchableOpacity onPress={this._test}>
					<View style={{height:60,width:80,backgroundColor:RED,...center}}>
						<Text style={{color:'white',fontSize:16}}>Delete</Text>
					</View>
				</TouchableOpacity>
			</View>
	}
	_renderSeparator=(sectionID, rowID, adjacentRowHighlighted)=>{
		return <View key={rowID} style={{marginLeft:40*k,
			width:280*k,height:0.5,backgroundColor:TRANSPARENT_GREY}}/>
	}
}
