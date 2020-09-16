import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'
import {createAction} from '../../Redux/Action'
import { KEYWORD } from '../../Redux/Action/type';
import { NavLink } from 'react-router-dom';
import '../../Sass/main.scss'
import { SreachSanPham } from '../../Redux/Action/product';
class index extends Component {
    constructor(props){
        super(props)
        this.state={
            keyWord : "",
        }
    }
    onChane = (e)=>{
        let input = e.target;
        this.setState({
            [input.name] : input.value
        },()=>{
            
        })
    }
    onClick = ()=>{
        this.props.dispatch(createAction(KEYWORD,this.state.keyWord))
        this.props.dispatch(SreachSanPham(this.state.keyWord))
    }
    render() {

        return (
            <>
                <div className="form-test">
                    <input type="text" className="input-test" name="keyWord" value={this.state.keyWord} onChange={this.onChane} id="text-input"  placeholder="Tìm sản phẩm, danh mục các thương hiệu mong muốn" />
                    <NavLink to="/sanpham" type="submit" onClick={this.onClick} className="btn test"><FontAwesomeIcon icon={faSearch} /> <span>Tìm kiếm</span></NavLink>
                </div>
            </>
        );
    }
}
const mapStateToProps = state =>({

})
export default connect(mapStateToProps) (index);