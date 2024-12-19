export interface BaseProduct {
  product: string;
  type?: string;
  caliber?: string;
  category?: string;
  description: string;
  image?: string;
}

export interface Specification {
  type?: string;
  caliber?: string;
  model?: string;
  category?: string;
  specs: Record<string, string>;
  description: string;
  shelfLife: string;
  image?: string;
}