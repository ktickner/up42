import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useUser } from "../../context/user-context";
import { useCart } from "../../context/cart-context";

import * as S from "./NavBar.styles";

const NavBar: React.FC = () => {
  const { state: userState } = useUser();
  const { state: cartState, dispatch } = useCart();

  function handleCartButtonClick() {
    if (cartState.isOpen) {
      dispatch({ type: "close" });

      return;
    }

    dispatch({ type: "open" });
  }

  return (
    <AppBar>
      <Toolbar>
        <S.NavBarContainer>
          <Typography>Credits: {userState.userCredits}</Typography>
          <IconButton onClick={handleCartButtonClick}>
            <ShoppingCartIcon htmlColor="#fff" />
          </IconButton>
        </S.NavBarContainer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
