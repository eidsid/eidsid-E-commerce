// ! languages type
export type TLanguages = "en" | "ar";

// ! product card
export interface IProductCard {
  id: string;
  imgUrl: string;
  name: string;
  description?: string;
  price: number;
  rating: number[];
  ratingAmount: number;
  discount?: number;
  colors?: string[];
}

// ! category card
export interface ICategoryCard {
  title: string;
  icon: string;
}

// ! time type
export type TTime = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

// ! checkout > checkout card component
export interface ICheckoutCard {
  image: string;
  name: string;
  price: number;
}

// ! cart > total card section
export type TPrice = {
  subTotal: number;
  deliveryPrice: number;
  total: number;
};

// ! checkout form inputs
export interface ICredentials {
  firstName: string;
  companyName: string;
  streetAddress: string;
  apartment: string;
  city: string;
  phoneNumber: string;
  email: string;
  password: string;
}

// ! lang props in page
export interface ILangProps {
  params: { lang: TLanguages };
}

// ! lang props to components
export interface ILangPropsToComponent {
  lang: TLanguages;
}

// ! checkout form inputs
export interface ICredentials {
  firstName: string;
  companyName: string;
  streetAddress: string;
  apartment: string;
  city: string;
  phoneNumber: string;
  email: string;
  password: string;
}
// ! cartProducts atom interface recoil
export interface ICartProductCard extends IProductCard {
  amount: number;
}

// ! children
export interface IChildren {
  children: React.ReactNode;
}

export interface link {
  text: string;
  href: string;
}
