import React from 'react';
import { Layout } from 'antd';
import headerLogo from '../../assets/header-logo.png';

const { Header } = Layout;

class DefaultHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.toggleSider = this.toggleSider.bind(this);
  }

  toggleSider() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <Header className="header">
        <img className="header-logo" alt="header-logo" src={headerLogo} />
        The Schwiftiest App !
      </Header>
    );
  }
}

DefaultHeader.propTypes = {};

export default DefaultHeader;
