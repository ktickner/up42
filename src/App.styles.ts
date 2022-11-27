import { styled } from "@mui/system";

import Container from "@mui/material/Container";

export const AppContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const LoadingContainer = styled("div")`
  height: ${({ theme }) => theme.spacing(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ErrorContainer = styled("div")`
  height: ${({ theme }) => theme.spacing(30)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;
