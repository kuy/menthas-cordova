import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import { hideDrawer, toggleDrawer } from './actions';
import { browserHistory } from 'react-router'

class App extends Component {
  static get displayName() {
    return 'App';
  }

  handleChange(open) {
    this.props.dispatch(toggleDrawer(open));
  }

  handleMove(to) {
    browserHistory.push(to);
    this.props.dispatch(hideDrawer());
  }

  render() {
    const { drawer } = this.props.app;
    const { names } = this.props.categories;
    return (
      <div>
        {this.props.children}
        <LeftNav
          docked={false}
          open={drawer}
          onRequestChange={this.handleChange.bind(this)}
        >
          <MenuItem onTouchTap={() => this.handleMove('/')}>#top</MenuItem>
          {names.map(name =>
            <MenuItem onTouchTap={() => this.handleMove(`/categories/${name}`)} key={name}>{`#${name}`}</MenuItem>
          )}
          <Divider />
          <MenuItem onTouchTap={() => this.handleMove('/about')}>About</MenuItem>
        </LeftNav>
      </div>
    );
  }
}

function select({ app, categories }) {
  return { app, categories };
}

export default connect(select)(App);
