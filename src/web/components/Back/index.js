import React from 'react'
import {browserHistory} from 'react-router'

export default ({children, ...props}) => <a href="javascript:;" onClick={() => {
    browserHistory.goBack()
}} {...props}>{children}</a>
