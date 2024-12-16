"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [status, setStatus] = useState("");

  const onSubmit = async (data) => {
    setStatus("pending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        reset(); // 폼 초기화
      } else {
        const { error } = await response.json();
        setStatus(`Error: ${error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-600 mb-6 text-center">
        공연 & 레슨 & 각종 비지니스 문의
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white shadow-lg p-6 rounded-lg"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            {...register("message", { required: "Message is required" })}
            className="mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={status === "pending"}
            className="w-full bg-indigo-500 hover:bg-indigo-600 border text-white font-medium py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {status === "pending" ? "전송중..." : "보내기"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
