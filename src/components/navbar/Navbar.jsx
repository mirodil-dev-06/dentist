import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Layout, Menu, Divider } from 'antd';
import { HomeOutlined, AppstoreOutlined, ReadOutlined, DollarOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';
import './Navbar.scss';
import { Container } from '../../utils/Container'

const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Container>
        <Header className="navbar">
          <div className="logo">
            <Link to='/'><img src={logo} alt="logo" className='navbar__logo' /></Link>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <NavLink to='/'>Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <NavLink to='/services'>Services</NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<ReadOutlined />}>
              <NavLink to='/blogs'>Blogs</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<DollarOutlined />}>
              <NavLink to='/price'>Price</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
      </Container>
      <Divider />
    </>
  );
};

export default Navbar;
