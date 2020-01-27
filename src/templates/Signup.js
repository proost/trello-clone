import React from 'react'
import { EmailForm, PasswordForm, FileUploadForm, InputTextForm} from '../components/Forms'
import { SubmitButton } from '../components/Buttons'
import { BasicAlert } from '../components/Alerts'

export default class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      passwordCheckMsg: '',
      isPasswordSame: false,
      alertStyle: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkPasswordSame = this.checkPasswordSame.bind(this)
  }

  handleChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    if (!this.state.isPasswordSame) {
      event.preventDefault()
    }
  }

  checkPasswordSame(event) {
    if (this.state.password === event.target.value) {
      this.setState({
        passwordCheckMsg: '비밀번호 일치!',
        alertStyle: 'alert-success',
        isPasswordSame: true
    })
    } else {
      this.setState({
        passwordCheckMsg: '비밀번호가 다릅니다.',
        alertStyle: 'alert-warning'
      })
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <EmailForm
            labelName='아이디'
            placeholder='이메일을 적어주세요'/>
          <InputTextForm
            labelName='이름'/>
          <PasswordForm
            value={this.state.password}
            labelName='비밀번호'
            handleChange={this.handleChange}/>
          <PasswordForm
            labelName='비밀번호 확인'
            handleChange={this.checkPasswordSame}/>
          <BasicAlert
            alertStyle={this.state.alertStyle}
            message={this.state.passwordCheckMsg}/>
          <FileUploadForm
            fileType="image/*"
            labelName='사진 업로드'/>
          <InputTextForm
            placeholder='부서명'/>
          <InputTextForm
            placeholder='직무'/>
          <SubmitButton
            labelName='회원가입'
            buttonStyle='btn-primary'/>
        </form>
      </>
    )
  }
}
