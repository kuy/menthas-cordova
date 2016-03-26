import React from 'react';
import { connect } from 'react-redux';
import Page from '../components/page';

class About extends Page {
  static get displayName() {
    return 'About';
  }

  get title() {
    return 'About';
  }

  get content() {
    const { drawer } = this.props.app;
    return (
      <h1>About Menthas Mobile</h1>
    );
  }
}

function select({ app }) {
  return { app };
}

export default connect(select)(About);
