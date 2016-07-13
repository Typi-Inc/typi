

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';
export default class Faces extends Component {
	render() {
		return (
			<ScrollView style={{height:100}} directionalLockEnabled
			contentContainerStyle={{padding:10,height:100}} horizontal>
	            <Image source={{uri:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDHXkCXrt6kUzl-nR-8EUAs5jfEVORSJVVEZR5F3uWSsu4AePF"}} 
	              style={{width:60,height:60,borderRadius:30,margin:10}}/>
	            <Image source={{uri:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSpomuyQIMOzv3-exwom_5nlXqzUwXaLP_-96iME69Us99qoIpX"}} 
	              style={{width:60,height:60,borderRadius:30,margin:10}}/>
	            <Image source={{uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqwfiyAjsrRqbhcQwU9T5DJsv6jOSWT2LavqLLjmkqxZMT4tQO7Q"}} 
	              style={{width:60,height:60,borderRadius:30,margin:10}}/>
	            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjui7jDl6RSJ09C9nXGLJnNArunU7b72SDu_Q_Rf-7WdY1MP1BUQ"}} 
	              style={{width:60,height:60,borderRadius:30,margin:10}}/>
	            <Image source={{uri:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZHgDRN9CDM7AL1Q2Tmo-enjS7F3XKPATGuo_AiwjdprCwj7ph"}} 
	              style={{width:60,height:60,borderRadius:30,margin:10}}/>
	            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oCpo7HUFY5VGVvUaxCXjqKD1zgodsEWnjr1VFAFVtDrHxggW"}} 
	              style={{width:60,height:60,borderRadius:30,margin:10}}/>
	            <Image source={{uri:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBxyrAW1mgaSe3v1R1_JyNajHXlUF9vGKR-NNTDu9vX_wdIJXHBw"}} 
	              style={{width:60,height:60,borderRadius:30,margin:10}}/>
          </ScrollView>
		);
	}
}
