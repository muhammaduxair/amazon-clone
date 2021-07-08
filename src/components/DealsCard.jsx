import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { GoldenButton } from "./GlobalComponents";

const DealsCard = ({ link, imgSrc, title }) => {
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
        <p className="price">$22.99 - $23.99</p>
        <p className="end">Ends in 20:11:18</p>
        <a href="#" className="articleLink">
          Save on ThisWorx Portable Car Vacuums
        </a>
        <a href="#" className="starbox">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          152317
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
    min-height: 150px;
    > .token {
      background: #c45500;
      padding: 3px 8px 3px 5px;
      font-size: 10px;
      color: #fff;
      font-weight: 700;
      width: fit-content;
      clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
    }
    > .price {
      color: #cc1c39;
      font-size: 16px;
      padding: 3px 0 5px 0;
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
      margin-top: 7px;
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
