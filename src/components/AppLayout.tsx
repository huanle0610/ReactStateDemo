import React from 'react';
import { Layout, Menu, ConfigProvider } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header, Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const location = useLocation(); // Get the current location for menu highlighting

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8763fd',
          colorInfo: '#8763fd',
        },
        components: {
          Layout: {
            headerBg: 'rgb(80,114,145)',
          },
          Menu: {
            darkItemBg: 'rgb(80,114,145)',
          },
        },
      }}
    >
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]} // Highlight the active menu item
          >
            <Menu.Item key="/">
              <Link to="/">Todo Page</Link>
            </Menu.Item>
            <Menu.Item key="/proportional-function">
              <Link to="/proportional-function">
                Proportional Function Page
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '16px' }}>{children}</Content>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
