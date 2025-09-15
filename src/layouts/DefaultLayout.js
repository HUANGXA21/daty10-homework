import { NavLink, Outlet } from "react-router";
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

export function DefaultLayout() {
    return (
        <Layout className="layout-container">
            <Header className="header-container">
                <Menu
                    mode="horizontal"
                    className="nav-menu"
                >
                    <Menu.Item key="home" className="menu-item">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="done" className="menu-item">
                        <NavLink to="/todos/done" className="nav-link">Done</NavLink>
                    </Menu.Item>
                    <Menu.Item key="about" className="menu-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content className="content-container">
                <Outlet />
            </Content>
        </Layout>
    );
}