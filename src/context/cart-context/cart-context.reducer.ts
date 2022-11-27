import type { State, Action } from "./cart-context.types";

export function cartReducer(state: State, action: Action) {
  switch (action.type) {
    case "add-block": {
      const currentBlocks = state.blocks;
      const newBlock = action.payload;

      if (currentBlocks.find((block) => block.id === newBlock.id)) {
        return state;
      }

      const newTotal =
        state.totalCost + newBlock.metadata.blockPricingStrategy.credits;

      return {
        ...state,
        blocks: [...currentBlocks, newBlock],
        totalCost: newTotal,
      };
    }
    case "remove-block": {
      const removeIndex = state.blocks.findIndex(
        (block) => block.id === action.payload
      );

      const newTotal =
        state.totalCost -
        state.blocks[removeIndex].metadata.blockPricingStrategy.credits;

      const newBlocks = [...state.blocks];
      newBlocks.splice(removeIndex, 1);

      return { ...state, blocks: [...newBlocks], totalCost: newTotal };
    }
    case "clear": {
      return { ...state, blocks: [], totalCost: 0 };
    }
    case "open": {
      return { ...state, isOpen: true };
    }
    case "close": {
      return { ...state, isOpen: false };
    }
    default: {
      throw new Error(
        `Unhandled action type: ${(action as { type: string }).type}`
      );
    }
  }
}
