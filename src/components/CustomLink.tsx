import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CustomLinkProps {
  text: string;
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, to }) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration-line: underline;
  &:hover {
    font-weight: 500;
    color: #eaeaea;
  }
`;

export default CustomLink;
