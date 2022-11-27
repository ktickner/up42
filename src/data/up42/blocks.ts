import { BLOCKS } from "./mock";

interface getBlocksFilters {
  pricingStrategy: string;
}

export function fetchBlocks() {
  return BLOCKS;

  // fetch("https://proxy.cors.sh/https://api.up42.com/marketplace/blocks")
  //   .then((response) => response.json())
  //   .then(({ data }) =>
  //     data.filter(
  //       (item: any) => item?.metadata?.blockPricingStrategy?.name === "simple"
  //     )
  //   )
  //   .then(console.log);
}

export function getBlocks({ pricingStrategy }: getBlocksFilters) {
  return fetchBlocks().filter(
    (item: any) =>
      item?.metadata?.blockPricingStrategy?.name === pricingStrategy
  );
}
