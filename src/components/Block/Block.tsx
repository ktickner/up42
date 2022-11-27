import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import type { Block } from "../../data/up42/types";

import * as S from "./Block.styles";

interface BlockProps {
  block: Block;
}

const DisplayBlock: React.FC<BlockProps> = ({ block }) => {
  return (
    <S.BlockContainer>
      <Typography>{block.displayName}</Typography>
      <Typography fontWeight={700}>
        {block.metadata.blockPricingStrategy.credits} credits
      </Typography>
      <Button variant="contained" fullWidth>
        Add to cart
      </Button>
    </S.BlockContainer>
  );
};

export default DisplayBlock;
