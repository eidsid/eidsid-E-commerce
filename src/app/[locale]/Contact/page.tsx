import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import React from "react";
import { getDict } from "../../../../dictionaries/dictionaries";
type dectionarytype = {
  infoSection: {
    callPart: {
      call: string;
      text: string;
      phone: string;
    };
    writePart: {
      write: string;
      text: string;
      emails: string[];
    };
  };
  form: {
    name: string;
    email: string;
    phone: string;
    message: string;
    send: string;
  };
};
const Contact = async () => {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const contactDectionary: dectionarytype = dectionary.pages.contact;

  const {
    infoSection: { callPart, writePart },
    form: { name, email, phone, message, send },
  } = contactDectionary;

  return (
    <div className="flex  items-center  justify-center">
      <div
        className={`flex justify-center items-center  h-screen w-5/6 bg-gray-100 ${
          Local === "ar" && "flex-row-reverse text-right"
        }`}
      >
        {/* Left Section (30%) */}
        <div className="w-1/3 h-full p-8 bg-white">
          {/* Call to Us Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">{callPart.call}</h2>
            <p className="text-gray-600">{callPart.text}</p>
            <p className="text-gray-600">{callPart.phone}</p>
          </div>
          {/* Write to Us Section   */}
          <div>
            <h2 className="text-lg font-bold mb-4">{writePart.write}</h2>
            <p>{writePart.text}</p>
            <p className="text-gray-600"></p>
            {writePart.emails.map((Emails) => {
              return <span key={Emails}>{Emails}</span>;
            })}
          </div>
        </div>

        {/* Right Section (70%) */}
        <div className="w-full h-full p-8 bg-white">
          {/* Contact Form */}
          <form className="flex flex-col  gap-4">
            <div
              className={`flex w-full   justify-between ${
                Local == "ar" && "flex-row-reverse"
              }`}
            >
              <div className=" flex justify-between w-full gap-4 my-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={name}
                  className={`w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 border-none ${
                    Local === "ar" && "text-right"
                  }`}
                  required
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder={email}
                  className={`w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 border-none ${
                    Local === "ar" && "text-right"
                  }`}
                  required
                />
                <input
                  type="text"
                  id="text"
                  name="number"
                  placeholder={phone}
                  className={`w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 border-none ${
                    Local === "ar" && "text-right"
                  }`}
                  required
                />
              </div>
            </div>

            <textarea
              className={`border border-gray-300  rounded  bg-gray-100  border-none h-60  p-4  ${
                Local === "ar" && "text-right"
              }`}
              placeholder={message}
            ></textarea>

            <div className="flex justify-end">
              <button className="bg-red-400 text-white py-2 px-4 rounded hover:bg-blue-600 ">
                {send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
