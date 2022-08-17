import { Breadcrumb, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import FlowContainer from '../FlowContainer/FlowContainer'
import { menuItems } from './app-layout.constant'

const { Header, Content, Footer, Sider } = Layout

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Header />
        <Menu defaultSelectedKeys={['1']} mode='inline' items={menuItems} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <FlowContainer />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Flower ©2022 Created by github.com/emrerenjs
        </Footer>
      </Layout>
    </Layout>
  )
}
