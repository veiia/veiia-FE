import { GithubOutlined } from '@ant-design/icons';

import { CustomButton, PageHeader, CustomLink, CustomFormWrapper } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';

const StartLoginPage = () => {
  return (
    <CustomFormWrapper>
      <PageHeader text="Log in using one of the following methods:">
        <CustomButton icon={<GithubOutlined />} text="GitHub" styleType={CustomButtonStyle.LIGHT_GRAY} />
        <CustomButton text="Email" href="/login-with-email" />
        <div>
          <p style={{ color: 'white' }}>
            Not registered yet? <CustomLink text="Register now!" to="/create-account" />
          </p>
        </div>
      </PageHeader>
    </CustomFormWrapper>
  );
};

export default StartLoginPage;
