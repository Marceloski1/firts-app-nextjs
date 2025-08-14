import { StaticImageData } from "next/image";

export interface CurrencyData {
  id: number;
  code: string;
  name: string;
  icon: string;
}

export interface Card1 {
  image: StaticImageData;
  title: string;
  description: string;
}
