"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const SERVICE_ID = "service_k7fatdr";
const TEMPLATE_ID = "template_g318s1o";
const PUBLIC_KEY = "TgLj8yPZcXfiKihsF";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current as HTMLFormElement,
        { publicKey: PUBLIC_KEY }
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
      });
      (event.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: "Reason: " + error.text,
      });
    }
  };

  return (
    <form
      ref={form}
      onSubmit={(e) => handleSubmit(e)}
      className="p-10 flex flex-col items-center justify-center space-y-5"
    >
      <div className="flex flex-col sm:flex-row justify-center items-start space-y-3 sm:space-y-0 sm:space-x-10">
        <div className="space-y-3 sm:space-y-2">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
              className="border-2 p-2 rounded-md w-60"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email..."
              className="border-2  p-2 rounded-md w-60"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message..."
            className="border-2  p-2 rounded-md h-[125px] w-60 resize-none"
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-lg bg-black text-white"
      >
        Submit
      </button>
    </form>
  );
}
