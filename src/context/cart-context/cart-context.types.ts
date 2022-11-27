import type { Block } from "../../data/up42/types";

type AddBlockAction = { type: "add-block"; payload: Block };
type OpenAction = { type: "open" };
type CloseAction = { type: "close" };

export type Action = AddBlockAction | OpenAction | CloseAction;
export type Dispatch = (action: Action) => void;
export type State = { blocks: Block[]; totalCost: number; isOpen: boolean };
export type CartProviderProps = { children: React.ReactNode };