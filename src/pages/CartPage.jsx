import styled from "styled-components";
import SEO from "../components/SEO";
import ShoppingItemBox from "../components/ShoppingItemBox";
import { GoldenButton } from "../components/GlobalComponents";

const CartPage = () => {
  return (
    <CartContaiber>
      <SEO title="Cart | Amazon Clone" />
      <CartItemsBox>
        <span>
          <h1>Shopping Cart</h1>
          <p>Price</p>
          <hr />
        </span>
        {[0, 1, 2, 3, 4].map((v, i) => (
          <ShoppingItemBox key={i} />
        ))}
      </CartItemsBox>
      <CartCheckoutBox>
        <h3>
          Subtotal (5 items): <b>$2754.95</b>
        </h3>
        <label htmlFor="confirm">
          <input type="checkbox" id="confirm" />
          This order contains a gift
        </label>
        <GoldenButton width="100%">Proceed to Checkout</GoldenButton>
      </CartCheckoutBox>
    </CartContaiber>
  );
};

export default CartPage;

const CartContaiber = styled.div`
  padding: 15px;
  display: flex;
`;
const CartItemsBox = styled.div`
  max-width: 100%;
  padding: 20px 15px;
  background: #fff;
  margin-right: 15px;
  hr {
    background: #565959;
  }
  > span {
    h1 {
      font-weight: 400;
      margin-bottom: 2px;
      font-size: 26px;
    }
    p {
      font-size: 14px;
      text-align: right;
      color: #565959;
      margin-bottom: 2px;
    }
  }
`;
const CartCheckoutBox = styled.div`
  padding: 20px;
  background: #fff;
  height: fit-content;
  > h3 {
    font-szie: 22px;
    font-weight: 400;
    margin-bottom: 5px;
    white-space: nowrap;
    > b {
      font-weight: 700;
    }
  }
  > label {
    font-size: 13px;
    display: flex;
    align-items: center;
    > input {
      width: 15px;
      margin-right: 5px;
    }
  }
  > button {
    margin-top: 15px;
  }
`;
