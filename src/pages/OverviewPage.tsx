import React, { useContext, useState } from 'react';
import { CustomInput } from '../components';
import styled from 'styled-components';
import AddNewButton from '../components/AddNewButton';
import ProjectCard from '../components/ProjectCard';
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Popover } from 'antd';
import { PopUpText } from './ProjectGeneralSettings';

const OverViewPopUpContent = (
  <div>
    <PopUpText>All your projects are located here. </PopUpText>
    <PopUpText>You can use the search for convenience.</PopUpText>
  </div>
);

const OverviewPage = () => {
  const { projectName, projectDomen, lastCommit, fromBranch } = useContext(AppContext);
  let navigate = useNavigate();
  function clickOnProjectCard() {
    navigate('project');
  }
  const [text, setText] = useState('');

  return (
    <OverviewContainer>
      <Popover placement="right" content={OverViewPopUpContent} trigger="hover">
        <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0', width: '170px' }}>Overview</h2>
      </Popover>

      <hr />
      <SearchFlexContainer>
        <CustomInput
          placeholder="Enter a name of project"
          onChange={event => setText(event.target.value)}
          value={text}
          style={{ backgroundColor: '#000000' }}
        />
        <AddNewButton />
      </SearchFlexContainer>
      <ProjectCardsContainer>
        <ProjectCard
          onClick={clickOnProjectCard}
          projectName={'projectName 1'}
          projectDomen={projectDomen}
          lastCommit={lastCommit}
          fromBranch={fromBranch}
        />
        <ProjectCard
          projectName={'projectName 2'}
          projectDomen={projectDomen}
          lastCommit={lastCommit}
          fromBranch={fromBranch}
        />
        <ProjectCard
          projectName={'projectName 3'}
          projectDomen={projectDomen}
          lastCommit={lastCommit}
          fromBranch={fromBranch}
        />
        <ProjectCard
          projectName={projectName}
          projectDomen={projectDomen}
          lastCommit={lastCommit}
          fromBranch={fromBranch}
        />
        <ProjectCard
          projectName={projectName}
          projectDomen={projectDomen}
          lastCommit={lastCommit}
          fromBranch={fromBranch}
        />
      </ProjectCardsContainer>
    </OverviewContainer>
  );
};

const SearchFlexContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const OverviewContainer = styled.div`
  margin: 0 auto;
  width: 1250px;
  padding-bottom: 20px;
`;

const ProjectCardsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 10px;

  margin-top: 20px;
`;
export default OverviewPage;
