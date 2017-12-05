import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../styles/bulma.css';

class SignUp extends Component {
  render() {
    return (<form>
      <div className="container">
        <div className="box">
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="First Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Last Name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Email input"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input className="input" type="text" placeholder="Password"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox"/>&nbsp; I agree to the
                <a href="#">
                  &nbsp;terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button">Submit</button>
            </div>
						<div id="cancelButton">
            <div className="control">
              <Link to="/">Cancel</Link>
							</div>
            </div>
          </div>
        </div>
      </div>
    </form>);
  }
}

export default SignUp;
