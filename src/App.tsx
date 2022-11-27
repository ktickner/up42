import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";

import { getBlocks } from "./data/up42";

import { DisplayBlock } from "./components/Block";

function App() {
  const blocks = getBlocks({ pricingStrategy: "simple" });

  return (
    <div>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Container>
            <Typography>Credits: 10.000</Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Container>
        <Stack direction="row" flexWrap="wrap" justifyContent="space-around">
          {blocks.map((block) => (
            <DisplayBlock block={block} />
          ))}
        </Stack>
      </Container>
      <Drawer variant="permanent" open anchor="right">
        hi
      </Drawer>
    </div>
  );
}

export default App;
