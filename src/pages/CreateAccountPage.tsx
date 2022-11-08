import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import { CustomButton, Background, PageHeader, CustomFormWrapper, CustomLink } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';

const CreateAccountPage = () => {
  return (
    <Background>
      <CustomFormWrapper>
        <PageHeader text="Зарегистрируйте аккаунт доступными способами:">
          <CustomButton icon={<GithubOutlined />} text="GitHub" styleType={CustomButtonStyle.LIGHT_GRAY} />
          <CustomButton text="Email" href="/create-account-with-email" />
          <div>
            Уже есть аккаунт? <CustomLink text="Войти сейчас!" to="/" />
          </div>
        </PageHeader>
      </CustomFormWrapper>
    </Background>
  );
};

export default CreateAccountPage;
