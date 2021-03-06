import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Content } = Layout;

class DefaultContent extends React.Component {
  render() {
    const { content } = this.props;
    const Page = content;
    return (
      <Content className="layout-content">
        <main className={'content-header-visible'}>
          {<Page {...this.props} />}
        </main>
      </Content>
    );
  }
}

DefaultContent.propTypes = {
  content: PropTypes.func,
  contentName: PropTypes.string,
};

export default DefaultContent;
