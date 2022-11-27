import * as React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useCart } from "../../context/cart-context";

import { CartItem } from "./components/CartItem";

import * as S from "./CartDrawer.styles";

const CartDrawer: React.FC = () => {
  const { state } = useCart();

  return (
    <S.Drawer variant="persistent" open={state.isOpen} anchor="right">
      <S.DrawerContainer>
        <Typography variant="h5">Cart</Typography>
        <Stack flex="1" divider={<Divider />}>
          {state.blocks.map((block) => (
            <CartItem key={block.id} block={block} />
          ))}
        </Stack>
        <Divider />
        <Stack direction="row" justifyContent="space-between">
          <Typography>Total:</Typography>
          <Typography fontWeight={700}>{state.totalCost} credits</Typography>
        </Stack>
        <Button fullWidth variant="contained">
          Buy now
        </Button>
      </S.DrawerContainer>
    </S.Drawer>
  );
};

export default CartDrawer;
