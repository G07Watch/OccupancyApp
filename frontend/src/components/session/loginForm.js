import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/session_actions';

export default () => {
  const dispatch = useDispatch();

  return (

    <React.Fragment>

      <div>
        <form>
          <input type="text" value="Email"></input>
          <input type="text" value= "Password"></input>

          <input type="submit"> Login </input>
        </form>
      </div>

    </React.Fragment>
  )
}