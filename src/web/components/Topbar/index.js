import React from 'react'
import {Link} from 'react-router'
import Style from './style'

class Topbar extends React.Component {
    render = () => {
        return (
            <div>
                <Style/>
                <div className="topbar">
                    <Link className="topbar-link" to="/" activeClassName="active">首页</Link>
                    <Link className="topbar-link" to="/passport" activeClassName="active">账户</Link>
                    <Link className="topbar-link" to="/passport/login" activeClassName="active">登陆</Link>
                    <Link className="topbar-link" to="/passport/register" activeClassName="active">注册</Link>
                    <Link className="topbar-link" to="/passport/profile" activeClassName="active">个人中心</Link>
                </div>
            </div>
        )
    }
}

export default Topbar
