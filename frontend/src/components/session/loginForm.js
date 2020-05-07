import React from 'react';
import { useState, useDispatch } from 'react-redux';
import { login } from '../../actions/session_actions';

export default () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  return (

    <React.Fragment>

      <div>
        <form onSubmit= {dispatch(login(
          {email: email,
            password: password
          } 
        ))}>
          <input type="text" value="Email"></input>
          <input type="text" value= "Password"></input>

          <input type="submit"> Login </input>
        </form>
      </div>

    </React.Fragment>
  )
}