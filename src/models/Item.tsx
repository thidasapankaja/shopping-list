export type Item = {
  name: string;
  image: string;
  price: string;
  quantity?: number;
  id: string;
  store: string;
};

export interface PurchasedtItem extends Item {
  purchasedDate: EpochTimeStamp;
}

export type CompletedPurchase = {
  items: PurchasedtItem[],
  completedOn: EpochTimeStamp;
  total: number;
}