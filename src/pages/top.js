import React from 'react';
import { connect } from 'react-redux';
import Page from '../components/page';

class Top extends Page {
  static get displayName() {
    return 'Top';
  }

  get content() {
    const { drawer } = this.props.app;
    return (
      <h1>Hello Menthas</h1>
    );
  }
}

function select({ app }) {
  return { app };
}

export default connect(select)(Top);
