import React, { FC } from 'react';
import styled from 'styled-components';
const branchIcon = require('../pictures/pngwingcom_negate.png');

interface ProjectCardProps {
  projectName: string;
  projectDomen: string;
  lastCommit: string;
  fromBranch: string;

  onClick?: () => void;
}

const ProjectCard: FC<ProjectCardProps> = ({ projectName, projectDomen, lastCommit, fromBranch, onClick }) => {
  return (
    <StyledProjectCard onClick={onClick}>
      <StyledProjectName>{projectName}</StyledProjectName>
      <StyledProjectDomen>{projectDomen}</StyledProjectDomen>
      <GitHubСharacteristic>
        <p style={{ color: '#a0a0a0', fontSize: '15px', margin: '0' }}>{lastCommit}</p>
        <p style={{ color: '#a0a0a0', fontSize: '15px', margin: '0' }}>
          <StyledBranchIcon src={branchIcon} /> From {fromBranch}
        </p>
      </GitHubСharacteristic>
      <StyledProjectDate>10d ago</StyledProjectDate>
    </StyledProjectCard>
  );
};

const StyledBranchIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const StyledProjectCard = styled.div`
  background-color: #000000;
  border-radius: 2px;

  border: 1px solid #333;

  height: 200px;
  padding: 20px;

  &:hover {
    border: 1px solid #ffffff;
  }
`;

const StyledProjectName = styled.p`
  color: white;
  font-size: 20px;
  margin: 0;
`;

const StyledProjectDomen = styled.p`
  color: #a0a0a0;
  font-size: 14px;
  margin: 0;
`;

const GitHubСharacteristic = styled.div`
  margin-top: 15px;
`;

const StyledProjectDate = styled.p`
  color: #a0a0a0;
  font-size: 14px;
  margin: 20px 0 0 0;
`;

export default ProjectCard;
