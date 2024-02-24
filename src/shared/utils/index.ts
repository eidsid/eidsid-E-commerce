import { ICartProductCard, IProductCard, TLanguages, TTime } from "../types";

export function calculateTimeLeft(targetDate: Date): TTime {
  const currentDate = new Date();
  const timeLeft = targetDate.getTime() - currentDate.getTime();

  // ! Converting milliseconds to days, hours, minutes, and seconds
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const validatingZero = (value: number): string => {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  };

  // ! Returning the time left as an object
  return {
    days: validatingZero(daysLeft),
    hours: validatingZero(hoursLeft),
    minutes: validatingZero(minutesLeft),
    seconds: validatingZero(secondsLeft),
  };
}

// ! amount handlers
export function increaseAmount(amount: number): number {
  return amount >= 20 ? amount : amount + 1;
}
export function decreaseAmount(amount: number): number {
  return amount - 1;
}
// ! calculating carts delivery price
export function calculateDeliveryPrice(
  cartArray: ICartProductCard[],
  state: number
): number {
  if (cartArray.length > 0) {
    let sum = 0;
    sum = cartArray.reduce((prev, item) => {
      if (item.discount) {
        return prev + item.amount * (item.price * (item.discount / 100));
      } else {
        return prev + item.amount * item.price;
      }
    }, 0);

    return sum >= 140 ? 0 : 100;
  } else {
    return state;
  }
}
// ! calculating carts subtotal
export function calculateSubtotal(
  cartArray: ICartProductCard[],
  state: number
) {
  if (cartArray.length > 0) {
    return cartArray.reduce((prev, item) => {
      if (item.discount) {
        return prev + item.amount * (item.price * (item.discount / 100));
      } else {
        return prev + item.amount * item.price;
      }
    }, 0);
  } else {
    return state;
  }
}

// ! get locale lang in server components via headers.get()
export function getLocaleInServer(headers: any) {
  return headers().get("locale") as TLanguages;
}
