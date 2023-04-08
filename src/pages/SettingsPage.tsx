import { Input, Popover } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MenuSettings from '../components/MenuSettings';
import GeneralSettingsPage from './GeneralSettingsPage';
import { PopUpText } from './ProjectGeneralSettings';

const CONTENT: Record<string, JSX.Element> = {
  general: <GeneralSettingsPage />,
  general2: <Input value="General 2 content" />,
};

const SettingsPopUpContent = (
  <div>
    <PopUpText>On this page, you can edit</PopUpText>
    <PopUpText>your personal profile data,</PopUpText>
    <PopUpText>as well as delete your account </PopUpText>
    <PopUpText>and everything related to it.</PopUpText>
  </div>
);

const SettingsPage = () => {
  const { application } = useParams();
  const navigate = useNavigate();

  if (!application) {
    navigate('/settings/general');
    return null;
  }

  return (
    <PageContainer>
      <Popover placement="right" content={SettingsPopUpContent} trigger="hover">
        <h2 style={{ fontSize: '40px', color: 'white', margin: ' 0', width: '480px' }}>Personal Account Settings</h2>
      </Popover>
      <hr />
      <SettingsContainer>
        <MenuSettings type="settings" />
        {CONTENT[application]}
      </SettingsContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 1250px;
  margin: 0 auto;
`;

const SettingsContainer = styled.div`
  --gap: 30px;

  display: grid;
  grid-template-columns: 250px calc(1000px - var(--gap));
  gap: var(--gap);
  margin: 0 auto;
  padding-bottom: 20px;
  border-radius: 10px;
`;

export default SettingsPage;
