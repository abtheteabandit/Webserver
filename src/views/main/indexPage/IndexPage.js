import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';
import Header from 'components/Header/Header'
import Bar from 'components/Navbar/Navbar'

export class IndexPage extends React.Component {
  render() {
    return (
      <div id='page' className={styles.wrapper}>
      <Header />
      <Bar />
      <div className={styles.content}>
        <h1>Hello from Home.me</h1>
        <p className={styles.padding}>
          We are helping homeless people.
        </p>
        <p>
          <Link to="about">About</Link>
        </p>
        <p>
          <a id="form" href="form" className={styles.formBtn} >
            Find the shelter
          </a>
        </p>
      </div>
      </div>
    )
  }
}

export default IndexPage;
