export interface Block {
  id: string;
  displayId: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
  updatedBy?: string | null;
  name: string;
  displayName: string;
  description: string;
  provider: string;
  type: string;
  metadata: {
    blockThumbnailUrl: string;
    pricingStrategy: {
      type: string;
      credits: number;
    };
    blockPricingStrategy: {
      name: string;
      unit: string;
      direction: string;
      credits: number;
    };
  };
  version: string;
  isPublic: boolean;
  isValid: boolean;
  isRestricted: boolean;
  isAccessGranted: boolean;
  isCreditPurchaseRequired: boolean;
  tags: string[];
  isPublicVersion: boolean;
  manifestVersion: number;
}

export interface getBlocksFilters {
  pricingStrategy: string;
}
