import React, { useContext } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';
import CustomInput from './CustomInput';
import { AppContext } from '../App';
import CustomButton, { CustomButtonStyle } from './CustomButton';

interface DeleteConfirmModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  text: string;
  inputText: string;
  tipText: string;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isModalOpen,
  handleCancel,
  handleOk,
  text,
  inputText,
  tipText,
}) => {
  return (
    <>
      <ModalWindow
        title="Delete Personal Account"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Container>
          <hr />
          <p style={{ color: '#ffffff', fontSize: '17px' }}>{text}</p>
          <Warning>
            <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: '600', margin: '0' }}>
              This action is not reversible. Please be certain.
            </p>
          </Warning>
        </Container>

        <DeleteForm>
          <p style={{ color: '#ffffff', margin: '0 0 5px 0' }}>
            {tipText} <span style={{ fontWeight: '700' }}>{inputText}</span>
          </p>
          <CustomInput style={{ color: '#ffffff' }} />
        </DeleteForm>
        <Footer>
          <CustomButton text="Cancel" styleType={CustomButtonStyle.WHITE} onClick={handleCancel} />
          <CustomButton text="Delete" styleType={CustomButtonStyle.RED} style={{ width: '70px' }} onClick={handleOk} />
        </Footer>
      </ModalWindow>
    </>
  );
};

export default DeleteConfirmModal;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 25px 10px 25px;

  background-color: #111111;
`;

const ModalWindow = styled(Modal)`
  .ant-modal-content {
    outline: 1px solid #333;
    background-color: #000000;
  }
  .ant-modal-close {
    background-color: #000000;
    color: #ffffff;
  }
  .ant-modal-header {
    background-color: #000000;
  }
  .ant-modal-title {
    color: #ffffff;
    font-size: 25px;
  }
  .ant-modal-header {
    padding: 25px 25px 0 25px;
  }
  .ant-modal-body {
    padding: 0;
  }
`;

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 5px;

  border-radius: 2px;
  background-color: #ff0000;
`;

const DeleteForm = styled.div`
  width: 100%;

  padding: 25px;

  outline: 1px solid #333;
  background-color: #111111;
`;

const Container = styled.div`
  padding: 0 25px 25px 25px;
`;

// export default DeleteConfirmModal;
