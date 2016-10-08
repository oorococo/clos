import React from 'react'

const rule = `
  .topbar {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 9999;
    background-color: rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  
  .topbar-link {
    color: #fff;
    display: inline-block;
    padding: 3px 10px;
    text-decoration: none;
  }
  
  .topbar-link.active {
    color: #ff1493;
    border-bottom: 2px solid #ff1493;
  }
  
  @media screen and (max-width: 550px) {
    .topbar {
      background-color: rgba(0,0,0,.7);
      border-bottom: 1px solid rgba(0,0,0,.8);
    }
  }
`
export default () => <style dangerouslySetInnerHTML={{__html: rule}}/>
