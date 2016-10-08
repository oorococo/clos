import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {

    state = {
        direction: 'left',
    }

    componentWillReceiveProps(newProps) {
        const pathOrder = ['login', 'register', 'profile']
        const path = newProps.routes.map(v => v.path).filter(v => v !== undefined)[2]
        const oldPath = this.props.routes.map(v => v.path).filter(v => v !== undefined)[2]
        if (pathOrder.indexOf(path) > pathOrder.indexOf(oldPath)) {
            this.setState({
                direction: 'left',
            })
        } else if (pathOrder.indexOf(path) < pathOrder.indexOf(oldPath)) {
            this.setState({
                direction: 'right',
            })
        } else {
            this.setState({
                direction: '',
            })
        }
    }

    render() {
        const { children, location, ...props } = this.props
        return (
            <div className="module-ctn">
                <div className="wander-topbar">
                    <i className="fa fa-user" />
                    <Link className="topbar-link" to="/" activeClassName="active">返回</Link>
                    <Link className="topbar-link" to="/portal" activeClassName="active">所有</Link>
                    <Link className="topbar-link" to="/portal/login" activeClassName="active">登录</Link>
                    <Link className="topbar-link" to="/portal/register" activeClassName="active">注册</Link>
                    <Link className="topbar-link" to="/portal/profile" activeClassName="active">用户中心</Link>
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    className="page-transition-ctn"
                    transitionName={`page-ctn-${this.state.direction}`}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
                >
                    {
                        React.cloneElement(children, {
                            key: location.pathname.split('/')[1] || 'portal/root',
                            ...props,
                        })
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default App
