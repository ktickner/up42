import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { getBlocks } from "./data/up42";
import type { Block } from "./data/up42/types";

import { CartProvider } from "./context/cart-context";
import { UserProvider } from "./context/user-context";

import { DisplayBlock } from "./components/Block";
import { NavBar } from "./components/NavBar";
import { CartDrawer } from "./components/CartDrawer";

import * as S from "./App.styles";

function App() {
  const [blocks, setBlocks] = React.useState<Block[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);

  async function getBlocksWithSimplePricing() {
    setIsLoading(true);

    try {
      const blocks = await getBlocks({ pricingStrategy: "simple" });

      setBlocks(blocks);
      setIsLoading(false);
    } catch (err) {
      setHasError(true);
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    getBlocksWithSimplePricing();
  }, []);

  return (
    <div>
      <CssBaseline />
      <UserProvider>
        <CartProvider>
          <NavBar />
          <S.AppContainer>
            {isLoading ? (
              <S.LoadingContainer>
                <CircularProgress />
                <Typography>Loading blocks...</Typography>
              </S.LoadingContainer>
            ) : hasError ? (
              <S.ErrorContainer>
                <ErrorOutlineIcon color="error" fontSize="large" />
                <Typography textAlign="center">
                  Oh snap, something went wrong on the server. You may have been
                  rate limited. <br />
                  Maybe try again later.
                </Typography>
              </S.ErrorContainer>
            ) : (
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={4}
              >
                {blocks.map((block) => (
                  <DisplayBlock key={block.id} block={block} />
                ))}
              </Stack>
            )}
            <CartDrawer />
          </S.AppContainer>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
