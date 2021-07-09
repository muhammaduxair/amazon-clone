import styled from "styled-components";

const ShoppingItemBox = () => {
  return (
    <Card>
      <span>
        <img
          src="https://specials-images.forbesimg.com/imageserve/5da64bc4cd594c0006212b1c/960x0.jpg?fit=scale"
          alt="product_image"
        />
      </span>
      <span>
        <h3>
          SAMSUNG Galaxy S21+ Plus 5G Factory Unlocked Android Cell Phone 128GB
          US Version Smartphone Pro-Grade Camera 8K Video 12MP High Res, Phantom
          Silver
        </h3>
        <a>In Stock</a>
        <p className="gift_banner">
          <input type="checkbox" id="prod_check" />
          This is a Gift <a href="#">Learn More</a>
        </p>
        <p className="type_banner">
          <b>Color: </b> Phantom Silver
        </p>
        <p className="type_banner">
          <b>Size: </b> 128GB
        </p>
        <div>
          <p>Quantity: 1</p>
          <a href="#">Delete</a>
          <a href="#">Save for later</a>
        </div>
      </span>
      <span>
        <h3>$550.99</h3>
      </span>
    </Card>
  );
};

export default ShoppingItemBox;

const Card = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0;
  border-bottom: 2px solid #bdbaba;
  > span:nth-child(1) {
    min-width: 200px;
    max-width: 200px;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    > img {
      height: 100%;
    }
  }
  > span:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    > * {
      margin-bottom: 5px;
    }
    > h3 {
      font-weight: 400;
    }
    > a {
      color: #067d62;
      font-size: 12px;
      margin-bottom: 7px;
    }
    > .gift_banner {
      margin-bottom: 10px;
      display: flex;
      font-size: 12px;
      display: flex;
      align-items: center;
      > input {
        width: 20px;
      }
      > a {
        text-decoration: none;
        margin-left: 3px;
        color: #067d62;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .type_banner {
      font-size: 12px;
      > b {
        margin-right: 3px;
      }
    }
    > div {
      display: flex;
      font-size: 12px;
      padding-top: 5px;
      > p {
        padding-right: 10px;
      }
      > a {
        padding: 0 10px;
        border-left: 1px solid #cccccc;
        color: #067d62;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  > span:nth-child(3) {
    min-width: 150px;
    padding-left: 20px;
    > h3 {
      text-align: right;
      font-weight: 600;
    }
  }
`;
