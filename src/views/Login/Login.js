import React, { useState } from "react";
import { Row, Col } from "antd";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { Button, FormWrapper, FormInput, Content, ImageWrapper } from "./LoginStyles.js"
import Header from "../../components/Header/Header"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const SvgIcon = <img src={`/img/svg/login.svg`} width="70%" height="70%" alt="" />;
  const navigate = useNavigate();

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Username:" + username);
    console.log("Password:" + password);
    if (validateForm()) { navigate("/details") }
    else { alert("Username/Password cannot be empty!") };
  }

  return (
    <Row>
      <Header />
      <Row>
        <Col span={12}>
          <FormWrapper>
            <Row justify="center">
              <Content>
                Login Page
              </Content>
            </Row>
            <Row justify="center">
              <Form onSubmit={handleSubmit}>
                <FormInput>
                  <Form.Group controlId="username">
                    <Form.Control
                      autoFocus
                      size="lg"
                      type="username"
                      value={username}
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                </FormInput>

                <FormInput>
                  <Form.Group controlId="password">
                    <Form.Control
                      size="lg"
                      type="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </FormInput>

                <Button type="submit" valid={validateForm()}>
                  Login
                </Button>
              </Form>
            </Row>
          </FormWrapper>
        </Col>
        <Col span={12} >
          <ImageWrapper>
            {SvgIcon}
          </ImageWrapper>
        </Col>
      </Row>
    </Row>
  );
}