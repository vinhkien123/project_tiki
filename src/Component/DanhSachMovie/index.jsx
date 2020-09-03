import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DanhSachPhim} from '../../Redux/Action/movie';
class index extends Component {
    render() {  
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount(){
        this.props.dispatch(DanhSachPhim())
    }
}



const mapStateToProps = state =>({
    danhSachPhim : state.movieReducers.danhSachPhim
})
export default connect(mapStateToProps)(index);