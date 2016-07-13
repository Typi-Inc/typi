import { Observable } from 'rxjs';


export default navigationReducer= actions => Observable.merge(

	actions.setTab$.map(tab => state => state.setIn(['navigation','activeTab'], tab)),
	actions.push$.map(navigationState => state => state.setIn(['navigation','pushTo'],navigationState))
)
