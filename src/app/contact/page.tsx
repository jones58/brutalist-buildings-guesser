"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      setError(error);
      setIsLoading(false); // Reset loading state
      return;
    }

    const { msg } = await res.json();
    setError(msg);
    setIsLoading(false); // Reset loading state
  };

  return (
    <main>
      <div className="overflow-x-hidden min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-black p-10 rounded-lg shadow-lg space-y-10"
        >
          <h1 className="text-2xl font-bold text-white mb-4">
            Contact me
          </h1>
          <label className="text-white mb-4 block">
            Name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-5"
            />
          </label>
          <label className="text-white block">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-5"
            />
          </label>
          <label className="text-white mb-4 block">
            Message
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md bg-gray-100 text-black border-gray-600 p-7"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-white font-bold text-left text-black p-10 rounded-md hover:bg-gray-200"
            disabled={isLoading} // Disable button during loading
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </main>
  );
}
