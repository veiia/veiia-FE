import { GithubOutlined } from '@ant-design/icons';

import { CustomButton, Background, PageHeader, CustomLink, CustomFormWrapper } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';

const StartLoginPage = () => {
  return (
    <Background>
      <CustomFormWrapper>
        <PageHeader text="Войдите в систему одним из следующих способов:">
          <CustomButton icon={<GithubOutlined />} text="GitHub" styleType={CustomButtonStyle.LIGHT_GRAY} />
          <CustomButton text="Email" href="/login-with-email" />
          <div>
            Еще не зарегистрированы? <CustomLink text="Зарегистрироваться сейчас!" to="/create-account" />
          </div>
        </PageHeader>
      </CustomFormWrapper>
    </Background>
  );
};

export default StartLoginPage;
