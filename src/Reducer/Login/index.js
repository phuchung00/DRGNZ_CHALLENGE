export const LOGIN_INPUT_USER = 'login/INPUT_USER'

//action creator 
export const userInputAction = (user) => ({
  type : LOGIN_INPUT_USER,
  payload : {
    user,
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