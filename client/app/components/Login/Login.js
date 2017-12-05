import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/bulma.css';

class LogIn extends Component {
  handleLogIn(e) {

    e.preventDefault();
    const email = e.target.elements.email.value;
		const password = e.target.elements.password.value;

		<Link to="/Dashboard" />
	}

  render() {
    return (<form onSubmit={this.handleLogIn}>
      <div className="container">
        <div className="box">
          <div className="field">
            <p className="control">
              <input className="input" name="email" type="email" placeholder="Email"/>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <input className="input" name="password" type="password" placeholder="Password"/>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Login
              </button>
            </p>
          </div>
        </div>
        {
          <Link to="/SignUp">
              Sign Up!
            </Link>
        }
      </div>
    </form>);
  }
}

export default LogIn;
