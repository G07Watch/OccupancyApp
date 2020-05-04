import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/session_actions';

export default () =>{
  const dispatch = useDispatch();

  return (
    
    <React.Fragment>

      <div>

        <form method="post" onSubmit="">

          <input type="text" value="Organization Name"></input>
          <input type="text" value="Email"></input>
          <input type="text" value="Address"></input>
          <input type="text" value="Password"></input>
          <input type="text" value="Confirm Password"></input>
          <input type="text" value="Maximum Building Occupancy"></input>
          <input type="text" value="Current Building Occupancy"></input>
         

          <input type="submit"> Register </input>

        </form>

      </div>

    </React.Fragment>

  )
}