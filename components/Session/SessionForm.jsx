import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/upcoming"));
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    let renderedForm = <div></div>;
    if (this.props.formType === 'signup') {
      renderedForm =
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to our App!
            Please {this.props.formType} or {this.props.navLink}
            <div className="login-form">
              <label>Name</label>
              <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="login-input"
                />
              <label>Username</label>
              <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              <label>Email</label>
              <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              <label>Password</label>
              <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              <input
                className="session-submit"
                type="submit"
                value={this.props.formType} />
            </div>
          </form>
        </div>;
    } else if (this.props.formType === 'login') {
      renderedForm =
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Welcome to our App!
            Please {this.props.formType} or {this.props.navLink}
            <div className="login-form">
              <label>Username</label>
              <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              <label>Password</label>
              <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              <input
                className="session-submit"
                type="submit"
                value={this.props.formType} />
            </div>
          </form>
        </div>;
    }
    return renderedForm;
  }
}

export default withRouter(SessionForm);