/** @jsx h */

import { h } from 'preact';

import { useState, useEffect, useContext } from 'preact/hooks';
import netlifyIdentity from "netlify-identity-widget";

import { UserContext } from '../contexts/UserContext';


const NetlifyAuth = () => {

  const context = useContext(UserContext);

  const loginUser = () => {
    if (netlifyIdentity && netlifyIdentity.currentUser()) {
      const {
        app_metadata, created_at, confirmed_at, email, id, user_metadata
      } = netlifyIdentity.currentUser();

      context.login({email: email});
      console.log("User logged in " + JSON.stringify({user : {email: email}}));
    }
  };


  const logoutUser = () => {
    context.logout();
    console.log("User logged out");
  };

  useEffect(() => {
    netlifyIdentity.on('login', () => loginUser());
    netlifyIdentity.on('logout', () => logoutUser());

    netlifyIdentity.init({
      container: '#netlify-modal'
    });
  }, []);

  return (
    <div id="netlify-modal">
        <button class="btn btn-main" onclick={() => netlifyIdentity.open()}>Login</button>
    </div>
  );

}

export default NetlifyAuth;
