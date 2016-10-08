import React from 'react'
import {Link} from 'react-router'

export default () => (
    <div className="module-ctn" style={{background: 'pink'}}>
        <Link className="topbar-link" to="/wander" activeClassName="active">返回</Link>
        <Link className="topbar-link" to="/" activeClassName="active">返回coco</Link>
        <Link className="topbar-link" to="/music" activeClassName="active">到Music</Link>
        <Link className="topbar-link" to="/music/login" activeClassName="active">到Music Login</Link>
        等露页面
    </div>
)
