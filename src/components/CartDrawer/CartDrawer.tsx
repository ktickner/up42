import * as React from "react";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useCart } from "../../context/cart-context";
import { useUser } from "../../context/user-context";

import { CartItem } from "./components/CartItem";

import * as S from "./CartDrawer.styles";

const CartDrawer: React.FC = () => {
  const [error, setError] = React.useState<string | null>(null);
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { state: userState, dispatch: userDispatch } = useUser();

  function handleBuyNowClick() {
    if (userState.userCredits < cartState.totalCost) {
      setError(
        "Insufficient credits. Please reconsider your life choices and try again."
      );

      return;
    }

    setError(null);

    userDispatch({
      type: "remove-credits",
      payload: cartState.totalCost,
    });
    cartDispatch({ type: "clear" });
  }

  return (
    <S.Drawer variant="persistent" open={cartState.isOpen} anchor="right">
      <S.DrawerContainer>
        <Typography variant="h5">Cart</Typography>
        <Stack flex="1" divider={<Divider />}>
          {cartState.blocks.map((block) => (
            <CartItem key={block.id} block={block} />
          ))}
        </Stack>
        <Divider />
        {error && <Typography color="error">{error}</Typography>}
        <Stack direction="row" justifyContent="space-between">
          <Typography>Total:</Typography>
          <Typography fontWeight={700}>
            {cartState.totalCost} credits
          </Typography>
        </Stack>
        <Button fullWidth variant="contained" onClick={handleBuyNowClick}>
          Buy now
        </Button>
      </S.DrawerContainer>
    </S.Drawer>
  );
};

export default CartDrawer;
