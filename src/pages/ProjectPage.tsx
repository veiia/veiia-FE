import React from 'react';
import styled from 'styled-components';
import { CustomButton } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';
import StatusIcon, { StatusIconStyle } from '../components/StatusIcon';
import { PageDescription } from './CreateProjectPage';
import { Card, Tip } from './GeneralSettingsPage';
import { CardTittle, TipDescription } from './ProjectGeneralSettings';
import { PageTittle } from './ProjectSettings';

const ProjectPage = () => {
  let status = 'Okay';

  return (
    <ProjectPageContainer>
      <HeaderProjectInfo>
        <PageTittle>Project Name</PageTittle>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <CustomButton
            styleType={CustomButtonStyle.BLACK}
            text="View Git Repository"
            style={{ width: '200px', height: '40px' }}
          />
          <CustomButton styleType={CustomButtonStyle.WHITE} text="Visit" style={{ width: '70px', height: '40px' }} />
        </div>
      </HeaderProjectInfo>
      <hr />
      <PageTittle>Production Deployment</PageTittle>
      <PageDescription>The deployment that is available to your visitors.</PageDescription>
      <ProjectInfo>
        <InformationContainer>
          <InformationContainerTittle>DOMAIN: </InformationContainerTittle>
          <InformationContainerContent> project-link</InformationContainerContent>
        </InformationContainer>
        <InformationContainer>
          <InformationContainerTittle>STATUS:</InformationContainerTittle>
          {status === 'Okay' ? (
            <InformationContainerContent>Okay</InformationContainerContent>
          ) : (
            <InformationContainerContent>Error</InformationContainerContent>
          )}
          <StatusIcon styleType={status === 'Okay' ? StatusIconStyle.GREEN : StatusIconStyle.RED} />
        </InformationContainer>
        <InformationContainer>
          <InformationContainerTittle>BRANCH:</InformationContainerTittle>
          <InformationContainerContent>
            main <span style={{ color: '#9f9f9f', fontWeight: '600', margin: '0' }}>(Last commit)</span>
          </InformationContainerContent>
        </InformationContainer>
        <Tip>
          <TipDescription>To update your Production Deployment, push to the "main" branch.</TipDescription>
        </Tip>
        <ProjectControlButtons>
          <CustomButton text="Start" styleType={CustomButtonStyle.WHITE} />
          <CustomButton text="Stop" styleType={CustomButtonStyle.WHITE} />
          <CustomButton text="Pause" styleType={CustomButtonStyle.WHITE} />
        </ProjectControlButtons>
      </ProjectInfo>
    </ProjectPageContainer>
  );
};

const ProjectControlButtons = styled.div`
  display: flex;

  flex-direction: row;
  gap: 20px;

  margin: 20px 0 0 0;
`;

const InformationContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;
`;

const InformationContainerTittle = styled.p`
  color: #9f9f9f;
  margin: 0;
  font-weight: 600;
`;

const InformationContainerContent = styled.p`
  color: #ffffff;
  font-weight: 700;
  margin: 0;
  font-size: 15px;
`;

const HeaderProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectPageContainer = styled.div`
  width: 1250px;

  margin: 0 auto;
`;

const ProjectInfo = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  padding: 20px;

  border-radius: 2px;
  background-color: #000000;
  outline: 1px solid #333;
`;

export default ProjectPage;
