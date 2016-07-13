

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  View
} from 'react-native';
import Tube from './tube'
import navigationActions from '../actions/navigation'
import SwipeableListView from 'SwipeableListView'
import SwipeableListViewDataSource from 'SwipeableListViewDataSource'
import SwipeableQuickActionButton from 'SwipeableQuickActionButton'
import SwipeableQuickActions from 'SwipeableQuickActions'
const data=[{name:"Ilyas",text:"hello how is it", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrPejL8jdaLj3mT3ctMeOaNMMFA_Kzsuvk4Pz5nBA69CkU73D"},
	{name:"Almas",text:"well lets go", uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VnUvIIiJZdm9a-Dt7xYMmrKGGyke5dK1aSXItcGEN4G_iP-v2A"},
	{name:"Yerden",text:"ok cool", uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9yFopv09IE5PMe4Xt-yZoFZ07QENLKrY12Fl-5PTugmwn__a6WA"},
]
export default class ChatList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {ds:new SwipeableListView.getNewDataSource()};
	}
	componentWillMount(){
		this.setState({ds:this.state.ds.cloneWithRowsAndSections({s1:data},["s1"],null)})
	}




	visitTube=() => {
		// navigationActions.push$.next('tube')
		this.props.navigator.push({component:Tube})

	}
	render() {
		return (
		<SwipeableListView
			automaticallyAdjustContentInsets
			dataSource={this.state.ds}
			renderRow={this._renderRow}
			renderQuickActions={this._renderQuickActions}
		/>

		);
	}
	_renderRow=(row) => {
		return <View style={{height:80,borderWidth:1,borderColor:'gray',backgroundColor:'white'}}>
			<Text>{row.name}</Text>
		</View>
	}
	_renderQuickActions=() => {
		return <SwipeableQuickActions>
				<SwipeableQuickActionButton
					text="hello" 
					imageStyle={{height:80,width:100}}
					imageSource={{uri:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjWVCE-0VX6HKFFinwAG7ria6lbdmt65JCiM1530HJEzTCS-kY"}}
				/>
			</SwipeableQuickActions>
	}
}
