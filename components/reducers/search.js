import { Observable } from 'rxjs';


export default navigationReducer= actions => Observable.merge(

	actions.appSearchText$.map(text => state => 
		state.setIn(['appSearch','inputText'], text)),

	
)
