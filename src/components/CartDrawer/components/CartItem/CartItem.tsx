import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CartItem: React.FC = () => {
  return (
    <Box px={2} py={4} display="flex" flexDirection="column" gap={2}>
      <Typography>I'm an item</Typography>
      <Typography fontWeight={700} alignSelf="flex-end">
        700 credits
      </Typography>
    </Box>
  );
};

export default CartItem;
