import styled from "styled-components";

const HomeCards = ({ link, imgSrc, title }) => {
  return (
    <Card>
      <div>
        <h2>{title}</h2>
        <div>
          <img src={imgSrc} alt="card_image" />
        </div>
        <a href={link}>see more</a>
      </div>
    </Card>
  );
};

export default HomeCards;

const Card = styled.div`
  width: 25%;
  padding: 10px;
  height: 100%;
  > div {
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    > h2 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    > div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      margin-bottom: 15px;
      > img {
        height: 100%;
        max-height: 100%;
        max-width: none;
      }
    }
    > a {
      font-size: 13px;
      color: #007185;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 1115px) {
    width: 33%;
  }
`;
