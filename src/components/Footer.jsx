import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Amazon Clone Develop by Muhammad Uzair.</p>
      <a href="https://github.com/muhammaduxair?tab=repositories">
        Github Profile
      </a>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #232f3e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  flex-wrap: wrap;
  > p,
  > a {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }
  > a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
