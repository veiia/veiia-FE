import styled from 'styled-components';
import { Checkbox } from 'antd';

interface CustomCheckBoxProps {
  text: string;
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({ text }) => {
  return <StyledCheckbox>{text}</StyledCheckbox>;
};

const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #18576a;
  }
`;

export default CustomCheckBox;
