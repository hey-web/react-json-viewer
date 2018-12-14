import React, { Component } from 'react';
import styles from './App.module.scss';
import JsonViewer from './components/JsonViewer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {json: null};
  }

  handleInput = (e) => {
    let input = e.target.value;
    try{
      this.setState({json: JSON.parse(input)});
    }catch(e){
      //do nothing
    }
  }
  
  render() {
    
    return (
      <main className={styles.App}>
        <textarea spellcheck="false" onKeyUp={this.handleInput}>
        </textarea>
        <JsonViewer json={this.state.json}/>
      </main>
    );
  }
}

export default App;
