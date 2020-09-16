import React, { Component } from 'react';
import {connect} from 'react-redux'
import { KEYWORD } from '../../../../Redux/Action/type';
class index extends Component {
    
    constructor(props){
        super(props)
        this.state={
            keyWord : ""
        }
    }
    onChange = (e) => {


        this.setState({
            [e.target.name]: e.target.value,
        }, () => {

        })

    }
    onClick = () =>{
        this.props.dispatch(KEYWORD,this.state.keyWord)
        this.props.dispatch()
    }
    render() {
        return (
            <div className="form-group row">
                <div className="col-10">
                    <input onChange={this.onChange} name="keyWord" type="text" className="form-control" placeholder="Nhập vào tên hoặc sản phẩm cần tìm ..." />
                </div>
                <div className="col-2">
                    <button onClick={this.onClick} className="btn btn-success">Tìm</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps) (index);