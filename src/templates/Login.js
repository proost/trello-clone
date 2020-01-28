import React from 'react'
import { EmailForm, PasswordForm } from '../components/Forms'
import { SubmitButton, ActionButton } from '../components/Buttons'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddr: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({emailAddr: event.target.value})
  }

  render() {
    return (
      <div>
        <form>
          <EmailForm
            value={this.state.emailAddr}
            labelName='아이디'
            placeholder='이메일을 적어주세요'
            handleChange={this.handleChange}/>            
          <SubmitButton
            labelName='로그인'
            buttonStyle='btn-primary'
            />
        </form>
        <Link to="/signup">
          <ActionButton 
            buttonStyle="btn-lg btn-block" 
            labelName="회원가입"/>
        </Link>
        <Link to="/missingPw">
          <ActionButton 
            buttonStyle="btn-lg btn-block"
            labelName="비밀번호 찾기"
            />
        </Link>
      </div>  
    )
  } 
}

export default Login