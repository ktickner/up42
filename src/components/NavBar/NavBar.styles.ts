import { styled } from "@mui/system";

import Container from "@mui/material/Container";

export const NavBarContainer = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing(4)};
`;
