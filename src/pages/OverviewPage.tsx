import React, { useContext, useState } from 'react';
import { CustomInput } from '../components';
import styled from 'styled-components';
import AddNewButton from '../components/AddNewButton';
import ProjectCard from '../components/ProjectCard';
import { AppContext } from '../App';

const OverviewPage = () => {
  const { projectName, projectDomen, lastCommit, fromBranch } = useContext(AppContext);

  const [text, setText] = useState('');
  return (
    <OverviewContainer>
      <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0' }}>Overview</h2>
      <hr />
      <SearchFlexContainer>
        <CustomInput
          placeholder="Enter a name of project"
          onChange={event => setText(event.target.value)}
          value={text}
        />
        <AddNewButton />
      </SearchFlexContainer>
      <ProjectCardsContainer>
        <ProjectCard
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
  display: flex;
  flex-wrap: wrap;

  padding-top: 20px;
  gap: 10px;
`;
export default OverviewPage;
