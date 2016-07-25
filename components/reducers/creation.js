import { Observable } from 'rxjs';
import {fromJS} from 'immutable';
import { actionFactory as a } from '../actionFactory'

export default creationReducer$ = Observable.merge(

	a.get('messageInput').map(({text,inputHeight,addHeight}) => state => 
		state.setIn(['newMessage','inputInfo'], fromJS({text,inputHeight,addHeight}))),

	a.get('setKeyboardSpacerHeight').map(height => state =>
		state.set('keyboardSpacerHeight',height)),

	a.get('futureMessageDate').map(date => state =>
		state.setIn(['newMessage','deliveryDate'],date)),

	a.get('setShowDatePicker').map(showDatePicker => state =>
		state.set('showDatePicker',showDatePicker)),

	a.get('setMessageType').map(type => state =>
		state.setIn(['newMessage','type'],type)),

)
