import React, { FC } from 'react';
import CustomButton from './CustomButton';

interface EditButtonProps {
  editable: boolean;
  onClick: () => void;
}

const EditButton: FC<EditButtonProps> = ({ editable, onClick }) => {
  function toogleIsediteble() {
    onClick();
    console.log(editable);
  }
  if (editable) {
    return <CustomButton onClick={toogleIsediteble} text={'Сохранить'} />;
  }
  return <CustomButton onClick={toogleIsediteble} text={'Редактировать'} />;
};

export default EditButton;
