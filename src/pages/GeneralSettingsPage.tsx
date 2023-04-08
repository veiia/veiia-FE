import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CustomButton, CustomInput } from '../components';
import { CustomButtonStyle } from '../components/CustomButton';
import { Form } from 'antd';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { AppContext } from '../App';

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
    'Veiia will delete all of your projects, along with all of your deployments, domains, activity, and all other  resources belonging to your Personal Account.';
  const { initialEmail, initialName, initialUserName, userName, setUserName, name, setName, email, setEmail } =
    useContext(AppContext);

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
    <GeneralSettingsContainer>
      <DeleteConfirmModal
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
        text={text}
        inputText={initialUserName}
        tipText="Enter your username to continue:"
      />
      <Card>
        <Container>
          <h2 style={{ color: '#ffffff', fontSize: '20px' }}>Your Username</h2>
          <p style={{ color: '#ffffff' }}>This is your URL namespace within Veiia.</p>
          <InputContainer>
            <Form validateMessages={validateMessages} component={false}>
              <Form.Item name={['UserName']} rules={[{ required: true }]}>
                <CustomInput
                  style={{ width: '300px', borderRadius: '2px 0 0 2px', color: '#ffffff' }}
                  placeholder={userName}
                  onChange={event => {
                    setUserName(event.target.value);
                  }}
                  value={userName}
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
          <p style={{ color: '#8d8d8d', margin: '0' }}>Please use ? characters at maximum.</p>
          <CustomButton
            styleType={CustomButtonStyle.WHITE}
            text="Save"
            disabled={userName === initialUserName || userName.length < 3 || userName.length === 0}
          />
        </Tip>
      </Card>
      <Card>
        <Container>
          <h2 style={{ color: '#ffffff', fontSize: '20px' }}>Your Name</h2>
          <p style={{ color: '#ffffff' }}>Please enter your full name, or a display name you are comfortable with.</p>
          <InputContainer>
            <CustomInput
              style={{ width: '390px', color: '#ffffff' }}
              placeholder={name}
              onChange={event => {
                setName(event.target.value);
              }}
              value={name}
            />
          </InputContainer>
        </Container>

        <Tip>
          <p style={{ color: '#8d8d8d', margin: '0' }}>Please use ? characters at maximum.</p>
          <CustomButton
            styleType={CustomButtonStyle.WHITE}
            text="Save"
            disabled={name === initialName || name.length < 3}
          />
        </Tip>
      </Card>
      <Card>
        <Container>
          <h2 style={{ color: '#ffffff', fontSize: '20px' }}>Your Email</h2>
          <p style={{ color: '#ffffff' }}>Please enter the email address you want to use to log in with Veiia.</p>
          <InputContainer>
            <Form validateMessages={validateMessages}>
              <Form.Item name={['Email']} rules={[{ type: 'email', required: true }]}>
                <CustomInput
                  style={{ width: '390px', color: '#ffffff' }}
                  placeholder={email}
                  onChange={event => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                />
              </Form.Item>
            </Form>
          </InputContainer>
        </Container>

        <Tip>
          <p style={{ color: '#8d8d8d', margin: '0' }}>We will email you to verify the change.</p>
          <CustomButton
            styleType={CustomButtonStyle.WHITE}
            text="Save"
            disabled={email === initialEmail || email.length < 3}
          />
        </Tip>
      </Card>
      <Card style={{ outline: '1px solid #ff0000' }}>
        <Container>
          <h2 style={{ color: '#ffffff', fontSize: '20px' }}>Delete Personal Account</h2>
          <p style={{ color: '#ffffff' }}>
            Permanently remove your Personal Account and all of its contents from the Veiia platform. This action is not
            reversible, so please continue with caution.
          </p>
        </Container>
        <Tip style={{ justifyContent: 'flex-end' }}>
          <CustomButton styleType={CustomButtonStyle.RED} text="Delete Personal Account" onClick={showModal} />
        </Tip>
      </Card>
    </GeneralSettingsContainer>
  );
};

export const InputContainer = styled.div`
  display: flex;
`;

export const GeneralSettingsContainer = styled.div`
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
