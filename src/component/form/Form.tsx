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
    <div className=" sm:mt-20 mx-auto max-w-md text-center">
      <form
        onSubmit={handleOnSubmit}
        className="relative top-10 w-[340px] h-[400px] sm:w-[520px] sm:h-[250px] p-4"
      >
        <div className="absolute left-[10%] right-[10%] sm:left-0 sm:right-0">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email..."
            className="border-2  p-2 rounded-md w-[250px]"
            required
          />
        </div>
        <div className="absolute top-24 left-[10%] right-[10%] sm:left-0 sm:right-0">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name..."
            className="border-2  p-2 rounded-md w-[250px]"
            required
          />
        </div>
        <div className="absolute top-44 left-[10%] right-[10%] sm:top-0 sm:left-0 sm:right-0">
          <label htmlFor="message" className="block font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message..."
            className="border-2  p-2 rounded-md h-[125px] w-[250px] resize-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="absolute bottom-0 sm:bottom-5 left-[40%] border-[1px] bg-prim-black text-prim-white sm:bg-sec-gray text-white px-4 py-1 rounded-md hover:sm:bg-prim-black hover:sm:text-prim-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
