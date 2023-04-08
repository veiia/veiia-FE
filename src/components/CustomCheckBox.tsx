import styled from 'styled-components';
import { Checkbox } from 'antd';

interface CustomCheckBoxProps {
  text: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ text }) => {
  return <StyledCheckbox>{text}</StyledCheckbox>;
};

const StyledCheckbox = styled(Checkbox)`
  color: white;
  border: none;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #898989;
    outline: 1px solid #333 !important;
  }
`;

export default CustomCheckBox;
