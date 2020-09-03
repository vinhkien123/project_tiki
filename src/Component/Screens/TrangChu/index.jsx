import React, { Component } from 'react';
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class index extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 4
        };
        return (
            <>
                <div className="container danhMuc">
                    <h2> DANH MỤC HOT </h2>
                    <div className="row">
                        <div className="col-2   elementDanhMuc">
                            <a href="#" className=" card rowDanhMuc">
                                <div className="image">
                                    <img src="https://salt.tikicdn.com/ts/category/93/27/e3/192b0ebe1d4658c51f9931bda62489b2.png" alt="" />
                                </div>
                                <p className="text-center">Điện Thoại - Máy Tính </p>
                            </a>

                        </div>
                        <div className="col-2   elementDanhMuc">
                            <a href="#" className=" card rowDanhMuc">
                                <div className="image">
                                    <img src="https://salt.tikicdn.com/ts/category/85/b8/4e/bda4f4c039daa5bb8e6ecdccd7875b08.png" alt="" />
                                </div>
                                <p className="text-center">Thiết Bị Số - Phụ Kiện Số</p>
                            </a>
                        </div>
                        <div className="col-2   elementDanhMuc">
                            <a href="#" className=" card rowDanhMuc">
                                <div className="image">
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/30/ee/5a/dbf45bb1609085f9de51b44e0546dda4.jpg" alt="" />
                                </div>
                                <p className="text-center">Sách Tôn Giáo - Tâm Linh</p>
                            </a>
                        </div>
                        <div className="col-2   elementDanhMuc">
                            <a href="#" className=" card rowDanhMuc">
                                <div className="image">
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/d5/e3/94/25155a809b340414ff5e193e2c638e01.jpg" alt="" />
                                </div>
                                <p className="text-center">Máy Tính Bảng</p>
                            </a>
                        </div>
                        <div className="col-2   elementDanhMuc">
                            <a href="#" className=" card rowDanhMuc">
                                <div className="image">
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/8e/c5/c3/9f680d49c05be61065c81a6e6fce4faa.jpg" alt="" />
                                </div>
                                <p className="text-center">Bài Học Kinh Doanh</p>
                            </a>
                        </div>
                        <div className="col-2   elementDanhMuc">
                            <a href="#" className=" card rowDanhMuc">
                                <div className="image">
                                    <img src="https://salt.tikicdn.com/cache/280x280/ts/product/eb/62/6b/0e56b45bddc01b57277484865818ab9b.jpg" alt="" />
                                </div>
                                <p className="text-center">Sách Kỹ Năng Sống</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container Sclick">
                    <h2> TỪ KHÓA HOT</h2>
                    <Slider {...settings}>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>iphone 11</p>
                                </a>
                            </div>

                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>điện thoại</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>android</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>loa bluetooth</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>sạc dự phòng</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>đồng hồ </p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>tai nghe</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>bao tay </p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>airpod</p>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>anker</p>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="element">
                                <a className="keywords" href="#" style={{ backgroundColor: 'rgb(22, 112, 46)' }}>
                                    <p>xiaomi</p>
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </>

        );
    }
}

export default index;