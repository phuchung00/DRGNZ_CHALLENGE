import { takeLatest, select } from 'redux-saga/effects'
import { getUser,LOGIN_INPUT_USER } from '../../Reducer/Login'

function* getLoginInput(action){
  const { user } = action.payload
  console.log('Hello user: ', user)
}
export default function* authSaga () {
  yield takeLatest(LOGIN_INPUT_USER, getLoginInput)
}