
import TimerMixin from 'react-timer-mixin'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Tube from '../chats/tube'
import Icon from 'react-native-vector-icons/Ionicons'
import Todos from './todos'
export default class Todo extends Component {
	static contextTypes={topNav:React.PropTypes.func};

	//lifecycles methods

	// shouldComponentUpdate(nextProps,nextState,nextContext){
	// 	console.log(nextProps,'that was props-=-=-=-=-=-=-=-=',nextState)
	// 	return false
	// }
	// componentWillUpdate(){
		// console.log('mounting agian')
	// }
	//Navigation goes here
	visitTodo=()=>{
		// this.props.killSearch&&this.props.killSearch()
		this.context.topNav().push({component:Todos})

	}


	//Data managemente layer goes here
	getTaskName(){
		return this.shortenText(this.props.item.text)
	}
	shortenText(text) {
		const factor=k>1?27:20
	    if (text.length > factor) {
	      return `${text.substring(0, factor)}...`
	    }
	    return text
  	}
  	getTaskerUri(){
  		return this.props.item.uri
  	}


  	//UI related changes goes here


	render() {
		return (
			<TouchableHighlight onPress={this.visitTodo} underlayColor={'rgb(180,180,180)'}>
				<View style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'white',height:60}}>
					<View style={{flex:k>1?.7:.9,}}>
						<View style={{height:25,width:25,borderRadius:5,borderWidth:1,borderColor:'rgb(190,190,190)'}}>

						</View>
					</View>
					<View style={{flex:5,padding:4}}>
						<Text style={{fontSize:16,fontWeight:'500'}}>{this.getTaskName()}</Text>
						<Text style={{fontSize:13,color:"rgb(160,160,160)"}}>Today</Text>
					</View>
					<View style={{flexDirection:'row',flex:k>1?1.5:2,alignItems:'center'}}>
						<View style={{...center}}>
							<Icon name="ios-chatboxes-outline"
								size={25} color={'rgb(160,160,160)'} />
							<Text style={{fontSize:13,color:"rgb(160,160,160)"}}>{Math.round(Math.random()*20)}</Text>
						</View>
						<Image source={{uri:this.getTaskerUri()}}
							style={{width:44,height:44,borderRadius:22,marginLeft:8*k}}/>
					
					</View>
				</View>
			</TouchableHighlight>


		);
	}
}
Object.assign(Todo.prototype, TimerMixin);
