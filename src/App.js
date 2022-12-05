import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import awsExports from './aws-exports';
import { isEmpty } from './util';
Amplify.configure(awsExports);

function App({signOut,user}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          こんにちは{user?.username}
          {console.log(user.username)}
        </div>
        {!isEmpty(user) && (
          <>
          <button onClick={signOut} >サインアウト</button>
          </>
        ) }
      </header>
    </div>
  );
}

export default withAuthenticator(App);
