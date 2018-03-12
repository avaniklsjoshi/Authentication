import React from 'react';
import Greetings from './Greetings';
import { hot } from 'react-hot-loader'

class App extends React.Component{
  render(){
    return(
      <h1>Hi!!</h1>
      // <Greetings>From React..</Greetings>
    );
  }
}
export default hot(module)(App);
