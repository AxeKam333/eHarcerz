import IndexRouter from "../../routes/router";
import { Layout, Menu, MenuProps } from "antd";
import { Button } from 'antd';
const { Header, Content, Footer } = Layout;

import "./desktopstyle.css"

const sites: MenuProps['items'] = [

  {
    key:'0',
    label: <a href="/view/" rel="noopener noreferrer">View</a>
  },
  {
    key:'1',
    label: <a href="/add/" rel="noopener noreferrer">Add</a>
  },
  {
    key:'2',
    label: <a href="/stats/" rel="noopener noreferrer">Statistics</a>
  },
  {
    key:'3',
    label: <a href="/contact/" rel="noopener noreferrer">Contact us</a>
  },
  {
    key:'4',
    label: <a href="https://stamps.zhr.pl/" target="_blank" rel="noopener noreferrer">Badges</a>
  },


]

export const DesktopLayout = () => {
    return (
      <>
        <Layout>
            <Header className="header"
            style={{
              backgroundColor:"#049da0",
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            >
              <a href={"/"} style={{padding:"25px"}}>
                <div className="logo_img">
                </div>
                <div className="site-name">
                  &nbsp;eHarcerz
                </div>
              </a>     
              <Menu theme="dark" style={{backgroundColor:"#049da0", width:"100%"}} mode="horizontal" items={sites} selectable={false} />

            </Header>
            <Content className="site-layout">
                <Layout>
                  <div>
                    <IndexRouter />
                  </div>
                </Layout>
            </Content>
            <Footer style={{textAlign:"center"}}>
                eHarcerz {new Date().getFullYear()} |{" "}
                <a href="https://github.com/AxeKam333" rel="noreferrer" className="github">
                    Aleksander Kamiński
                </a>
            </Footer>
        </Layout>
      </>
    );
  };