import React, { FC } from 'react';
import CustomButton from './CustomButton';

interface EditButtonProps {
  editable: boolean;
  onClick: () => void;
  active: string;
  notActive: string;
}

const EditButton: FC<EditButtonProps> = ({ editable, onClick, active, notActive }) => {
  function toogleIsediteble() {
    onClick();
    console.log(editable);
  }
  if (editable) {
    return <CustomButton onClick={toogleIsediteble} text={active} />;
  }
  return <CustomButton onClick={toogleIsediteble} text={notActive} />;
};

export default EditButton;
