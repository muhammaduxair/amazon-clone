import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Amazon Clone Develop by{" "}
        <a href="https://github.com/muhammaduxair">Muhammad Uzair.</a>
      </p>
      <a href="https://github.com/muhammaduxair/amazon-clone">
        Github Repo Link
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
  margin-top: auto;
  > p,
  a {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }
  a {
    color: #cccccc;
    &:hover {
      text-decoration: underline;
    }
  }
`;
