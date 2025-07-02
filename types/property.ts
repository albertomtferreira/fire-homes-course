import { PropertyStatus } from "./propertyStatus";

export type Property = {
  id: string;
  address1: string;
  address2?: string;
  city: string;
  postcode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  status: PropertyStatus;
  images?: string[]
}

export type PropertyDetailsProps = {
  property: {
    status: PropertyStatus;
    price: number;
    bedrooms: number;
    bathrooms: number;
    address1?: string;
    address2?: string;
    city?: string;
    postcode?: string;
  };
  addressLines: string[];
}

export type CarouselAutoplayProps = {
  images?: string[]
}