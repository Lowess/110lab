/** @jsx h */

import { h } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';

// Contexts
import { UserContext } from '../contexts/UserContext';

import SignOut from '../components/NetlifyAuth/SignOut';


const Dashboard = () => {

  const context = useContext(UserContext);

  const { user } = context.user;

  useEffect(() => {
    console.log(user);
  }, []);

  return user ? (
    <div class="container">
      <h4>
        Hello <small>{user.email} <SignOut /></small>
      </h4>
      Something
    </div>
  ) : (
    <div>
      <h1>No user</h1>
    </div>
  );
}

export default Dashboard;