import { Breadcrumb, Layout, theme } from 'antd';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const LayoutComponent = () => {
  const navigate = useNavigate()
  const {
    token: { colorBgContainer },
  } = theme.useToken();



  const hanldeClickGoToTodoPageAdmin = ()=> {
    navigate("/user/todos")
  }

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        
        <Link to={"/user"}>user home page </Link>

        <NavLink to={"/admin"} >admin home page </NavLink>

        <div onClick={hanldeClickGoToTodoPageAdmin} style={{
          color:"white"
        }}>
          todo admin page
        </div>

      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet></Outlet>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default LayoutComponent;