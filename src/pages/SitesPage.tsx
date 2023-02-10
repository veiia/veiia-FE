import React, { useState } from 'react';
import { CustomButton, CustomInput, DragAndDrop } from '../components';
import styled from 'styled-components';

const SitesPage = () => {
  const [text, setText] = useState('');
  return (
    <StyledSitesContainer>
      <h2>Добавьте свой сайт в Veiia</h2>
      <StyledInputContainer>
        <CustomInput placeholder='Введите ссылку на репозиторий' onChange={event => setText(event.target.value)} value={text}/>
        <StyledCustomButtonContainer>
        <CustomButton text="Добавить" type="primary"/>
        </StyledCustomButtonContainer>
      </StyledInputContainer>
      <DragAndDrop />
    </StyledSitesContainer>
  );
};

const StyledSitesContainer = styled.div`
  margin: 0 auto;
  width: 1250px;
  background-color: #6da9a5;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px 3px rgba(0, 0, 0, 0.18);
`;

const StyledInputContainer = styled.div`
max-width: 500px;
margin: 0 auto 20px;
display: flex;

`

const StyledCustomButtonContainer = styled.div`
max-width: 100px;
margin-left:10px;
`

export default SitesPage;
