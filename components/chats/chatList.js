

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
  View
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

import Tube from './tube'
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
	  	show:true
	  };
	}
	static contextTypes={getNav:React.PropTypes.func};
	componentWillMount(){
		this.anim=this.anim || new Animated.Value(0)
		this.setState({ds:this.state.ds.cloneWithRowsAndSections({s1:data},["s1"],null)})
	}

	visitTube=() => {
		// navigationActions.push$.next('tube')
		this.context.getNav().push({component:Tube})

	}
	deleteRow= () => {

	}
	render() {

		return (
	<View style={{flex:1}}>
		<SwipeableListView
			maxSwipeDistance={100}
			automaticallyAdjustContentInsets={false}
			dataSource={this.state.ds}
			renderRow={this._renderRow}
			renderQuickActions={this._renderQuickActions}
			renderSeparator={this._renderSeparator}
		/>
		<Animated.View ref={el=>this.green=el} style={{position:'absolute',
			bottom:this.anim.interpolate({inputRange:[0,1],outputRange:[-550,0]}),
			left:0, right:0,height:500,
			backgroundColor:'white'}}>
			{this.state.show?
				<Tube back={this._test}/>:null
			}
		</Animated.View>
	</View>
		);
	}
	_renderRow=(row) => {
		return <TouchableHighlight key={row.id} onPress={this.visitTube} underlayColor={'rgb(180,180,180)'}>
			 <View style={{alignItems:'center',flexDirection:'row',height:80,backgroundColor:'white'}}>
				<Image style={{height:60,width:60,margin:10,borderRadius:30}}
					source={{uri:row.uri}}/>
				<Text>{row.name}</Text>
			</View>
		</TouchableHighlight>
	}
	_renderQuickActions=() => {
		return <View style={{ flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',}}>
				<View style={{height:80,width:300,backgroundColor:BUBBLE_GREY}}/>
				<TouchableOpacity onPress={this._test}>
					<View style={{height:80,width:100,backgroundColor:RED,...center}}>
						<Text style={{color:'white',fontSize:16}}>Delete</Text>
					</View>
				</TouchableOpacity>
			</View>
	}
	_renderSeparator=(sectionID, rowID, adjacentRowHighlighted)=>{
		return <View key={rowID} style={{marginLeft:60*k,
			width:260*k,height:0.5,backgroundColor:TRANSPARENT_GREY}}/>
	}
	_test=()=>{
				// this.setState({show:!this.state.show})

		Animated.spring(this.anim,{
				toValue:this.anim._value>0?0:1,
				tension:80,
				friction:11,
				useNativeDriver:true

			}).start(()=>{

			})
			
			// this.setTimeout(()=>{
			// 	LayoutAnimation.configureNext(openAnimation)
			// 	this.green.setNativeProps({style:{bottom:0}})
			// },100)
			
	

		
		
	}	

}
Object.assign(ChatList.prototype, TimerMixin);




