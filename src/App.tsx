import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GetUserInfoByIdRequest, GetUserInfoResponse } from './proto/account_pb';
import { AccountClient } from './proto/AccountServiceClientPb';
import { Error } from 'grpc-web';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <button onClick={this.handleClick}>Click to invoke grpc method</button>
      </div>
    );
  }
  /**
   * 
   */
  private handleClick = () => {

    // prepare the request
    const request = new GetUserInfoByIdRequest();
    request.setUid('1');

    // create client instance
    const client = new AccountClient('', {}, {});
    // invoke the method of client
    client.getUserInfoById(request, {}, (err: Error, response: GetUserInfoResponse) => {
      // check if error 
      if (err) {
        return;
      }

      // retrieve user from response
      const user = response.getUser();
    });
  }
}

export default App;
