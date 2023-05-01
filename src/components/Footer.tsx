import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <p>Copyright &copy; 2023</p>
    </StyledFooter>
  );
};

export default Footer;

