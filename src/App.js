// import logo from './logo.svg';
// import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <div className="App">
        Chat App With ChatKit
        <div>
          <MessageList />
          <CreateRoomForm />
          <MessageList.js />
          <SendMessageForm />
        </div>
        </div>
    );
  }
}

export default App;
