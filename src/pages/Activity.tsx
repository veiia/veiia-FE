import styled from 'styled-components';

const ActivityPage = () => {
  return (
    <ActivityContainer>
      <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0' }}>Activity</h2>
      <hr />
    </ActivityContainer>
  );
};

const ActivityContainer = styled.div`
  margin: 0 auto;
  width: 1250px;
  padding-bottom: 20px;
  border-radius: 10px;
`;

export default ActivityPage;
