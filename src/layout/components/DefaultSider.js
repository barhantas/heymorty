import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { ROUTES } from '../../routes';

const { Sider } = Layout;

class DefaultSider extends React.Component {
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
    const { collapsed } = this.state;
    const lastPath = window.location.pathname;
    return (
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sider-collapser">
          <Icon
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggleSider}
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[lastPath]}>
          {ROUTES.map((route) => (
            <Menu.Item key={route.path}>
              <Link to={route.path}>
                <Icon type={route.icon} />
                <span>{route.name}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    );
  }
}

DefaultSider.propTypes = {};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultSider);
