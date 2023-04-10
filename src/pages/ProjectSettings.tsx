import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MenuSettings, PageHeader } from '../components';
import Domains from './Domains';
import ProjectGeneralSettings from './ProjectGeneralSettings';

const CONTENT: Record<string, JSX.Element> = {
  'project-general-settings': <ProjectGeneralSettings />,
  domains: <Domains />,
};

const ProjectSettings = () => {
  const location = useLocation();

  console.log(location);
  const content = useMemo(() => {
    const menuItem = location.pathname.split('/').at(-1);
    if (typeof menuItem === 'string' && Object.keys(CONTENT).includes(menuItem)) {
      return CONTENT[menuItem];
    }
    return null;
  }, [location]);
  return (
    <PageContainer>
      <PageTittle>Project Settings</PageTittle>
      <hr />
      <SettingsContainer>
        <MenuSettings type="projectSettings" />
        {content}
      </SettingsContainer>
    </PageContainer>
  );
};

export const PageContainer = styled.div`
  width: 1250px;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const PageTittle = styled.h2`
  display: inline-block;

  font-size: 40px;
  color: white;
  margin: 0;
`;

const SettingsContainer = styled.div`
  --gap: 30px;

  display: grid;
  grid-template-columns: 250px calc(1000px - var(--gap));
  gap: var(--gap);
  margin: 0 auto;
  padding-bottom: 20px;
  border-radius: 10px;
`;

export default ProjectSettings;
