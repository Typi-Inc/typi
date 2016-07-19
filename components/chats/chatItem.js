

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Tube from './tube'

export default class ChatItem extends Component {
	static contextTypes={topNav:React.PropTypes.func};
	visitTube=() => {
		// navigationActions.push$.next('tube')
		this.context.topNav().push({component:Tube})

	}
	render() {
		item=this.props.item
		return (
			<TouchableHighlight key={item.id} onPress={this.visitTube} underlayColor={'rgb(180,180,180)'}>
			 <View style={{alignItems:'center',flexDirection:'row',height:80,backgroundColor:'white'}}>
				<Image style={{height:60,width:60,margin:10,borderRadius:30}}
					source={{uri:item.uri}}/>
				<Text>{item.name}</Text>
			</View>
		</TouchableHighlight>
		);
	}
}
