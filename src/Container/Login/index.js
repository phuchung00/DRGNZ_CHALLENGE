import { connect } from 'react-redux'
import LoginPage from '../../Components/LoginPage'
import { getUser, userInputAction, login } from '../../Reducer/Login'

const mapStateToProps = state => ({
  user: getUser(state)
})
const mapDispatchToProps = dispatch => {
  return {
    login: function(user, pass){
      const action = login(user, pass)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)