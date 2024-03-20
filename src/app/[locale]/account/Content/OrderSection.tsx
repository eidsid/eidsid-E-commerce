import { TLanguages } from "@/shared/types";
import React from "react";
type props = {
  title: string;
  locale: TLanguages;
  dectionary: {
    order: string;
    Date: string;
    Total: string;
    DeleverAdress: string;
    paymentId: string;
    products: string;
  };
};

export const OrderSection = ({ title, locale, dectionary }: props) => {
  const orders = [
    {
      id: 1,
      date: "2024-02-10",
      total: 120,
      items: [
        { id: 1, name: "Product 1", price: 50 },
        { id: 2, name: "Product 2", price: 30 },
        { id: 3, name: "Product 3", price: 40 },
      ],
      deliveryAddress: "123 Main St, City, Country",
      paymentId: "PAYMENT123",
    },
    {
      id: 2,
      date: "2024-02-09",
      total: 90,
      items: [
        { id: 4, name: "Product 4", price: 25 },
        { id: 5, name: "Product 5", price: 35 },
        { id: 6, name: "Product 6", price: 30 },
      ],
      deliveryAddress: "456 Oak St, Town, Country",
      paymentId: "PAYMENT456",
    },
    {
      id: 3,
      date: "2024-02-08",
      total: 150,
      items: [
        { id: 7, name: "Product 7", price: 70 },
        { id: 8, name: "Product 8", price: 40 },
        { id: 9, name: "Product 9", price: 40 },
      ],
      deliveryAddress: "789 Elm St, Village, Country",
      paymentId: "PAYMENT789",
    },
  ];

  return (
    <div>
      <div>{title}</div>

      <div className="container mx-auto py-6 flex flex-wrap gap-4 justify-center">
        {orders.map((order, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4 ">
            <h2 className="text-lg font-semibold mb-2">
              {dectionary.order} {order.id}
            </h2>
            <p className="text-gray-600 mb-2">
              {dectionary.Date} : {order.date}
            </p>
            <p className="text-gray-600 mb-2">
              {dectionary.Total} : ${order.total}
            </p>
            <p
              className={`flex text-gray-600 mb-2 gap-4 ${
                locale == "ar" && " text-right flex-row-reverse"
              }`}
            >
              <span> {dectionary.DeleverAdress}</span>:
              <span>{order.deliveryAddress}</span>
            </p>
            <p
              className={`flex text-gray-600 mb-2 gap-4 ${
                locale == "ar" && " text-right flex-row-reverse"
              }`}
            >
              <span>{dectionary.paymentId}</span>:<span>{order.paymentId}</span>
            </p>
            <p className=" text-center">{dectionary.products}</p>
            <ul className="list-disc list-inside">
              {order.items.map((item, id) => (
                <li key={id} className={`flex justify-between`}>
                  <span> {item.name}</span> - <span> ${item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
