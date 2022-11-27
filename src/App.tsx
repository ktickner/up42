import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";

import { getBlocks } from "./data/up42";

import { DisplayBlock } from "./components/Block";
import { NavBar } from "./components/NavBar";
import { CartDrawer } from "./components/CartDrawer";

import * as S from "./App.styles";

function App() {
  const blocks = getBlocks({ pricingStrategy: "simple" });

  return (
    <div>
      <CssBaseline />
      <NavBar />
      <S.AppContainer>
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
          {blocks.map((block) => (
            <DisplayBlock key={block.id} block={block} />
          ))}
        </Stack>
      </S.AppContainer>
      <CartDrawer />
    </div>
  );
}

export default App;
