import React, { FC, useState } from 'react';
import styled from 'styled-components';
import CustomInput from './CustomInput';
import DividingLine from './DividingLine';
import StyledP from './StyledP';

interface EditableInformationProps {
  editable: boolean;
}

const EditebleInformation: FC<EditableInformationProps> = ({ editable }) => {
  const [username, setUsername] = useState('Username');
  const [email, setEmail] = useState('mail.ru');
  const [password, setPassword] = useState('******');
  return (
    <StyledEditebleInformation>
      <StyledP>
        {editable ? (
          <CustomInput type={'text'} onChange={event => setUsername(event.target.value)} value={username} />
        ) : (
          username
        )}
      </StyledP>
      <DividingLine />
      <StyledP>
        {editable ? (
          <CustomInput type={'email'} onChange={event => setEmail(event.target.value)} value={email} />
        ) : (
          email
        )}
      </StyledP>
      <DividingLine />
      <StyledP>
        {editable ? (
          <CustomInput type={'password'} onChange={event => setPassword(event.target.value)} value={password} />
        ) : (
          password
        )}
      </StyledP>
    </StyledEditebleInformation>
  );
};

const StyledEditebleInformation = styled.div`
  width: 100%;
`;

export default EditebleInformation;
