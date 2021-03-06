import {
  CurrencyDescriptionEnum,
  CurrencyNameEnum,
  ExchangeRateCurrencyNameEnum,
  ProductNameEnum,
} from 'enums';
import { Item, SanityBlock, SanityKeyed } from './database';

import { ReactNode } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};

export type FunctionType<TArgs = void, TReturn = void> = (
  ...args: TArgs extends Array<unknown> ? TArgs : [TArgs]
) => TReturn;

export type PageProps<TExtraProps = void> = TExtraProps & {
  title: string;
};

export type ApplicationRoute = {
  href: string;
  text: string;
};

export type TimeToGo = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type GiftRegistryItem = {
  cashGift: boolean;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  purchased: boolean;
  contributed?: number;
  link?: string;
};

export type GiftRegistry = Array<
  SanityKeyed<
    Omit<Item, 'picture'> & {
      image: {
        id: string;
        url: string;
      };
    }
  >
>;

export type Content = Array<
  | SanityKeyed<SanityBlock>
  | {
      _type: 'image';
      height: number;
      maxWidth: number;
      url: string;
    }
>;

export type Product = {
  name: ProductNameEnum;
  price: number;
};

export type Currency = {
  description: CurrencyDescriptionEnum;
  name: CurrencyNameEnum;
};

export type CheerioElement = {
  children: Array<CheerioElement | CheerioNode>;
  attribs: {
    ispurchased: string;
  };
};

export type CheerioNode = {
  data: string;
};

export type ExchangeRateCurrencyResponse = {
  data: {
    currency: `CAD`;
    rates: {
      [key in ExchangeRateCurrencyNameEnum]: string;
    };
  };
};
