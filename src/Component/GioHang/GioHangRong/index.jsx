import React, { Component } from 'react';
import Model from '../../Model';
import { connect } from 'react-redux'
class index extends Component {
    componentDidMount() {
        document.body.scrollTop = 0;
        // or
        window.scrollTo(0, 0);
    }
    render() {
        const user = localStorage.getItem('user')
        return (
            <>
                <div className="container text-center gioHang my-5">
                    <h2 className="title text-left"> Giỏ hàng <span>(0 Sản phẩm)</span></h2>
                    <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" className="my-3" width={190} alt="test" />

                    {this.props.login == true || user ?
                        <>
                            <p className="text-center mb-3">Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                            <a href="/" className="btn btn-warning mt-5">Tiếp tục mua sắm</a>
                        </>
                        :
                        <>
                            <p className="text-center mb-3">Vui lòng đăng nhập để mua hàng.</p>


                            <Model />

                        </>

                    }

                </div>
            </>

        );
    }
}
const mapStateToProps = state => ({
    login: state.userReducers.login
})
export default connect(mapStateToProps)(index);