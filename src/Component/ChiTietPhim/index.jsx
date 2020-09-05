import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChiTietPhim } from '../../Redux/Action/movie';
import Swal from 'sweetalert2';
import { Rotate, Flip } from 'react-reveal';
class index extends Component {
    play = (iframe) => {
        Swal.fire({
            position: 'center',
            title: iframe,
            showConfirmButton: false,
            timer: 0
        });
    }

    render() {
        console.log(this.props, "???");

        return (
            <>
                <div className="container-fuild contenta " >

                    <div className="img">
                        <img src={this.props.chiTietPhim.img} alt="" />
                    </div>
                    <div className="bg" >

                    </div>
                    <div className="item">

                        <div className="row">
                            <div className="col-4 image">
                                <Rotate top left>
                                    <img src={this.props.chiTietPhim.img} />

                                </Rotate>
                            </div>
                            <div className="col-6 ne pl-5 ">
                                <Rotate top right>
                                    <h1> {this.props.chiTietPhim.tenPhim}</h1>
                                    <h4>Thể loại : {this.props.chiTietPhim.theLoai}</h4>
                                    <p className="text py-3">Đánh giá phim <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
                                    <button className="btn btn-success  play" onClick={() => this.play(this.props.chiTietPhim.iframe)}><i class="fa fa-play"></i> Trailer</button>

                                    <button className="btn btn-success ml-4">Mua vé</button>

                                </Rotate>
                            </div>
                        </div>
                        <Flip bottom>
                            <h2 className="text-white my-3">Thông tin phim</h2>
                            <p className="text-white">{this.props.chiTietPhim.moTa}</p>
                        </Flip>

                    </div>

                </div>
            </>
        );
    }
    componentDidMount() {
        this.props.dispatch(ChiTietPhim(this.props.match.params.id))
    }
}

const mapStateToProps = state => ({
    chiTietPhim: state.movieReducers.chiTietPhim
})
export default connect(mapStateToProps)(index);