import React, { Component } from 'react';

class index extends Component {
    render() {
        return (
            <div className="dangKyBanHang">
                <div className=" bgWhite text-center">
                    <form action="" className="py-4 formDangKy">
                        <h4 className="h3">Đăng ký bán hàng cùng QT-Data</h4>
                        <p className="mt-2">Cảm ơn đối tác đã tin tưởng và lựa chọn đồng hành cùng QT-Data!
                    Vui lòng hoàn tất thông tin để tạo tài khoản đăng nhập Trung Tâm Bán Hàng - QT-Data Seller Center.</p>
                        <div className="allForm">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Họ và tên chủ cửa hàng : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <input className="form-control" type="text" placeholder="Nguyễn Văn A" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Số điện thoại chủ cửa hàng : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <input className="form-control" type="text" placeholder="0123456789" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Địa chỉ email của chủ hàng : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <input className="form-control" type="text" placeholder="Sử dụng để đăng nhập admin bán hàng" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Mật khẩu : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <input className="form-control" type="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Tên cửa hàng : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <input className="form-control" type="text" placeholder="Cửa hàng của tôi" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Doanh nghiệp của bạn đã có giấy phép kinh doanh chưa ? : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <input className="" type="radio" />
                                    <span className="ml-2">Đã có</span>
                                    <input className="ml-4" type="radio" />
                                    <span className="ml-2">Chưa có</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Mã số đăng ký kinh doanh : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <input className="form-control" type="text" placeholder="Mã số" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Tỉnh/thành phố : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <select name="" className=" form-control" id="">
                                        <option value="">Tỉnh/Thành phố</option>
                                        <option value="">Hồ Chí Minh</option>
                                        <option value="">Hà Nội</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor=""><b>Chọn ngành hàng : </b></label>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <select name="" className=" form-control" id="">
                                        <option value="">Chọn ngành hàng</option>
                                        <option value="">Công nghệ</option>
                                        <option value="">Thời trang</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-4">Đăng ký bán hàng</button>
                        <p className="my-4">
                            Bằng cách gửi đơn đăng ký của bạn, bạn đồng ý với <a href="">Thỏa thuận dịch vụ</a> của chúng tôi
                            và xác nhận rằng thông tin bạn cung cấp đã hoàn chỉnh và chính xác.
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default index;