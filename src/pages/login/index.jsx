import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './index.scss'

/**
 * 登录组件
 */
export default class Login extends Component {
    render() {
        const onFinish = (values) => {
            this.props.history.push('/')
        }

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        }
        return (
            <div className="container">
                <div className="name">React + Antd + Vite</div>
                <Form
                    className="login-form"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input autoComplete="true" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password autoComplete="true" />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" onClick={this.login}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}