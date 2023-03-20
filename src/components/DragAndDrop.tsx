import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import styled from 'styled-components';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '#',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const DragAndDrop = () => {
  return (
    <StyledDragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Do you want to deploy a new website without connecting to Git?</p>
      <p className="ant-upload-text">Click or move the downloaded files</p>
      <p className="ant-upload-hint">You can upload multiple files</p>
    </StyledDragger>
  );
};

const StyledDragger = styled(Dragger)`
  background-color: #537e7b !important;
  border-color: black !important;
  max-width: 1000px;
  margin: 0 auto;
`;

export default DragAndDrop;
