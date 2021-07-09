import { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HomeCards from "../components/HomeCards";
import DealsCard from "../components/DealsCard";
import { coverImageSrc, ContentData } from "../Data/MainPageData";
import SEO from "../components/SEO";

const LandingPage = ({ className }) => {
  const [coverIndex, setCoverIndex] = useState(0);

  return (
    <ContentWrapper imgURL={coverImageSrc[coverIndex]}>
      <SEO title="Amazon Clone | Develop by Muhammad Uzair" />
      <div className="banner_slider"></div>
      <div className="arrow_container">
        <ArrowBackIosIcon
          onClick={() => setCoverIndex(coverIndex === 0 ? 4 : coverIndex - 1)}
        />
        <ArrowForwardIosIcon
          onClick={() => setCoverIndex(coverIndex === 4 ? 0 : coverIndex + 1)}
        />
      </div>
      <CardsBlock>
        {ContentData.map((v, i) => (
          <HomeCards key={i} title={v.title} imgSrc={v.imgSrc} link={v.link} />
        ))}
      </CardsBlock>
      <DealsBlock>
        <div className="header">
          <h1>Top Deales</h1>
          <p>Shop Today’s Deals, Lightning Deals, and limited-time discounts</p>
        </div>
        <div className="cardBox">
          <span className="row">
            {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, i) => (
              <div className="card">
                <DealsCard key={i} />
              </div>
            ))}
          </span>
        </div>
      </DealsBlock>
    </ContentWrapper>
  );
};

export default LandingPage;

const DealsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 10px;
  > .header {
    padding: 10px 30px 10px 10px;
    background: #fff;
    margin-left: 10px;
    margin-bottom: 20px;
    width: fit-content;
    clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
    > h1 {
      font-size: 24px;
      font-weight: 700;
    }
    > p {
      line-height: 22px;
      font-size: 12px;
    }
  }
  > .cardBox {
    max-width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    > .row {
      width: 100%;
      display: flex;
      flex-wrap:wrap;
      border: 1px solid #dededf;
      > .card {
        width: 20%;
        border: 1px solid #dededf;
        height: fit-content;
      }
    }
  }
  @media (max-width: 1115px) {
    > .cardBox {
      > .row {
        > .card {
          width: 25%;
        }
      }
  }
`;

const CardsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: -55vh;
`;

const ContentWrapper = styled.main`
  width: 100%;
  flex: 1;
  position: relative;
  > .banner_slider {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    background-image: url(${(props) => props.imgURL});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  > .arrow_container {
    display: flex;
    width: 100%;
    height: 90vh;
    padding: 100px 30px;
    justify-content: space-between;
    background-image: linear-gradient(
      to bottom,
      transparent,
      transparent,
      #dfdfdf41,
      #dfdfdf86,
      #dfdfdfbb,
      #dfdfdf
    );
    > svg {
      z-index: 10;
      cursor: pointer;
      font-size: 40px;
      color: #cccccc;
    }
  }
`;
