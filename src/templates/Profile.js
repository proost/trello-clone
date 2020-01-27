import React from 'react'
import { ReadonlyForm, PasswordForm, FileUploadForm, InputTextForm} from '../components/Forms'
import { BasicAlert } from '../components/Alerts'
import { SubmitButton } from '../components/Buttons'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailAddr: () => {
        //여기서 email받아오는 AJAX요청 할 것
        return ''
      },
      name: () => {
        //여기서 이름 받아오는 AJAX요청
        return ''
      },
      password: '',
      passwordCheckMsg: '',
      isPasswordSame: false,
      alertStyle: '',
      job: () => {
        //직무 받아오는 AJAX요청
        return ''
      },
      department: () => {
        //부서 받아오는 AJAX 요청
        return ''
      }
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
        <form>
          <ReadonlyForm
            labelName='아이디'
            value={this.state.emailAddr}/>
          <InputTextForm
            labelName='이름'
            value={this.state.name}/>
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
            value={this.state.department}
            placeholder='부서명'/>
          <InputTextForm
            value={this.state.job}
            placeholder='직무'/>
          <SubmitButton
            labelName='프로필 변경'
            buttonStyle='btn-primary'
            />
        </form>
      </>
    )
  }
}