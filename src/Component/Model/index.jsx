import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button, Tabs } from 'antd';
import Login from './DangNhap';
import { StickyContainer, Sticky } from 'react-sticky';
import {connect} from 'react-redux'
import SignUp from './DangKy'
class index extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        const { TabPane } = Tabs;

        const renderTabBar = (props, DefaultTabBar) => (
            <Sticky bottomOffset={80}>
                {({ style }) => (
                    <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
                )}
            </Sticky>
        );
        return (
            <>
                <Button type="primary" className="designButton" onClick={this.showModal}>
          
                                Đăng nhập <br></br>
                                tài khoản
                </Button>
                <Modal
                   
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <StickyContainer>
                        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                            <TabPane tab="Đăng nhập" key="1" >
                                <Login/>
                             </TabPane>
                            <TabPane tab="Tạo khoản" key="2">
                                <SignUp/>
                           </TabPane>

                        </Tabs>
                    </StickyContainer>,
                </Modal>
            </>
        );
    }
}
const mapStateToProps = state => ({
})
export default connect(mapStateToProps)(index);





