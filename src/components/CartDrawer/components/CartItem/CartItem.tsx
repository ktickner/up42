import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Block } from "../../../../data/up42/types";

interface CardItemProps {
  block: Block;
}

const CartItem: React.FC<CardItemProps> = ({ block }) => {
  return (
    <Box px={2} py={4} display="flex" flexDirection="column" gap={2}>
      <Typography>{block.displayName}</Typography>
      <Typography fontWeight={700} alignSelf="flex-end">
        {block.metadata.blockPricingStrategy.credits} credits
      </Typography>
    </Box>
  );
};

export default CartItem;
