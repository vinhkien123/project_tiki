import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { ThemSanPham } from '../../../../../Redux/Action/product';
const schema = yup.object().shape({
    Name: yup.string().required("Vui lòng không bỏ trống"),
    Price: yup.number().required("Vui lòng không bỏ trống"),
    Image: yup.string().required("Vui lòng không bỏ trống"),
    DetailedDescription: yup.string().required('Vui lòng không bỏ trống'),

})
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            userAccountData: {
                userid: '',
                useravtar: '',
                attachement_id: '',
            }
        }
    }
    handleFileUpload = (event) => {
        this.setState({ useravtar: event.currentTarget.files[0] },()=>{
            console.log(this.state)
        })
    };
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <>



                <Formik onSubmit={(value) => {
                    value.ImageList.push(value.Image)
                    
                    ThemSanPham(value)
                }}
                    initialValues={{

                        Name: "",
                        IdUser: "5f5f3a4b394537001728c385",
                        IdShop: "5f5f3a4b394537001728c385",
                        IdCategory: "5f5f3a4b394537001728c385",
                        IdCategorySub: "5f5f3a4b394537001728c385",
                        Price: "",
                        Model: "Iphone",
                        Image: "",
                        ImageList: [],
                        DetailedDescription: "",
                        Sale: "",
                        StatusSale: false,
                        ExpirationDateSale: "",
                        soLuongBan: 0,

                    }}
                    validationSchema={schema}
                    render={(formikProps) => {
                        return (
                            <>
                                <h3 className="text-primary text-center">Thêm sản phẩm</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Tên sản phẩm : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" type="text" name="Name" />
                                    </div>
                                    <ErrorMessage name="Name">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Giá sản phẩm : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Price" />
                                    </div>
                                    <ErrorMessage name="Price">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>

                                    <div className="form-group">
                                        <label > Mô tả : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="DetailedDescription" />
                                    </div>
                                    <ErrorMessage name="DetailedDescription">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Link hình : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Image" />
                                    </div>
                                    <ErrorMessage name="Image">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <Step1
                                        currentStep={this.state.currentStep}
                                        handleChange={this.handleChange}
                                        file={this.state.useravtar}
                                        handleFileUpload={this.handleFileUpload}
                                    />
                                    <div className="form-group">
                                        <label > Giá giảm : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="Sale" />
                                    </div>
                                    <div className="form-group">
                                        <label > Ngày hết hạn giảm giá : </label>
                                        <Field className="form-control" type="date" onChange={formikProps.handleChange} name="ExpirationDateStatusSale" />
                                    </div>
                                    <div className="form-group">
                                        <label > Số lượng bán giảm giá : </label>
                                        <Field className="form-control" type="text" onChange={formikProps.handleChange} name="soLuongBan" />
                                    </div>
                                    <ErrorMessage name="ExpirationDateStatusSale">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Danh mục sản phẩm </label>
                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="Model">
                                            <option value="Iphone">Iphone</option>
                                            <option value="Android">Android</option>
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label > Giảm giá </label>
                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="StatusSale">
                                            <option value={false}>False</option>
                                            <option value={true}>True</option>
                                        </Field>
                                    </div>
                                    <ErrorMessage name="Model">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <button className="btn btn-success">Thêm Sản Phẩm</button>
                                </Form>
                            </>
                        )
                    }}
                />
            </>
        );
    }
}
/////////////////Uload hình ảnh /////////////////////////////////
function Step1(props) {
    console.log(props.useravtar)
      if (props.currentStep !== 1) {
        return null
      } 
    
      return(
        <div className="upload">
            <label htmlFor="profile">
              <div className="imgbox">
                <img src="images/trans_116X116.png" alt="" />
                <img src={props.useravtar} className="absoImg" alt="" />
              </div>
            </label>
    <input id="file" name="file" type="file" accept="image/*" onChange={props.handleFileUpload}/>
            <span className="guide_leb">Add your avatar</span>
          </div>
      )
    }
export default index;