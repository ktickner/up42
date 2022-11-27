import { styled } from "@mui/system";

export const DrawerContainer = styled("div")`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(3)};
`;
