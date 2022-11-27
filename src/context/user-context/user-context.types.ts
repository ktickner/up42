export type Action = { type: "remove-credits"; payload: number };
export type Dispatch = (action: Action) => void;
export type State = { userCredits: number };
export type UserProviderProps = { children: React.ReactNode };
