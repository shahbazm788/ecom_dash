import {Tab, Tabs,Row, Col, Nav,Form, Button} from "react-bootstrap";
import { styled } from "styled-components";
import LoginTab from './LoginTab';
import RegistorTab from './RegistorTab';


// RegistorTab

const Login = () => {
  const Div = styled.div`
    width:33%;
    margin-left: 33%;
    
  `;
  return (
    <>
     <Div className="login_tabs">

      <Tabs
        defaultActiveKey="login"
        id="uncontrolled-tab-example"
        className="mb-3"
        >
        <Tab eventKey="login" title="Login">
         <LoginTab />
        </Tab>
        <Tab eventKey="registor" title="Registor">
          {/* <RegistorTab /> */}
        </Tab>
      </Tabs>
     </Div>
    </>
  )
}

export default Login