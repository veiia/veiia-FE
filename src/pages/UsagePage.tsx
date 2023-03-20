import React from 'react';
import styled from 'styled-components';

const MembersPage = () => {
  return (
    <UsageContainer>
      <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0' }}>Usage</h2>
      <hr />
    </UsageContainer>
  );
};

const UsageContainer = styled.div`
  margin: 0 auto;
  width: 1250px;
  padding-bottom: 20px;
  border-radius: 10px;
`;

export default MembersPage;
