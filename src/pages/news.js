import React from 'react';
import { connect } from 'react-redux';
import Page from '../components/page';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { categoryFromPath } from '../utils';

class News extends Page {
  static get displayName() {
    return 'News';
  }

  get title() {
    const { name } = this.props;
    return `Menthas > ${name}`;
  }

  get content() {
    const { news } = this.props;
    if (news && news.status === 'done') {
      const { data: items } = news;
      return <List>
        {Object.values(items).map(item => (
          <ListItem primaryText={item.page.title} key={item._id} />
        ))}
      </List>;
    } else {
      return <List>
        <ListItem primaryText="Loading..." />
      </List>;
    }
  }
}

function select({ categories, newsByCategory }, { location }) {
  const { pathname } = location;
  const name = categoryFromPath(pathname);
  const news = newsByCategory[name];
  return { name, news };
}

export default connect(select)(News);
