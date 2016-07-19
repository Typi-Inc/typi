import { Observable } from 'rxjs';
import {fromJS} from 'immutable';

export default creationReducer= actions => Observable.merge(

	actions.messageInput$.map(({text,inputHeight,addHeight}) => state => 
		state.setIn(['newMessage','inputInfo'], fromJS({text,inputHeight,addHeight}))),

	actions.keyboardSpacerHeight$.map(height=>state=>
		state.set('keyboardSpacerHeight',height)),

	actions.futureMessageDate$.map(date=>state=>
		state.setIn(['newMessage','deliveryDate'],date)),

	actions.showDatePicker$.map(showDatePicker=>state=>
		state.set('showDatePicker',showDatePicker)),

	actions.setMessageType$.map(type=>state=>
		state.setIn(['newMessage','type'],type)),
	
)
