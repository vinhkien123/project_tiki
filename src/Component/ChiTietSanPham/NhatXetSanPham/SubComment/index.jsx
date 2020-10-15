import React, { Component } from 'react';
import Comment from '../Comment'
import { connect } from 'react-redux'
import { LayDanhSachBinhLuanCon } from '../../../../Redux/Action/product';
import { Spin } from 'antd';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    render() {
        // <div className={`review d-flex ${this.state.loading ? `opacityText` : ""}`} key={index}>
        //         <div className="info-user d-flex text-center">
        //             <div className="avatar">
        //                 <p className="icon-avatar d-flex align-items-center justify-content-center">MC</p>
        //                 <p className="username">aaaaa</p>
        //                 <p className="text">asfasfaf</p>
        //             </div>
        //         </div>
        //         <div className="information">
        //                 <Comment item={this.props.item} IdComment={this.props.IdComment} IdProduct={this.props.IdProduct}/>
        //         </div>
        //     </div>
        return (

            <div className="position">
                <div className={`example ${this.state.loading ? `opacityLoading` : ""}`} style={{}}>
                    <Spin />
                </div>
                {
                    // elmentBinhLuan
                }

            </div>
        );
    }
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {

            this.props.dispatch(LayDanhSachBinhLuanCon(this.props.IdProduct, this.props.IdComment, user.token))

        }
    }
}

const mapStateToProps = state => ({
    layDanhSachBinhLuanCon: state.productReducers.danhSachBinhLuanCon
})
export default connect(mapStateToProps)(index);