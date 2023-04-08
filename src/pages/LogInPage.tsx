import { PageHeader, CustomInput, CustomButton, CustomLink, CustomCheckBox, CustomFormWrapper } from '../components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';

const LogInPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <CustomFormWrapper>
      <PageHeader text="Log in using your Email or username:">
        <Form initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username or Email' }]}>
            <CustomInput
              prefix={<UserOutlined style={{ color: '#ffffff' }} />}
              placeholder="Email or username"
              type="text"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
            <CustomInput
              prefix={<LockOutlined style={{ color: '#ffffff' }} />}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <CustomCheckBox text="Remember me." />
            </Form.Item>
            <CustomLink text="Forgot your password?" to="" />
          </Form.Item>
          <CustomButton text="Enter" type="primary" htmlType="submit" />
          <p style={{ color: 'white' }}>
            Not registered yet? <CustomLink text="Register now!" to="/create-account" />
          </p>
        </Form>
      </PageHeader>
    </CustomFormWrapper>
  );
};

export default LogInPage;
