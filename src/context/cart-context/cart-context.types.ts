import type { Block } from "../../data/up42/types";

export type Action = { type: "add-block"; payload: Block };
export type Dispatch = (action: Action) => void;
export type State = { blocks: Block[]; totalCost: number };
export type CartProviderProps = { children: React.ReactNode };
