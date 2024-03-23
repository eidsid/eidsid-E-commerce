import React from "react";

const Contact = () => {
  const locale = "ar";
  return (
    <div className="flex  items-center  justify-center">
      <div className="flex justify-center items-center  h-screen w-5/6 bg-gray-100">
        {/* Left Section (30%) */}
        <div className="w-1/3 h-full p-8 bg-white">
          {/* Call to Us Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Call to Us</h2>
            <p className="text-gray-600">we are available 24/7,7 days a week</p>
            <p className="text-gray-600">Fax: +123456789</p>
          </div>
          {/* Write to Us Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Write to Us</h2>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-gray-600">Email: example@example.com</p>
            <p className="text-gray-600">
              Address: 123 Example St, City, Country
            </p>
          </div>
        </div>

        {/* Right Section (70%) */}
        <div className="w-full h-full p-8 bg-white">
          {/* Contact Form */}
          <form className="flex flex-col  gap-4">
            <div
              className={`flex w-full   justify-between ${
                locale == "ar" && "flex-row-reverse"
              }`}
            >
              <div className=" flex justify-between w-full gap-4 my-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 border-none"
                  required
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 border-none"
                  required
                />
                <input
                  type="text"
                  id="text"
                  name="number"
                  placeholder="Number"
                  className="w-full px-4 py-2 rounded border bg-gray-100 focus:outline-none focus:border-blue-500 border-none"
                  required
                />
              </div>
            </div>

            <textarea
              className="border border-gray-300 p-2 rounded  bg-gray-100  border-none h-44"
              placeholder="Yor Message"
            ></textarea>

            <div className="flex justify-end">
              <button className="bg-red-400 text-white py-2 px-4 rounded hover:bg-blue-600 ">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
