import { Observable } from 'rxjs'
import createState from './createState'
// import socketReducerFn from '../reducers/socket'
import navigationReducerFn from '../reducers/navigation'
import navigationActions from '../actions/navigation'
import searchReducerFn from '../reducers/search'
import searchActions from '../actions/search'
import creationReducerFn from '../reducers/creation'
import creationActions from '../actions/creation'
// import registrationActions from '../actions/registration'
import {Map} from 'immutable'
const navigationReducer$ = navigationReducerFn(navigationActions)
const searchReducer$ = searchReducerFn(searchActions)
const creationReducer$ = creationReducerFn(creationActions)
// const registrationReducer$ = registrationReducerFn(registrationActions)

const reducer$ = Observable.merge(
  navigationReducer$,
  searchReducer$,
  creationReducer$,
)

const initialState$ = Observable.of(Map())

export default createState(reducer$, initialState$)
