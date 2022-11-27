import type { getBlocksFilters } from "./types";

const BLOCKS_URL =
  "https://proxy.cors.sh/https://api.up42.com/marketplace/blocks";

export async function fetchBlocks() {
  const response = await fetch(BLOCKS_URL);

  return response.json();
}

export function getBlocks({ pricingStrategy }: getBlocksFilters) {
  return fetchBlocks().then(({ data }) =>
    data.filter(
      (item: any) =>
        item?.metadata?.blockPricingStrategy?.name === pricingStrategy
    )
  );
}
