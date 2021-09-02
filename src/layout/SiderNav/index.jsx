import React, { Component } from 'react'
import { Menu } from 'antd'
import {Link} from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import './index.scss'

const { SubMenu } = Menu;

/**
 * 侧边栏组件
 */
export default class SiderNav extends Component {
    handleClick = e => {
        console.log('click ', e);
    };
    render() {
        return (
            <div className="siderNav">
                <Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                        <Menu.Item key="dashboard">
                            <Link to="dashboard">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="task">
                            <Link to="task">工作计划</Link>
                        </Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
