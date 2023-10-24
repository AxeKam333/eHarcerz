import IndexRouter from "../../routes/router";
import { Layout } from "antd";
import { MenuProps } from "antd"; 
import { Button, Dropdown } from 'antd';
const { Header, Content, Footer } = Layout;

import "./desktopstyle.css"

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_self" rel="noopener noreferrer" href="/troop/">
        Troop
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_self" rel="noopener noreferrer" href="/patrols/">
        Patrols
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_self" rel="noopener noreferrer" href="/scauts/">
        Scauts
      </a>
    ),
  },
];

const Opt = (props:any) =>{
  return(
    <Button type="text" onClick= { () => {window.open (props.html, '_self')}} style={{width:"100px"}} size="large">
          {props.text}
    </Button>
  )
}


export const DesktopLayout = () => {
    return (
      <>
        <Layout>
            <Header className="header" style={{backgroundColor:"#049da0"}}>
              <a href={"/"}>
              <div>
              </div>
              <div className="topbar">
                &nbsp;eHarcerz
              </div>
              </a>     
            </Header>
            <div className="container">
              < div className="menu_bar">
                {/* menu bar fits desktop layout, for smaller spaces delete space-evenly */}
                  <Dropdown menu={{ items }} placement="bottom">
                    <Button type="text" style={{width:"100px"}} size="large" onClick= { () => {window.open ("/troop/", '_self')}}>
                          Info
                    </Button>
                  </Dropdown>
                  {/* <Opt text="About us" html="/about/"/>
                  <Opt text="Cite us" html="/cite/"/>
                  <Opt text="Help" html="/help/"/> */}
              </div>
            </div>
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