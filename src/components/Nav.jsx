import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const Nav = () => {
  const [navListData] = useState([
    "today's deals",
    "customer services",
    "gift cards",
    "registry",
    "sell",
  ]);

  return (
    <NavContainer>
      <div>
        <button>
          <MenuIcon htmlColor="#fff" /> All
        </button>
        <ul>
          {navListData.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Amazon response's to COVID-19</p>
      </div>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled.nav`
  background: #232f3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 14px;
  >div{
    display: flex;
    color: #fff;
    >button, > p{
      font-size: 12px;
      font-weight: 700;
      cursor:pointer;
    };
    >button{
      background: none;
      outline: none;
      border: none;
      display:flex;
      align-items:center;
      color:#fff;
      margin-right:10px;
    };
    ul{
      list-style: none;
      display: flex;
      align-items: center;
       >li{
         margin:0 7px;
         text-transform:capitalize;
         font-size:12px;
       }
    }
  }
}
`;
