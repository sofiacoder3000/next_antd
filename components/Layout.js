import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

ReactDOM.render(
  <>
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>,
  mountNode,
);