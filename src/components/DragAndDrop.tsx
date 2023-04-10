import React, { FC } from 'react';
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

interface DragAndDropProps {
  text: string;
}

const DragAndDrop: FC<DragAndDropProps> = ({ text }) => {
  return (
    <StyledDragger {...props}>
      <UploadDragIcon>
        <InboxOutlined />
      </UploadDragIcon>

      <DragText>Click or move the {text}</DragText>
      <DragText>You can upload multiple files</DragText>
    </StyledDragger>
  );
};

const UploadDragIcon = styled.p`
  color: #8d8d8d;
  font-size: 50px;
`;

const DragText = styled.p`
  color: #8d8d8d;
`;

const StyledDragger = styled(Dragger)`
  background-color: #000000 !important;
  border: none !important;
  border-radius: 2px;

  outline: 1px dashed #333;
  &:hover {
    border: none;
    outline: 1px dashed #ffffff;
  }
`;

export default DragAndDrop;
