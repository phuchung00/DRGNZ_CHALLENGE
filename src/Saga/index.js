import { all } from 'redux-saga/effects'
import LoginSaga from './Login'

function* rootSaga() {
  yield all([
    LoginSaga(),
  ])
}
export default rootSaga