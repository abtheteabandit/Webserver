import React, { PropTypes as T } from 'react';
import {Link} from 'react-router';

import styles from './styles.module.css';
import Header from 'components/Header/Header'
import Bar from 'components/Navbar/Navbar'
import ProgressBar from 'react-bootstrap/lib/ProgressBar'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

var formHidden = false
var now = 60

export class IndexPage extends React.Component {
  render() {
    return (
      <div id='page' className={styles.wrapper}>
      <Header />
      <Bar />
      <div className={styles.content}>
        <h1>Hello from Home.me</h1>
        <p className={styles.padding}>
          We help the homeless find shelters.
        </p>
        <p>
          <a id='formBtn' onClick='enableForm()' className={styles.formBtn} >
            Home ME!
          </a>
          <script>
            function enableForm(){
              //TODO: enable the form
            }
          </script>
        </p>
        <div id='form' className={styles.form}>
          <ProgressBar striped bsStyle='info' now={now} label={`${now}%`} />
          <h1>This is a basic description of what this form is intended for (an
            emergency housing form that fields and ranks what you ll see).
            Answer the questions HONESTLY.</h1>
          <form bsClass='form-group'>
            <FormGroup>
              <ControlLabel>Static text</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>
          </form>
        </div>
        <p>
          <Link to="about">About</Link>
        </p>
        <p>
        Blah blah blah
        </p>
      </div>
      </div>
    )
  }
}

export default IndexPage;
