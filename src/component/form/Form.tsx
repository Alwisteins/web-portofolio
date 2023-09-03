import React from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import Swal from "sweetalert2";

//emailjs config, belum ane taro di process.env
const SERVICE_ID: string = "service_v0d6l0j";
const TEMPLATE_ID: string = "template_78eubzt";
const PUBLIC_KEY: string = "RJn84mnoTWRShOuDF";

export default function MyForm(): JSX.Element {
  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result: EmailJSResponseStatus = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        event.target as HTMLFormElement,
        PUBLIC_KEY
      );

      console.log("result: " + result.text);
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
      });
      (event.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error(error.text);
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: "Reason: " + error.text,
      });
    }
  };

  return (
    <div className="mt-20 mx-auto max-w-md text-center">
      <form
        onSubmit={handleOnSubmit}
        className="relative top-20 w-[520px] h-[250px] p-4 border-2 rounded-md"
      >
        <div className="absolute">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
            className="border-2 border-gray-300 p-2 rounded-md "
            required
          />
        </div>
        <div className="absolute top-24">
          <label
            htmlFor="name"
            className="block text-gray-600 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name..."
            className="border-2 border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="absolute right-5">
          <label
            htmlFor="message"
            className="block text-gray-600 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message..."
            className="border-2 border-gray-300 p-2 rounded-md h-[125px] w-[250px] resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="absolute bottom-5 left-[40%] border-2 text-white px-4 rounded-md hover:bg-prim-black hover:text-prim-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
