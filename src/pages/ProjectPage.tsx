import React from 'react';
import styled from 'styled-components';
import { CustomButton } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';
import StatusIcon, { StatusIconStyle } from '../components/StatusIcon';
import { Card, Tip } from './GeneralSettingsPage';
import { CardTittle, TipDescription } from './ProjectGeneralSettings';

const ProjectPage = () => {
  let status = 'Okay';

  return (
    <ProjectPageContainer>
      <HeaderProjectInfo>
        <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0' }}>Project Name</h2>
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
      <h2 style={{ fontSize: '25px', color: 'white' }}>Production Deployment</h2>
      <p style={{ color: '#9f9f9f', margin: '0 0 20px 0', fontWeight: '600' }}>
        The deployment that is available to your visitors.
      </p>
      <ProjectInfo>
        <DomainContainer>
          <p style={{ color: '#9f9f9f', fontWeight: '600', margin: '0' }}>DOMAIN: </p>
          <p style={{ fontWeight: '700', fontSize: '15px', color: '#ffffff', margin: '0' }}> project-link</p>
        </DomainContainer>
        <StatusContainer>
          <p style={{ color: '#9f9f9f', fontWeight: '600', margin: '0' }}>STATUS:</p>
          {status === 'Okay' ? (
            <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', margin: '0' }}>Okay</p>
          ) : (
            <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', margin: '0' }}>Error</p>
          )}
          <StatusIcon styleType={status === 'Okay' ? StatusIconStyle.GREEN : StatusIconStyle.RED} />
        </StatusContainer>
        <BranchContainer>
          <p style={{ color: '#9f9f9f', margin: '0', fontWeight: '600' }}>BRANCH:</p>
          <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: '700', margin: '0' }}>
            main <span style={{ color: '#9f9f9f', fontWeight: '600', margin: '0' }}>(Last commit)</span>
          </p>
        </BranchContainer>
        <Tip>
          <TipDescription>To update your Production Deployment, push to the "main" branch.</TipDescription>
        </Tip>
      </ProjectInfo>
      {/* <Card>
        <CardTittle>Deployment Status</CardTittle>

      </Card> */}
    </ProjectPageContainer>
  );
};

const BranchContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;
`;

const StatusContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-bottom: 10px;
`;

const DomainContainer = styled.div`
  display: flex;

  flex-direction: row;
  gap: 10px;

  margin-bottom: 10px;
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
