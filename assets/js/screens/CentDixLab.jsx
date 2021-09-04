/** @jsx h */

import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Router from 'preact-router';

import { UserProvider } from '../contexts/UserContext';
import Dashboard from './Dashboard';
import NetlifyAuth from './NetlifyAuth';

import netlifyIdentity from "netlify-identity-widget";

const CentDixLab = () => {
  const [user, setUser] = useState(null)

  const login = (user) => {
    console.log("[CentDixLab] Login");
    setUser({user})
    console.log(user);
  }

  const logout = () => {
    netlifyIdentity.logout();
    setUser({ user: null })
  }

  // Equivalent to componentDidMount
  useEffect(() => { }, [
    user
  ]);

  // If user authenticated then
  return (
    // Wrap user context passed down to children
    <div class="110lab">
      <UserProvider value={{ user: user, login: login, logout: logout}}>
        { user ?
            <Router>
              <Dashboard path="/portal/:rest*" />
            </Router>
          : <NetlifyAuth/>
        }
      </UserProvider>
    </div>
  );
}

export default CentDixLab;