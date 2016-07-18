import { Observable } from 'rxjs';


export default navigationReducer= actions => Observable.merge(

	actions.setTab$.map(tab => state => 
		state.setIn(['navigation','activeTab'], tab)),

	actions.setTodosSelectedIndex$.map(index => state => 
		state.setIn(['navigation','todosSelectedIndex'], index)),

	actions.push$.map(navigationState => state => 
		state.setIn(['navigation','pushTo'],navigationState)),

	actions.toggleSearchScreen$.map(isSearchVisible => state =>
		state.set('searchScreenIsVisible',isSearchVisible)),
	
)
