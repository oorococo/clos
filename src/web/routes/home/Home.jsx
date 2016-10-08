import React, { Component } from 'react'
import { Link } from 'react-router'

export default class extends Component {
    componentDidMount() {
        setTimeout(() => {
            const swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                pagination: '.swiper-pagination',
                paginationBulletRender: (index, className) => `<span class=${className}>${index + 1}</span>`,
                paginationClickable: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // hashnav: true
            })
        }, 0)
    }

    render() {
        return (
            <div className="module-ctn">
                <style>
                    {'.swiper-container{width: 100%;height :100%}'}
                </style>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        abcddddsdfsadfssadfsfsdfsfsdfsdfsfsaf
                        <div className="swiper-slide home-slider-1">
                            <div>
                                <Link className="topbar-link" to="/i" activeClassName="active">浏览</Link>
                                <Link className="topbar-link" to="/portal/login" activeClassName="active">登录</Link>
                                <Link className="topbar-link" to="/portal/register" activeClassName="active">注册</Link>
                                <Link className="topbar-link" to="/music" activeClassName="active">音乐</Link>
                            </div>

                        </div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                        <div className="swiper-slide">Slide 4</div>
                        <div className="swiper-slide">Slide 5</div>
                    </div>
                    <div className="swiper-pagination">00</div>
                </div>
            </div>
        )
    }
}
