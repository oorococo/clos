import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {

    state = {
        direction: 'left',
    }

    componentWillReceiveProps(newProps) {
        const pathOrder = ['genre', 'artist', 'album']
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
                    <i className="fa fa-user"></i>
                    <Link className="topbar-link" to="/" activeClassName="active">返回</Link>
                    <Link className="topbar-link" to="/music" activeClassName="active">所有</Link>
                    <Link className="topbar-link" to="/music/genre" activeClassName="active">风格</Link>
                    <Link className="topbar-link" to="/music/artist" activeClassName="active">艺术家</Link>
                    <Link className="topbar-link" to="/music/album" activeClassName="active">专辑</Link>
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
                            ...props,
                        })
                    }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default App
