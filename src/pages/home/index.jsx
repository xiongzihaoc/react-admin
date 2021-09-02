import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import './index.scss'
// 布局组件
import HeaderBar from '@/layout/HeaderBar'
import SiderNav from '@/layout/SiderNav'
// import Main from '@/layout/Main'
// 页面组件
import Task from '@/pages/task'
import Dashboard from '@/pages/dashboard'

const { Sider, Header, Content } = Layout
/**
 * Home组件
 */
export default class Home extends Component {
    render() {
        return (
            <Layout style={{ height: "100%" }}>
                <Sider>
                    <SiderNav />
                </Sider>
                <Layout>
                    <Header className="header"><HeaderBar /></Header>
                    <Content>
                        <Switch >
                            <Route path="/dashboard" component={Dashboard}></Route>
                            <Route path="/task" component={Task}></Route>
                            <Redirect to="/dashboard" />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
