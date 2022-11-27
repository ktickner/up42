import { styled } from "@mui/system";

import MUIDrawer from "@mui/material/Drawer";

export const Drawer = styled(MUIDrawer)`
  .MuiPaper-root {
    z-index: 0;
    padding-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const DrawerContainer = styled("div")`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(3)};
`;
