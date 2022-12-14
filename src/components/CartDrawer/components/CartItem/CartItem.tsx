import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import { useCart } from "../../../../context/cart-context";

import { Block } from "../../../../data/up42/types";

interface CardItemProps {
  block: Block;
}

const CartItem: React.FC<CardItemProps> = ({ block }) => {
  const { dispatch } = useCart();

  function handleRemoveClick() {
    dispatch({ type: "remove-block", payload: block.id });
  }

  return (
    <Box px={2} py={4} display="flex" flexDirection="column" gap={2}>
      <Typography>{block.displayName}</Typography>
      <Typography fontWeight={700} alignSelf="flex-end">
        {block.metadata.blockPricingStrategy.credits} credits
      </Typography>
      <Button
        variant="text"
        color="error"
        onClick={handleRemoveClick}
        startIcon={<DeleteIcon />}
      >
        Remove
      </Button>
    </Box>
  );
};

export default CartItem;
