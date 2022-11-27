import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import * as S from "./NavBar.styles";

const NavBar: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <S.NavBarContainer>
          <Typography>Credits: 10.000</Typography>
          <ShoppingCartIcon />
        </S.NavBarContainer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
