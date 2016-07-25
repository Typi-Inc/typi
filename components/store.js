import { Observable } from 'rxjs'
import {Map} from 'immutable'
import { createStore, ActionFactory } from 'rx-state'
import navigationReducer$ from './reducers/navigation'
import searchReducer$ from './reducers/search'
import creationReducer$ from './reducers/creation'

const reducer$ = Observable.merge(
  navigationReducer$,
  searchReducer$,
  creationReducer$,
)

const initialState$ = Observable.of(Map())
const store = createStore(reducer$, initialState$)

export {
	store
}
