import { Observable } from 'rxjs'
import createState from './createState'
// import socketReducerFn from '../reducers/socket'
import navigationReducerFn from '../reducers/navigation'
import navigationActions from '../actions/navigation'
// import registrationActions from '../actions/registration'
import {Map} from 'immutable'
const navigationReducer$ = navigationReducerFn(navigationActions)
// const registrationReducer$ = registrationReducerFn(registrationActions)

const reducer$ = Observable.merge(
  navigationReducer$,
  // registrationReducer$
)

const initialState$ = Observable.of(Map())

export default createState(reducer$, initialState$)
