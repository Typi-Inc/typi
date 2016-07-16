

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  ScrollView,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
export default class Notifications extends Component {
	state={chatSwitch:true,groupSwitch:true,previewSwitch:true,taskSwitch:true}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'rgb(240,240,240)'}}>
				<ScrollView>
					<TouchableHighlight onPress={()=>console.log('')} underlayColor={'rgb(120,120,120)'}>
						<View style={{paddingLeft:5,backgroundColor:'white'}}>
							<View style={{height:80,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center'}}>
								<Image style={{height:60,width:60,margin:10,borderRadius:30}}
									source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiAu6wBRWXEF02mYmi8AWgdgbKjAgYYpsoLctaM_9nRuRK1y9OA'}}/>
								
								<View>
									<Text style={{fontSize:16, fontWeight:'500'}}>James</Text>
									<Text style={{fontSize:15, color:'rgb(160,160,160)'}}>Hey, I am using Typi</Text>
								</View>
							</View>
						</View>
					</TouchableHighlight>
					<Text style={{fontSize:13,color:'gray',marginTop:40,marginLeft:15}}>ACTIVITY</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Notifications</Text>
						</View>

						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Starred Messages</Text>
						</View>
						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Future Messages</Text>
						</View>


					</View>
					<Text style={{fontSize:13,color:'gray',marginTop:40,marginLeft:15}}>PRODUCT AND BRAND</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8,marginBottom:40}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>About Typi</Text>
						</View>

						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Intellectual Property and License</Text>
							<View/>

						</View>


					</View>



				</ScrollView>

			</View>
			
		);
	}
}
