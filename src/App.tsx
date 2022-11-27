import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";

import { getBlocks } from "./data/up42";

import { DisplayBlock } from "./components/Block";
import { NavBar } from "./components/NavBar";

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
      <Drawer variant="permanent" open anchor="right">
        hi
      </Drawer>
    </div>
  );
}

export default App;
