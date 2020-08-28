import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as yup from 'yup'
import { ThemSanPham } from '../../../../Redux/Action/product';
const schema = yup.object().shape({
    tenSanPham: yup.string().required("Vui lòng không bỏ trống"),
    giaSanPham: yup.number().required("Vui lòng không bỏ trống"),

    img: yup.string().required("Vui lòng không bỏ trống"),

})
class index extends Component {
    render() {
        return (
            <>



                <Formik onSubmit={(value) => {
                    ThemSanPham(value)
                    this.props.history.push('/admin')
                }}
                    initialValues={{

                        tenSanPham: "",
                        giaSanPham: "",
                        maLoaiSanPham: "Iphone",
                        img: "",

                    }}
                    validationSchema={schema}
                    render={(formikProps) => {
                        return (
                            <>
                                <h3 className="text-primary text-center">Thêm sản phẩm</h3>
                                <Form className="mt-5 w-50 mx-auto">
                                    <div className="form-group">
                                        <label > Tên sản phẩm : </label>
                                        <Field onChange={formikProps.handleChange} className="form-control" type="text" name="tenSanPham" />
                                    </div>
                                    <ErrorMessage name="tenSanPham">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Giá sản phẩm : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="giaSanPham" />
                                    </div>
                                    <ErrorMessage name="giaSanPham">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Link hình : </label>
                                        <Field className="form-control" type="type" onChange={formikProps.handleChange} name="img" />
                                    </div>
                                    <ErrorMessage name="img">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
                                    <div className="form-group">
                                        <label > Danh mục sản phẩm </label>
                                        <Field className="form-control" component="select" onChange={formikProps.handleChange} name="maLoaiSanPham">
                                            <option value="Iphone">Iphone</option>
                                            <option value="Android">Android</option>
                                        </Field>
                                    </div>
                                    <ErrorMessage name="maLoaiSanPham">{(mes) => (<div className="alert alert-danger">{mes}</div>)}</ErrorMessage>
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

export default index;