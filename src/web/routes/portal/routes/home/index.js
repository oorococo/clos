import React from 'react'

class App extends React.Component {

    render() {
        const { children, location, ...props } = this.props
        return (
            <div className="module-ctn" style={{ background: '#ddccee' }}>
                大概览
            </div>
        )
    }
}

export default App
