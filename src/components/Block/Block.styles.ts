import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

export const BlockContainer = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 300px;
  max-width: 100%;
`;
