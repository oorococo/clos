import React from 'react'
import {Link} from 'react-router'

class App extends React.Component {
    onClick() {
        console.log(44)
    }

    render() {
        const {children, location, ...props} = this.props
        return (
            <div className="module-ctn" style={{background: '#ddccee'}}>
                大概览

            </div>
        )
    }
}

export default App
