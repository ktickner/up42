import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";

export const BlockContainer = styled(Paper)`
  margin: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
  width: 200px;
  max-width: 100%;
`;
