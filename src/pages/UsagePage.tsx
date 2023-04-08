import { Popover } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { StackedBArChart } from '../components';
import { PopUpText } from './ProjectGeneralSettings';

const UsagePopUpContent = (
  <div>
    <PopUpText>The Usage page provides </PopUpText>
    <PopUpText>detailed insight into the </PopUpText>
    <PopUpText>actual resource usage </PopUpText>
    <PopUpText>of your projects.</PopUpText>
  </div>
);

const UsagePage = () => {
  return (
    <UsageContainer>
      <Popover placement="right" content={UsagePopUpContent} trigger="hover">
        <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0', width: '120px' }}>Usage</h2>
      </Popover>
      <hr />
      <ChartCard>
        <ChartCardHeader>
          <h3 style={{ color: '#ffffff', fontSize: '28px', margin: '0' }}>Bandwidth</h3>
          <p style={{ color: '#8d8d8d' }}>The amount of data that your Deployments have received or sent.</p>
        </ChartCardHeader>
        <ChartContainer>
          <StackedBArChart />
        </ChartContainer>
      </ChartCard>
      <ChartCard>
        <ChartCardHeader>
          <h3 style={{ color: '#ffffff', fontSize: '28px', margin: '0' }}>Requests</h3>
          <p style={{ color: '#8d8d8d' }}>The number of requests your Deployments have received.</p>
        </ChartCardHeader>
        <ChartContainer>
          <StackedBArChart />
        </ChartContainer>
      </ChartCard>
    </UsageContainer>
  );
};

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;

  margin-top: 20px;
`;

const ChartCardHeader = styled.div`
  width: 100%;
  height: 100px;

  padding: 15px;

  background-color: #111111;
  border-bottom: 1px solid #333;
`;

const ChartCard = styled.div`
  height: auto;
  width: 100%;

  margin-bottom: 20px;
  background-color: #000000;
  outline: 1px solid #333;
  border-radius: 2px;
`;

const UsageContainer = styled.div`
  margin: 0 auto;
  width: 1250px;
  padding-bottom: 20px;
  border-radius: 10px;
`;

export default UsagePage;
