import { Observable } from 'rxjs';
import { actionFactory as a } from '../actionFactory'

export default navigationReducer = Observable.merge(

	a.get('appSearchText').map(text => state => 
		state.setIn(['appSearch','inputText'], text)),

	
)
