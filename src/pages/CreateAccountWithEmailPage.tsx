import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { CustomButton, CustomCheckBox, CustomFormWrapper, CustomInput, CustomLink, PageHeader } from '../components';

const CreateAccountWithEmailPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <CustomFormWrapper>
      <PageHeader text="Register an account using Email or username:">
        <Form initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username or Email' }]}>
            <CustomInput prefix={<UserOutlined />} placeholder="Email or username" type="text" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
            <CustomInput prefix={<LockOutlined />} placeholder="Password" type="password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <CustomCheckBox text="Remember me." />
            </Form.Item>
          </Form.Item>
          <CustomButton text="Register" type="primary" htmlType="submit" />
          <p style={{ color: 'white' }}>
            Already registered? <CustomLink text="Log in now!" to="/" />
          </p>
        </Form>
      </PageHeader>
    </CustomFormWrapper>
  );
};

export default CreateAccountWithEmailPage;
