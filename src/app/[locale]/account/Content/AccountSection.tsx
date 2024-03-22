import React from "react";
type props = {
  dictionary: {
    ChangePasswordTitle: string;
    yourProfile: string;
    fristName: string;
    LastName: string;
    currentpassword: string;
    newpassword: string;
    confirempassword: string;
    city: string;
    streetAddress: string;
    apprtment: string;
    conpanyName: string;
    email: string;
    phoneNumber: string;
    savebtn: string;
    Cancelbtn: string;
  };
  locale: string;
};
const AccountSection = ({ dictionary, locale }: props) => {
  const {
    ChangePasswordTitle,
    fristName,
    LastName,
    currentpassword,
    newpassword,
    confirempassword,
    city,
    streetAddress,
    apprtment,
    conpanyName,
    email,
    phoneNumber,
    savebtn,
    Cancelbtn,
  } = dictionary;
  return (
    <div
      className={`flex flex-col  ${
        locale === "ar" && "text-right"
      } max-w-4xl m-auto w-full`}
    >
      <div>
        <h2 className=" text-center text-2xl font-bold mb-4">
          {dictionary.yourProfile}
        </h2>
      </div>
      <div
        className={`flex w-full   justify-between ${
          locale == "ar" && "flex-row-reverse"
        }`}
      >
        <div className="mb-4  w-2/4  max-w-96">
          <label
            htmlFor="fristName"
            className="block text-sm font-semibold mb-2"
          >
            {fristName}
          </label>
          <input
            type="text"
            id="fristName"
            name="fristName"
            className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4  w-2/4  max-w-96">
          <label
            htmlFor="LastName"
            className="block text-sm font-semibold mb-2"
          >
            {LastName}
          </label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div
        className={`flex w-full   justify-between ${
          locale == "ar" && "flex-row-reverse"
        }`}
      >
        <div className="mb-4  w-2/4  max-w-96">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            {email}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4  w-2/4  max-w-96">
          <label htmlFor="address" className="block text-sm font-semibold mb-2">
            {streetAddress}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="mb-4  w-full ">
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          {phoneNumber}
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <h1 className=" mt-4 mb-2">{ChangePasswordTitle}</h1>
      <div className="mb-4  w-full ">
        <input
          type="text"
          id="currentpassword"
          name="currentpassword"
          className={` w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 ${
            locale === "ar" && "text-right"
          }`}
          placeholder={currentpassword}
          required
        />
      </div>
      <div className="mb-4  w-full ">
        <input
          type="text"
          id="newpassword"
          name="newpassword"
          className={` w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 ${
            locale === "ar" && "text-right"
          }`}
          placeholder={newpassword}
          required
        />
      </div>
      <div className="mb-4  w-full ">
        <input
          type="text"
          id="confirempassword"
          name="confirempassword"
          className={` w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 ${
            locale === "ar" && "text-right"
          }`}
          placeholder={confirempassword}
          required
        />
      </div>
      <div className="btns flex justify-end gap-4 mb-4">
        <button>{Cancelbtn}</button>
        <button className=" bg-red-800 rounded-sm py-2 px-8 text-white">
          {savebtn}
        </button>
      </div>
    </div>
  );
};

export default AccountSection;
