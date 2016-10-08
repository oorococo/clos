import React from 'react'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {

    state = {
        direction: 'left'
    }

    componentWillReceiveProps(newProps) {
        const pathOrder = ['login', 'register', 'profile']
        const path = newProps.routes.map(v => v.path).filter(v => v !== undefined)[2]
        const oldPath = this.props.routes.map(v => v.path).filter(v => v !== undefined)[2]
        console.log(path)
        console.log(pathOrder.indexOf(oldPath), pathOrder.indexOf(path))
        if (pathOrder.indexOf(path) > pathOrder.indexOf(oldPath)) {
            this.setState({
                direction: 'left'
            })
        } else if (pathOrder.indexOf(path) < pathOrder.indexOf(oldPath)) {
            this.setState({
                direction: 'right'
            })
        } else {
            this.setState({
                direction: ''
            })
        }
    }

    render() {
        console.log(this.state.direction)
        const {children, location, ...props} = this.props
        return (
            <div className="module-ctn">
                <div className="wander-topbar">
                    <i className="fa fa-user"></i>
                    <Link className="topbar-link" to="/" activeClassName="active">返回</Link>
                    <Link className="topbar-link" to="/i" activeClassName="active">所有</Link>
                    <Link className="topbar-link" to="/i/login" activeClassName="active">音乐</Link>
                    <Link className="topbar-link" to="/i/register" activeClassName="active">色彩</Link>
                    <Link className="topbar-link" to="/i/profile" activeClassName="active">视频</Link>
                    <Link className="topbar-link" to="/portal/login" activeClassName="active">登录</Link>
                    <Link className="topbar-link" to="/portal/register" activeClassName="active">注册</Link>
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
                            key: location.pathname.split('/')[1] || 'wander/root',
                            ...props
                        })
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default App
