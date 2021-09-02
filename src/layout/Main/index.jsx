import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'

const Dashboard = () => import('@/pages/dashboard')  //参数一定要是函数，否则不会懒加载，只会代码拆分
const Task = () => import('@/pages/task')

export default class Main extends Component {
    render() {
        return (
            <Switch >
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/task" component={Task}></Route>
                <Redirect to="/dashboard" />
            </Switch>
        )
    }
}