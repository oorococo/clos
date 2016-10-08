import React from 'react'
import {Link} from 'react-router'

export default () => (
    <div className="module-ctn" style={{background: 'lightyellow'}}>
        <Link className="topbar-link" to="/wander" activeClassName="active">返回</Link>
        <div><input type="text" placeholder="账户"/></div>
        <div><input type="text" placeholder="密码"/></div>
        <div>
            <button>登陆</button>
        </div>
    </div>
)
