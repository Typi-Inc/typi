

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  SegmentedControlIOS,
  View
} from 'react-native';
import Todos from './todos'
import {connect} from 'rx-state'
export default class TodosContainer extends Component {

	static defaultProps= {
		selectedIndex:0
	}
	render() {
		return (
			<View style={{...center,flex:1}}>
				<SegmentedControlIOS
					style={{width:270*k,}}
					tintColor='black'
					values={['To me', 'From me']}
					selectedIndex={this.props.selectedIndex}
					onChange={(event) => {
					  this.props.setTodosSelectedIndex(event.nativeEvent.selectedSegmentIndex);
					}}
				/>
				<View style={{height:0.5,backgroundColor:'rgb(200,200,200)',width:320*k,marginTop:10}}/>
				<Todos/>



			</View>
		);
	}
}

export default connect(state => ({
	selectedIndex: state.getIn(['navigation', 'todosSelectedIndex'])
}),['setTodosSelectedIndex'])(TodosContainer)

