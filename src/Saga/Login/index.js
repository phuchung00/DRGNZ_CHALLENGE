// axios là thư viện thay thế cho fetch
// giúp gọi API nhanh hơn
// và tiện hơn
import axios from 'axios';
import { takeLatest, select, call } from 'redux-saga/effects'
import { getUser, LOGIN_USER } from '../../Reducer/Login'

function* getLoginInput(action){
  try{
  const { username, password } = action.payload
  console.log('Hello user: ', username, password)
  const res = yield call(axios.post, 'https://drgnz-challenge-api.herokuapp.com/api/auth/login', {
    username,
    password,
  });
  console.log(res.data);
} catch(e){
  console.log(e.response.data)
}
}
export default function* authSaga () {
  yield takeLatest(LOGIN_USER, getLoginInput)
}