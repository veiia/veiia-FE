import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import {
  Background,
  CustomButton,
  CustomCheckBox,
  CustomFormWrapper,
  CustomInput,
  CustomLink,
  PageHeader,
} from '../components';

const CreateAccountWithEmailPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Background>
      <CustomFormWrapper>
        <PageHeader text="Зарегистрируйте аккаунт, используя Email или имя пользователя:">
          <Form initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя или Email' }]}
            >
              <CustomInput prefix={<UserOutlined />} placeholder="Email или имя пользователя" type="text" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Пожалуйста, введите свой пароль' }]}>
              <CustomInput prefix={<LockOutlined />} placeholder="Пароль" type="password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <CustomCheckBox text="Запомнить меня." />
              </Form.Item>
            </Form.Item>
            <CustomButton text="Зарегистрироваться" type="primary" htmlType="submit" />
            Уже зарегистрированы? <CustomLink text="Войти сейчас!" to="/" />
          </Form>
        </PageHeader>
      </CustomFormWrapper>
    </Background>
  );
};

export default CreateAccountWithEmailPage;
