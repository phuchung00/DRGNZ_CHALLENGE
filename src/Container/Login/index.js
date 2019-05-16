import { connect } from 'react-redux'
import LoginPage from '../../Components/LoginPage'
import { getUser, userInputAction } from '../../Reducer/Login'

const mapStateToProps = state => ({
  user: getUser(state)
})
const mapDispatchToProps = dispatch => {
  return {
    userInputAction: function(user){
      const action = userInputAction(user)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)