import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import { CustomButton } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';

const SitesPage = () => {
  return <CustomButton icon={<GithubOutlined />} text="GitHub" styleType={CustomButtonStyle.LIGHT_GRAY} />;
};

export default SitesPage;
