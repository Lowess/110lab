/** @jsx h */

import { h } from 'preact';
import { useContext } from 'preact/hooks';

import { UserContext } from '../../contexts/UserContext';

const SignOut = () => {
  const context = useContext(UserContext);
  const { user } = context.user;

  return (
    <div class="flair-signout">
      <button
        class="btn btn-secondary"
        onClick={() => context.logout()}
      >
      <small>Logout {user.email}</small>
      </button>
      <hr />
    </div>
  );
}

export default SignOut;