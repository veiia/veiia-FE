import React from 'react';
import styled from 'styled-components';

const GroupSettingsPage = () => {
  return (
    <div>
      <InfoBlock>
        <h2>Настройки для команды </h2>
        <p>участников группы</p>
        <p>Команда создана...</p>
      </InfoBlock>
      <h2>Подробная информация о команде</h2>
    </div>
  );
};

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 600px;
  background-color: #6da9a5;
  border-radius: 20px;
  padding: 16px;

  box-shadow: 0px 0px 16px 3px rgba(0, 0, 0, 0.18);
  & p,
  h2 {
    margin: 0;
  }
`;

export default GroupSettingsPage;
