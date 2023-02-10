import { ReactNode } from 'react';
import styled from 'styled-components';

interface FormWrapperProps {
  children?: ReactNode;
}

const CustomFormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return <FormWrapper>{children}</FormWrapper>;
};

const FormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default CustomFormWrapper;
