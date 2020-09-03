import React, { Component } from 'react';
import Slider from "react-slick";
import DanhSachPhim from '../../DanhSachMovie'
class index extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <>
                <div className="container">

                    <Slider {...settings}>
                        <div>
                            <img style={{ width: "100%" }} src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2020/08/11/132487.jpg" alt="" />
                        </div>
                        <div>
                            <img style={{ width: "100%" }} src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2020/06/15/0F9A77.jpg" alt="" />

                        </div>
                        <div>
                            <img style={{ width: "100%" }} src="https://images.tkbcdn.com/1/780/300/Upload/eventcover/2020/07/20/640AF3.jpg" alt="" />

                        </div>
                    </Slider>

                </div>
                <div className="container headingMovie">
                    <div className="title">
                        <img src="https://miniapp.ticketbox.vn/home-leftmovie-desktop.svg" />
                        <h3>Phim chiếu rạp</h3>
                        <div className="headingLine"></div>
                        <img src="https://miniapp.ticketbox.vn/home-rightmovie-desktop.svg" alt=""/>
                    </div>
                </div>
                <DanhSachPhim/>
            </>
        );
    }
}

export default index;