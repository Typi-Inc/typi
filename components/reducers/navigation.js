import { Observable } from 'rxjs';
import { actionFactory as a } from '../actionFactory'
export default navigationReducer = Observable.merge(

	a.get('setTab').map(tab => state => 
		state.setIn(['navigation','activeTab'], tab)),

	a.get('setTodosSelectedIndex').map(index => state => 
		state.setIn(['navigation','todosSelectedIndex'], index)),

	a.get('push').map(navigationState => state => 
		state.setIn(['navigation','pushTo'],navigationState)),

	a.get('toggleSearchScreen').map(isSearchVisible => state =>
		state.set('searchScreenIsVisible',isSearchVisible)),
	
)
