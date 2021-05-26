import React from 'react';
import { Layout, List, Card, Button } from 'antd';
import MenuDouble from './MenuDouble';

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

export default function FirstLayout({ props }) {
  const { quizzes } = props;
  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            className="logo"
            style={{
              height: '32px',
              margin: '16px',
              background: 'rgba(255, 255, 255, 0.2)'
            }}
          />
          <MenuDouble />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={quizzes}
                renderItem={(quiz) => (
                  <List.Item>
                    <Card cover={<img alt={quiz.title} src={quiz.cover_img} />}>
                      <Meta title={quiz.title} description="" />
                      <Button type="primary">Play Now!</Button>
                    </Card>
                  </List.Item>
                )}
              />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Quizz Like ©2021 Created by Quizzes TERRA
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
