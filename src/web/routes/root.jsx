import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {
    state = {
        direction: 'right',
    }

    componentWillReceiveProps(newProps) {
        const direction = newProps.routes.map(v => v.path)
        .filter(v => v !== undefined).length < this.props.routes.map(v => v.path)
        .filter(v => v !== undefined).length
        ? 'right'
        : 'left'
        this.setState({ direction })
    }

    render() {
        const { children, location, ...props } = this.props
        return (
            <div className="app-ctn">
                <ReactCSSTransitionGroup
                    component="div"
                    className="page-transition-ctn"
                    transitionName={`page-ctn-${this.state.direction}`}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
                >
                    {React.cloneElement(children, {
                        key: location.pathname.split('/')[0] || 'root',
                        ...props,
                    })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default App
