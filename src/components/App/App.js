import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>To Do List in React</h1>
        <h2 className={styles.subtitle}>May the procrastination force be with you!!!</h2>
        <List title={['Things to do ', <sup key='1'>someday ;)</sup>]} img={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"}  />
      </main>
    )
  }
}

export default App;
