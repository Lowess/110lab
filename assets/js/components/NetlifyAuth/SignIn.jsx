/** @jsx h */

import { h } from 'preact';
import { Auth } from '@aws-amplify/auth';
import { FaGoogle, FaAws } from 'react-icons/fa';


const SignIn = () => {
  return (

    <div class="w-50 mx-auto card">
      <div class="card-body">
        <h1 class="animate__animated animate__fadeIn">Custom Segment Login</h1>
        <hr />
        <button
          class="btn btn-danger w-100"
           onClick={() => Auth.federatedSignIn({provider: 'Google'})}
        >
          <FaGoogle /> Signin with Google
        </button>
        <hr />
        <button
          class="btn btn-default w-100"
           onClick={() => Auth.federatedSignIn()}
        >
          <FaAws /> Sigin with AWS Web UI
        </button>
      </div>
    </div>
  );
}

export default SignIn;