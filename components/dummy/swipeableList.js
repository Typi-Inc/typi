

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import SwipeableListView from 'SwipeableListView';
import SwipeableQuickActions from 'SwipeableQuickActions';
const SwipeableListViewDataSource = require('SwipeableListViewDataSource');
let data=[
	{uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSpomuyQIMOzv3-exwom_5nlXqzUwXaLP_-96iME69Us99qoIpX",
		name:"Ilyas"},
	{uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqwfiyAjsrRqbhcQwU9T5DJsv6jOSWT2LavqLLjmkqxZMT4tQO7Q",
		name:"Almas"},
	{uri:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZHgDRN9CDM7AL1Q2Tmo-enjS7F3XKPATGuo_AiwjdprCwj7ph",
		name:"Yerden"}
]


export default class SwipeableList extends Component {
	constructor(props){
		super(props)
	    this.state= {
	        ds : SwipeableListView.getNewDataSource()
	    }
	    
	}
	componentWillMount(){
		this.setState({ds:this.state.ds.cloneWithRowsAndSections(data)})
		// console.log(this.state.ds)
	}


	_renderRow=(row)=>{
		console.log(row)
		return <View style={{flexDirection:'row',padding:10}}>
			<Image source={{uri:row.uri}}/>
			<Text>{row}</Text>

		</View>

	}
	_renderQuickActions=()=>{
		return <View style={{height:30,width:20,right:0}}/>
	}


	render() {
		return (
			<SwipeableListView
				automaticallyAdjustContentInsets={true}
                removeClippedSubviews={true}
				renderRow={this._renderRow}
				renderQuickActions={this._renderQuickActions}
				dataSource={this.state.ds}

			/>
		);
	}
}
