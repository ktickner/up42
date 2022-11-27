import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import type { Block } from "../../data/up42/types";

import { useCart } from "../../context/cart-context";

import * as S from "./Block.styles";

interface BlockProps {
  block: Block;
}

const DisplayBlock: React.FC<BlockProps> = ({ block }) => {
  const { dispatch } = useCart();

  function handleAddToCardClick() {
    dispatch({ type: "add-block", payload: block });
  }

  return (
    <S.BlockContainer>
      <Typography>{block.displayName}</Typography>
      <Typography fontWeight={700}>
        {block.metadata.blockPricingStrategy.credits} credits
      </Typography>
      <Button variant="contained" fullWidth onClick={handleAddToCardClick}>
        Add to cart
      </Button>
    </S.BlockContainer>
  );
};

export default DisplayBlock;
