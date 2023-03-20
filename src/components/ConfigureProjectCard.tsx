import { Space } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import DividingLine from './DividingLine';
import EditButton from './EditButton';

const ConfigureProjectCard = () => {
  const [editable1, setEditable1] = useState(true);
  const [editable2, setEditable2] = useState(true);
  const [editable3, setEditable3] = useState(true);
  const [editable4, setEditable4] = useState(true);

  const [rootDirectory, setRootDirectory] = useState('./');
  const [buildCommad, setBuildCommad] = useState('`npm run build`, or `vite byild`');
  const [outPuutDirectory, setOutPuutDirectory] = useState('project');
  const [installCommand, setInstallCommand] = useState('`yarn install`, `npm install`');

  return (
    <ConfigureCard>
      <h2 style={{ fontSize: '30px' }}>Configure Project</h2>
      <DividingLine />
      <StyledParagrafe>Project Name</StyledParagrafe>
      <CustomInput />

      <StyledParagrafe>Root Directory</StyledParagrafe>
      <FlexContainer>
        <CustomInput
          value={rootDirectory}
          disabled={editable1}
          onChange={event => setRootDirectory(event.target.value)}
        />
        <EditButton editable={editable1} onClick={() => setEditable1(!editable1)} notActive="Save" active="Edit" />
      </FlexContainer>
      <h3 style={{ margin: '10px 0 0 5px', fontSize: '20px' }}>Build and Output Settings:</h3>
      <StyledParagrafe>Build Command</StyledParagrafe>
      <FlexContainer>
        <CustomInput value={buildCommad} disabled={editable2} onChange={event => setBuildCommad(event.target.value)} />
        <EditButton editable={editable2} onClick={() => setEditable2(!editable2)} notActive="Save" active="Edit" />
      </FlexContainer>
      <StyledParagrafe>Output Directory</StyledParagrafe>
      <FlexContainer>
        <CustomInput
          value={outPuutDirectory}
          disabled={editable3}
          onChange={event => setOutPuutDirectory(event.target.value)}
        />
        <EditButton editable={editable3} onClick={() => setEditable3(!editable3)} notActive="Save" active="Edit" />
      </FlexContainer>
      <StyledParagrafe>Install Command</StyledParagrafe>
      <FlexContainer>
        <CustomInput
          value={installCommand}
          onClick={() => setEditable4(!editable4)}
          disabled={editable4}
          onChange={event => setInstallCommand(event.target.value)}
        />
        <EditButton editable={editable4} onClick={() => setEditable4(!editable4)} notActive="Save" active="Edit" />
      </FlexContainer>
      <CustomButton text="Deploy" />
    </ConfigureCard>
  );
};

const ConfigureCard = styled.div`
  width: 650px;

  padding: 20px;

  background-color: #6da9a5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const StyledParagrafe = styled.p`
  margin: 0 0 0 5px;
`;
export default ConfigureProjectCard;
