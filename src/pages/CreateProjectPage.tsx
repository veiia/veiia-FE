import React from 'react';
import styled from 'styled-components';
import { CustomButton, CustomInput, DragAndDrop } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';
import { CustomInputStyle } from '../components/CustomInput';
import { PageContainer, PageTittle } from './ProjectSettings';

const CreateProjectPage = () => {
  return (
    <PageContainer>
      <PageTittle>Let's build something new.</PageTittle>
      <hr />
      <PageDescription>
        To create a project, you can enter a link to an open repository, or upload a website or image yourself.
      </PageDescription>
      <OptionContainer>
        <OptionContainerTittle>Create with a link:</OptionContainerTittle>
        <CustomInput styleType={CustomInputStyle.BLACK} placeholder="enter a link to an open repository" />
        <CustomButton text="Add" styleType={CustomButtonStyle.WHITE} />
      </OptionContainer>
      <OptionContainer>
        <OptionContainerTittle>Create with image:</OptionContainerTittle>
        <DragAndDrop text="image" />
        <CustomButton text="Add" styleType={CustomButtonStyle.WHITE} />
      </OptionContainer>
      <OptionContainer>
        <OptionContainerTittle>Upload Site-files:</OptionContainerTittle>
        <DragAndDrop text="downloaded files" />
        <CustomButton text="Add" styleType={CustomButtonStyle.WHITE} />
      </OptionContainer>
    </PageContainer>
  );
};

export const PageDescription = styled.p`
  font-size: 17px;
  color: #8d8d8d;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 20px;
`;

const OptionContainerTittle = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
`;

export default CreateProjectPage;
