import React, { useState } from 'react';
import { Button, Modal, Form, Input, notification } from 'antd';
import { KeyOutlined, EditOutlined } from '@ant-design/icons';
import ChangePassword from '../../services/authentication/changePassword';
const ChnagePassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [inputs, setInputs] = useState({});
  const [passwordChange] = useState(() => new ChangePassword());
  var auth = JSON.parse(sessionStorage.getItem('token-info'));
  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const openNotification = (title, message) => {
    api.info({
      message: title,
      description: message
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleSubmit = () => {
    if (inputs.password === inputs.confirm) {
      changePassword({ ...inputs, vno: auth.vno, username: auth.User });
    } else {
      openNotification('E_Chikitsa Change Password', 'Confirm passowrd not match!');
    }
  };

  const changePassword = (params) => {
    passwordChange.changePassword(params).then((response) => {
      try {
        if (response.data.statusCode == 200) {
          openNotification('E_Chikitsa Change Password', response.data.message);
          setIsModalOpen(false);
        } else {
          openNotification('E_Chikitsa Change Password', response.data.message);
          setIsModalOpen(true);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 8
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 16
      }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 50,
        offset: 19
      }
    }
  };

  return (
    <>
      {contextHolder}
      <Button type="default" onClick={showModal}>
        <KeyOutlined style={{ width: '2em' }} />
        Change Password
      </Button>

      <Modal
        title="Change Password"
        open={isModalOpen}
        footer={
          [
            // <Button
            //   type="default"
            //   key="cancel"
            //   onClick={() => {
            //     handleCancel();
            //   }}
            // >
            //   Cancel
            // </Button>
          ]
        }
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86'
          }}
          style={{
            maxWidth: 600
          }}
          scrollToFirstError
        >
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
            hasFeedback
          >
            <Input.Password name="password" onChange={handleChange} />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!'
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password that you entered do not match!'));
                }
              })
            ]}
          >
            <Input.Password name="confirm" onChange={handleChange} />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              <EditOutlined />
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ChnagePassword;
