export interface TenantData{
  id:number,
  name:string,
  address:string,
}


export interface PriceConfiguration {
    [key: string]: {
        priceType: "base" | "aditional";
        availableOptions: string[];
    };
}

export interface Attribute {
    name: string;
    widgetType: "switch" | "radio";
    defaultValue: string;
    availableOptions: string[];
}

export interface Category {
    _id:string;
    name: string;
    priceConfiguration: PriceConfiguration;
    attributes: Attribute[];
}

export type ProductAttribute={
  name:string;
  value:string | boolean;
}

export type Product={
  _id:string;
  name:string;
  description:string;
  categoryId:Category;
  priceConfiguration:PriceConfiguration;
  attributes:ProductAttribute[];
  image:string,
  isPublish:boolean;
  createdAt:string; 
}
