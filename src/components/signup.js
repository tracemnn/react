import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';



export default function SignUp () {
    
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Нэр" />
      </Form.Item>
      <Form.Item
        name="lastname"
        rules={[{ required: true, message: 'Please input your Lastname!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Овог" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Е-мэйл хаяг" />
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
        <Button type="primary" htmlType="submit" className="login-form-button">
          Бүртгүүлэх
        </Button>
        
      </Form.Item>
      Хэрэв бүртгэлтэй хэрэглэгч бол <a href="./sign-in">энд дарна уу!</a>
    </Form>
  ); 
};
