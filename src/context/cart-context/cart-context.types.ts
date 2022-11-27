import type { Block } from "../../data/up42/types";

type AddBlockAction = { type: "add-block"; payload: Block };
type RemoveBlockAction = { type: "remove-block"; payload: string };
type ClearCartAction = { type: "clear" };
type OpenAction = { type: "open" };
type CloseAction = { type: "close" };

export type Action =
  | AddBlockAction
  | RemoveBlockAction
  | OpenAction
  | CloseAction
  | ClearCartAction;
export type Dispatch = (action: Action) => void;
export type State = { blocks: Block[]; totalCost: number; isOpen: boolean };
export type CartProviderProps = { children: React.ReactNode };
