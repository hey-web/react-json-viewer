import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
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
        <Header></Header>
        <main className={styles.AppBody}>
          <section className={styles.WorkSpace}>
            <a name="workspace"></a>
            <textarea spellCheck="false" onKeyUp={this.handleInput}>
            </textarea>
            <JsonViewer json={this.state.json}/>
          </section>
          <section className={styles.About}>
            <a name="about"></a>
            This is the about section
          </section>
          <section className={styles.Support}>
            <a name="support"></a>
            This is the support section
          </section>
          <section className={styles.Contact}>
            <a name="contact"></a>
            This is the contact section
          </section>
        </main>
      </main>
    );
  }
}

export default App;
