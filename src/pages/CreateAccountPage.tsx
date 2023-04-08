import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import { CustomButton, PageHeader, CustomFormWrapper, CustomLink } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';

const CreateAccountPage = () => {
  return (
    <CustomFormWrapper>
      <PageHeader text="Register an account using the available methods:">
        <CustomButton icon={<GithubOutlined />} text="GitHub" styleType={CustomButtonStyle.LIGHT_GRAY} />
        <CustomButton text="Email" href="/create-account-with-email" />
        <p style={{ color: 'white' }}>
          Already have an account? <CustomLink text="Log in now!" to="/" />
        </p>
      </PageHeader>
    </CustomFormWrapper>
  );
};

export default CreateAccountPage;
