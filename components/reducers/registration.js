import { Observable } from 'rxjs'
import realm from '../db'
import { actionFactory as a } from '../actionFactory'

const SERVER_URL = 'http://localhost:4000/api'

const postData = (resource, data) => Observable.fromPromise(fetch(`${SERVER_URL}${resource}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}))

const registrationReducerFn = Observable.merge(
  a.get('register')
    .flatMap(data => console.log(data) || postData('/register', data))
    .map(response => state => console.log(response) || state),

  a.get('verify')
    .flatMap(data => postData('/verify', data))
    .flatMap(response => Observable.fromPromise(response.json()))
    .map(data => state => {
      console.log('--------------------', data)
      realm.write(() => {
        realm.create('Me', {
          id: data.id,
          token: data.jwt
        })
      })
      return state
    })
)

export default registrationReducerFn
