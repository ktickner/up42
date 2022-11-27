import type { State, Action } from "./user-context.types";

export function userReducer(state: State, action: Action) {
  switch (action.type) {
    case "remove-credits": {
      const currentCredits = state.userCredits;
      const cost = action.payload;

      if (currentCredits < cost) {
        throw new Error("insufficient credits");
      }

      return { userCredits: currentCredits - cost };
    }
    default: {
      throw new Error(
        `Unhandled action type: ${(action as { type: string }).type}`
      );
    }
  }
}
