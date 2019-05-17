
export const LOGIN_USER = 'login/USER';
export const LOGIN_INPUT_USER = 'login/INPUT_USER'

//action creator 

// action creators này giúp tạo ra 1 action
// để saga lắng nghe
// khi lắng nghe đc
// saga sẽ lấy đc u + p
// từ đó gửi đc lên server xác thực
export const login = (username, password) => ({
  type: LOGIN_USER,
  payload: {
    username,
    password,
  }
})

export const userInputAction = (user, pass) => ({
  type : LOGIN_INPUT_USER,
  payload : {
    user,
    pass,
  }
})

const initialState = {
  loggedUser: null,
  registUsr: [],
}

export default function loginReducer( state = initialState, action ) {
  switch(action.type) {
    case LOGIN_INPUT_USER : {
      const { payload } = action
      const newState = { ...state }
      newState.user = payload.user
      newState.pass = payload.pass
      console.log('username: ' , newState.user, 'password :' ,newState.pass)
      return newState
    }
    default: return state
  }
}

// selector 
export const getUser = state => {
  const { login } = state
  return login.user
}
export const checkUser = (state, username, password) => {
  const { login } = state
  return  login.registUsr
  .find(user => user.username === username && user.password === username, password)
}