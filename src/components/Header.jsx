import styled from "styled-components";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Header = ({ cartItemsLength }) => {
  const selectListREF = useRef(null);
  const [selectListData] = useState([
    "all department",
    "arts and crafts",
    "automative",
    "baby",
    "beauty & personal care",
    "books",
    "computers",
    "digital musics",
    "electronics",
    "kindle store",
    "prime video",
    "women fashion",
    "men fashion",
    "kids fashion",
    "girl fashion",
    "boys fashion",
  ]);
  const [selectedList, setSelectedList] = useState("All");
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [isFocus, setisFocus] = useState(false);

  return (
    <Container>
      <NavLeft>
        <Link to="/">
          <img src="/logo.svg" alt="amazon logo" />
        </Link>
        <span>
          <RoomOutlinedIcon htmlColor="#fff" fontSize="small" />
          <div>
            <p>Deliver to</p>
            <b>Pakistan</b>
          </div>
        </span>
      </NavLeft>
      <NavCenter>
        <div
          style={
            isFocus
              ? { boxShadow: "0 0 0 2px #f90, 0 0 0 3px rgb(255 153 0 / 50%)" }
              : {}
          }
        >
          <span>
            <label
              htmlFor="selectList"
              onClick={() => {
                selectListREF.current.style.display = selectIsOpen
                  ? "none"
                  : "block";
                setSelectIsOpen(!selectIsOpen);
              }}
            >
              {selectedList}
              <ArrowDropDownIcon htmlColor="#000" fontSize="small" />
            </label>
            <select
              id="selectList"
              ref={selectListREF}
              size={10}
              onChange={(e) => {
                selectListREF.current.style.display = "none";
                setSelectedList(e.target.value);
                setSelectIsOpen(false);
              }}
            >
              {selectListData.map((v, i) => (
                <option value={v} key={i} selected={i === 0 ? true : false}>
                  {v}
                </option>
              ))}
            </select>
          </span>
          <input
            type="text"
            onFocus={() => setisFocus(true)}
            onBlur={() => setisFocus(false)}
          />
          <button
            onClick={() => setisFocus(true)}
            onBlur={() => setisFocus(false)}
          >
            <SearchIcon htmlColor="#3e3a36" />
          </button>
        </div>
      </NavCenter>
      <NavRight>
        <div>
          <img src="/pakistan.png" alt="pakistan_logo" width={25} height={18} />
          <ArrowDropDownIcon htmlColor="#cccccc" size="small" />
        </div>
        <div>
          <p>Hello, Uzair</p>
          <b>Account & Lists</b>
        </div>
        <div>
          <p>Returns</p>
          <b>& Orders</b>
        </div>
        <Link to="/cart">
          <div>
            <ShoppingCartIcon htmlColor="#fff" />
            <p>
              <b>{cartItemsLength}</b>
              <b>Cart</b>
            </p>
          </div>
        </Link>
      </NavRight>
    </Container>
  );
};

export default Header;

const NavRight = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  white-space: nowrap;
  background: #131921;
  > div:nth-child(1) {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: flex-end;
  }
  > div:nth-child(2),
  div:nth-child(3) {
    user-select: none;
    cursor: pointer;
    padding: 0 10px;
    color: #fff;
    > p {
      font-size: 12px;
      color: #cccccc;
    }
    > b {
      font-size: 14px;
      font-weight: 700;
    }
  }
  > a {
    &:active,
    &:focus {
      text-decoration: none;
    }
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover > p {
        margin-bottom: 5px;
      }
      > svg {
        font-size: 35px;
      }
      > p {
        font-size: 12px;
        color: #fff;
        font-weight: bold;
        margin: auto 0 3px -3px;
        display: flex;
        flex-direction: column;
        > b:first-child {
          margin: 0 0 5px 5px;
          font-size: 14px;
        }
      }
    }
  }
`;

const NavCenter = styled.div`
  width: 60%;
  padding: 7px;
  background: #131921;
  > div {
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    box-sizing: content-box;
    > span {
      height: 100%;
      background: #f3f3f3;
      border: 1px solid #dddddd;
      width: fit-content;
      position: relative;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      z-index: 20;
      > label {
        cursor: pointer;
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: 12px;
        text-transform: capitalize;
        user-select: none;
        > svg {
          margin-left: auto;
        }
      }
      > select {
        position: absolute;
        top: 100%;
        left: 0;
        outline: none;
        display: none;
        min-width: 150px;
        > option {
          padding: 2px 5px;
          text-transform: capitalize;
        }
      }
    }
    > input {
      outline: none;
      border: none;
      flex: 1;
      font-size: 15px;
      padding: 0 10px;
    }
    > button {
      background: #fcbd69;
      outline: none;
      border: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 0 12px;
      cursor: pointer;
      &:active {
        background: #e19a3b;
      }
      > svg {
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
`;

const NavLeft = styled.div`
  display: flex;
  padding: 12px 10px 12px 20px;
  align-items: center;
  background: #131921;
  width: 210px;
  > a {
    height: 100%;
    padding: 2px;
    > img {
      -webkit-user-drag: none;
      user-select: none;
      height: 100%;
    }
  }
  > span {
    display: flex;
    margin-left: 10px;
    > svg {
      align-self: flex-end;
    }
    > div {
      color: #fff;
      > p {
        font-size: 12px;
        color: #cccccc;
      }
      > b {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
`;
const Container = styled.header`
  background-color: #131921;
  display: flex;
  height: 55px;
  max-width: 100%;
`;
