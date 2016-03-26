import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import { showDrawer } from '../actions';

export default class Page extends Component {
  static get displayName() {
    return 'Page';
  }

  handleShowDrawerMenu() {
    this.props.dispatch(showDrawer());
  }

  get title() {
    return 'Menthas';
  }

  get content() {
    return null;
  }

  render() {
    return (
      <div>
        <AppBar
          {...this.appBarProps}
          title={this.title}
          onLeftIconButtonTouchTap={this.handleShowDrawerMenu.bind(this)}
        />
        {this.content}
      </div>
    );
  }
}
