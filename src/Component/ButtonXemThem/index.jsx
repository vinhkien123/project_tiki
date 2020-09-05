import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createAction } from '../../Redux/Action';
import { FLAG } from '../../Redux/Action/type';
class index extends Component {
    flag = ()=>{
        this.props.dispatch(createAction(FLAG,true))
    }
    render() {
        return (
            <>
                <button className="btn btn-primary my-3" style={{ display: "flex", margin: "auto", transition: "0.5s all" }} onClick={this.flag}>Xem thêm</button>

            </>
        );
    }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(index);