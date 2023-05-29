import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

export default function Login () {
    
  return (
    <Form style={{marginLeft:100, marginRight:1000, marginTop: 100}}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      //onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Хэрэглэгчийн нэр" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Нууц үг"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Сануулах</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Нууц үг сэргээх
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: 8}}>
          Нэвтрэх
        </Button>
         эсвэл <a href="./sign-up">бүртгүүлэх!</a>
      </Form.Item>
    </Form>
  ); 
};
