import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {
    constructor(props) {
    super(props);
        this.state = {
            visible: false
        };
    }
    showModelHandler = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    };
    hideModelHandler = () => {
        this.setState({
            visible: false,
        });
    };
    okHandler = () => {
        const { onOk } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values);
                this.hideModelHandler();
            }
        });
    };
    render() {
        const { children } = this.props;
        // Form.create() =>  this.props.form
        const { getFieldDecorator } = this.props.form;
        const { name, email, website } = this.props.record;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <span>
                <span onClick={this.showModelHandler}>
                    { children }
                </span>
                <Modal
                    title="Edit User"
                    visible={this.state.visible}
                    onOk={this.okHandler}
                    onCancel={this.hideModelHandler}
                    >
                    <Form horizontal onSubmit={this.okHandler}>
                        <FormItem
                            {...formItemLayout}
                            label="Name"
                            >
                            {
                                getFieldDecorator('name', {
                                    initialValue: name,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Email"
                            >
                            {
                                getFieldDecorator('email', {
                                    initialValue: email,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Website"
                            >
                            {
                                getFieldDecorator('website', {
                                    initialValue: website,
                                })(<Input />)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </span>
        );
    }
}

const UserModal = Form.create()(UserEditModal);


export default UserModal;
