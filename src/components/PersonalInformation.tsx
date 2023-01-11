import React, { useState } from 'react';
import styled from 'styled-components';
import CustomInput from './CustomInput';
import EditButton from './EditButton';
import EditebleInformation from './EditebleInformation';
import NotEditebleInformation from './NotEditebleInformation';

const PersonalInformation: React.FC = () => {
  const [editable, setEditable] = useState(false);
  return (
    <StyledPersonalInformation>
      <h2>Персональная информация:</h2>
      <StyledInformationContainer>
        <NotEditebleInformation />
        <EditebleInformation editable={editable} />
      </StyledInformationContainer>
      <EditButton editable={editable} onClick={() => setEditable(!editable)} />
    </StyledPersonalInformation>
  );
};

const StyledInformationContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const StyledPersonalInformation = styled.div`
  background-color: #6da9a5 !important;
  border-radius: 10px;
  padding: 20px;
  max-width: 700px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 20px;
`;

export default PersonalInformation;
