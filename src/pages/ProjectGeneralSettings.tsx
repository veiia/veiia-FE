import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CustomButton, CustomInput } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';
import { Form } from 'antd';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { AppContext } from '../App';
import { Popover } from 'antd';

export const PopUpText = styled.p`
  margin: 0;
  color: #ffffff;
`;

const buildCommandPopUpContant = (
  <div>
    <PopUpText>The command your frontend framework </PopUpText>
    <PopUpText>provides for compiling your code.</PopUpText>
    <PopUpText>If your frontend does not </PopUpText>
    <PopUpText>require a build, leave this field empty.</PopUpText>
  </div>
);

const OutPutDirrectoryPopUpContant = (
  <div>
    <PopUpText>The directory in which your</PopUpText>
    <PopUpText>compiled frontend will be located.</PopUpText>
    <PopUpText>If you want to serve everything</PopUpText>
    <PopUpText>instead of a sub directory,</PopUpText>
    <PopUpText> leave this field empty.</PopUpText>
  </div>
);

const InstallCommadPopUpContant = (
  <div>
    <PopUpText>The command that is used to</PopUpText>
    <PopUpText>install your Project's software</PopUpText>
    <PopUpText>dependencies.</PopUpText>
    <PopUpText>If you don't need to install</PopUpText>
    <PopUpText> dependencies, override this</PopUpText>
    <PopUpText>field and leave it empty.</PopUpText>
  </div>
);

// let initialprojectName = 'projectname';

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

/* eslint-enable no-template-curly-in-string */

const GeneralSettingsPage = () => {
  const text =
    'This project will be deleted, along with all of its Deployments, Domains, Environment Variables, Serverless Functions, and Settings.';
  // const { initialEmail, initialName, initialUserName, userName, setUserName, name, setName, email, setEmail } =
  //   useContext(AppContext);
  const [projectName, setProjectName] = useState('projectname');

  const [buildCommand, setBuildCommand] = useState('`npm run build`');
  const [outPutDirrectory, setOutPutDirrectory] = useState('outPutDirrectory');
  const [installCommand, setInstallCommand] = useState('`Yarn install` or `npm install`');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    return;
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ProjectGeneralSettingsContainer>
      <DeleteConfirmModal
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        text={text}
        inputText={projectName}
        tipText="Enter the project name to continue:"
      />
      <Card>
        <Container>
          <CardTittle>Project Name</CardTittle>
          <CardDescription>
            Used to identify your Project on the Dashboard, and in the URL of your Deployments.
          </CardDescription>
          <InputContainer>
            <Form validateMessages={validateMessages} component={false}>
              <Form.Item name={['projectName']} rules={[{ required: true }]}>
                <CustomInput
                  style={{ width: '300px', borderRadius: '2px 0 0 2px', color: '#ffffff' }}
                  placeholder={projectName}
                  onChange={event => {
                    setProjectName(event.target.value);
                  }}
                  value={projectName}
                />
              </Form.Item>
            </Form>
            <CustomInput
              placeholder=".veiia.com"
              disabled={true}
              style={{ width: '90px', borderRadius: '0 2px 2px 0', color: '#ffffff' }}
            />
          </InputContainer>
        </Container>
        <Tip>
          <TipDescription>
            Project names can only consist of up to 100 alphanumeric lowercase characters. Hyphens can be used between
            the name but never at the start or end.
          </TipDescription>
          <CustomButton
            styleType={CustomButtonStyle.WHITE}
            text="Save"
            // disabled={projectName === initialprojectName || projectName.length < 3 || projectName.length === 0}
          />
        </Tip>
      </Card>
      <Card>
        <Container>
          <CardTittle>Build & Development Settings</CardTittle>
          <CardDescription>
            When using a framework for a new project, it will be automatically detected. As a result, several project
            settings are automatically configured to achieve the best result. You can override them below.
          </CardDescription>
          <hr></hr>
          <InputContainer>
            <Popover placement="bottom" content={buildCommandPopUpContant} trigger="hover">
              <PopUpButton>Build Command:</PopUpButton>
            </Popover>
            <Form validateMessages={validateMessages} component={false}>
              <Form.Item name={['Build Command']} rules={[{ required: true }]}>
                <CustomInput
                  style={{ width: '300px', borderRadius: '2px 0 0 2px', color: '#ffffff' }}
                  placeholder={buildCommand}
                  onChange={event => {
                    setBuildCommand(event.target.value);
                  }}
                  value={buildCommand}
                />
              </Form.Item>
            </Form>
          </InputContainer>
          <InputContainer>
            <Popover placement="bottom" content={OutPutDirrectoryPopUpContant} trigger="hover">
              <PopUpButton>OutPut Dirrectory:</PopUpButton>
            </Popover>
            <Form validateMessages={validateMessages} component={false}>
              <Form.Item name={['OutPut Dirrectory']} rules={[{ required: true }]}>
                <CustomInput
                  style={{ width: '300px', borderRadius: '2px 0 0 2px', color: '#ffffff' }}
                  placeholder="app"
                  onChange={event => {
                    setOutPutDirrectory(event.target.value);
                  }}
                  value={outPutDirrectory}
                />
              </Form.Item>
            </Form>
          </InputContainer>
          <InputContainer>
            <Popover placement="bottom" content={InstallCommadPopUpContant} trigger="hover">
              <PopUpButton>Install Command:</PopUpButton>
            </Popover>
            <Form validateMessages={validateMessages} component={false}>
              <Form.Item name={['InstallCommand']} rules={[{ required: true }]}>
                <CustomInput
                  style={{ width: '300px', borderRadius: '2px 0 0 2px', color: '#ffffff' }}
                  placeholder={installCommand}
                  onChange={event => {
                    setInstallCommand(event.target.value);
                  }}
                  value={installCommand}
                />
              </Form.Item>
            </Form>
          </InputContainer>
        </Container>
        <Tip>
          <TipDescription>You can edit build and development settings and the root directory settings.</TipDescription>
          <CustomButton
            styleType={CustomButtonStyle.WHITE}
            text="Save"
            // disabled={projectName === initialprojectName || projectName.length < 3 || projectName.length === 0}
          />
        </Tip>
      </Card>
      <Card>
        <Container>
          <CardTittle>Root Directory</CardTittle>
          <CardDescription>
            The directory within your project, in which your code is located. Leave this field empty if your code is not
            located in a subdirectory. A new Deployment is required for your changes to take effect.
          </CardDescription>
          <CustomInput style={{ width: '300px', borderRadius: '2px 0 0 2px', color: '#ffffff' }} />
        </Container>
        <Tip>
          <TipDescription>
            In some projects, the top-level directory of the repository may not be the root directory of the app you’d
            like to build.
          </TipDescription>
          <CustomButton
            styleType={CustomButtonStyle.WHITE}
            text="Save"
            // disabled={projectName === initialprojectName || projectName.length < 3 || projectName.length === 0}
          />
        </Tip>
      </Card>
      <Card>
        <Container>
          <CardTittle>Project ID</CardTittle>
          <CardDescription>Used when interacting with the Veiia API.</CardDescription>
          <CustomInput
            style={{ width: '300px', borderRadius: '2px 0 0 2px', color: '#ffffff' }}
            placeholder="veiiaID"
            disabled={true}
          />
        </Container>
      </Card>
      <Card style={{ outline: '1px solid #ff0000' }}>
        <Container>
          <h2 style={{ color: '#ffffff', fontSize: '20px' }}>Delete Project</h2>
          <p style={{ color: '#ffffff' }}>
            The project will be permanently deleted, including its deployments and domains. This action is irreversible
            and can not be undone.
          </p>
        </Container>
        <Tip style={{ justifyContent: 'flex-end' }}>
          <CustomButton styleType={CustomButtonStyle.RED} text="Delete Project" onClick={showModal} />
        </Tip>
      </Card>
    </ProjectGeneralSettingsContainer>
  );
};

const PopUpButton = styled.p`
  color: #ffffff;
  display: inline-block;
  margin: 0 20px 0 0;
  width: 120px;
`;

export const CardTittle = styled.h2`
  color: #ffffff;
  font-size: 20px;
`;

export const CardDescription = styled.p`
  color: #ffffff;
`;

export const TipDescription = styled.p`
  color: #8d8d8d;
  margin: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`;

export const ProjectGeneralSettingsContainer = styled.div`
  padding-bottom: 20px;
  border-radius: 10px;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 15px;
`;

export const Card = styled.div`
  width: 100%;
  height: auto;

  margin-bottom: 20px;

  border-radius: 2px;
  outline: 1px solid #333;
  background-color: #000000;
`;

export const Tip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;

  outline: 1px solid #333;
  background-color: #111111;
`;

export default GeneralSettingsPage;
