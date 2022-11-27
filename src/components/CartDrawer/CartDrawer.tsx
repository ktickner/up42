import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { CartItem } from "./components/CartItem";

import * as S from "./CartDrawer.styles";

const CartDrawer: React.FC = () => {
  return (
    <Drawer variant="permanent" open anchor="right">
      <S.DrawerContainer>
        <Typography variant="h5">Cart</Typography>
        <Stack flex="1" divider={<Divider />}>
          <CartItem />
          <CartItem />
          <CartItem />
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <Typography>Total:</Typography>
          <Typography fontWeight={700}>850 credits</Typography>
        </Stack>
        <Button fullWidth variant="contained">
          Buy now
        </Button>
      </S.DrawerContainer>
    </Drawer>
  );
};

export default CartDrawer;
