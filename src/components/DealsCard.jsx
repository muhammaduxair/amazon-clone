import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { GoldenButton } from "./GlobalComponents";

const DealsCard = () => {
  return (
    <Card>
      <div className="imgBox">
        <img
          src="https://specials-images.forbesimg.com/imageserve/5da64bc4cd594c0006212b1c/960x0.jpg?fit=scale"
          alt="card_image"
        />
      </div>
      <div className="content_box">
        <p className="token">DEAL OF THE DAY</p>
        <h4 className="title">
          SAMSUNG Galaxy S21+ Plus 5G Factory Unlocked Android Cell Phone 128GB
          US Version Smartphone Pro-Grade Camera 8K Video 12MP High Res, Phantom
          Silver
        </h4>
        <a href="#" className="starbox">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          152317
        </a>
        <p className="price">
          <sup>$</sup>550<sup>99</sup>
        </p>
        <p className="end">Ship to Pakistan</p>
        <a href="#" className="articleLink">
          Save on ThisWorx Portable Car Vacuums
        </a>
      </div>
      <GoldenButton width="100%" padding="7px">
        Add to Cart
      </GoldenButton>
    </Card>
  );
};

export default DealsCard;

const Card = styled.div`
  width: 100%;
  height: fit-content;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  > .imgBox {
    width: 100%;
    height: 200px;
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
  > .content_box {
    min-height: 250px;
    > .token {
      background: #c45500;
      padding: 3px 8px 3px 5px;
      font-size: 10px;
      color: #fff;
      font-weight: 700;
      width: fit-content;
      clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
    }
    > .title {
      font-size: 15px;
      margin: 7px 0;
      font-weight: 500;
      color: #0f1111;
    }
    > .price {
      color: #0f1111;
      font-size: 16px;
      padding-bottom: 5px;
      > sup {
        font-size: 11px;
      }
    }
    > .end {
      font-size: 10px;
      color: #565959;
    }
    > .articleLink {
      font-size: 11px;
      color: #0066c0;
      line-height: 15px;
    }
    > .starbox {
      display: flex;
      text-decoration: none;
      align-items: center;
      font-size: 12px;
      color: #0f1111;
      margin-bottom: 5px;
      svg {
        color: #fdc503;
        stroke: #c9911c;
        font-size: 16px;
        &:last-child {
          margin-right: 3px;
        }
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
