"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("sending data:",formData)
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("request response:",result)
      if (res.ok) {
        router.push("/pages/HomePage");
      } else {
        setError(result?.error || "Login failed");
      }
    } catch (error) {
      console.log("Error while request:",error);
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-300 p-10">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6">Login Page</h1>
      <div className="bg-white h-auto w-[400px] p-10 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-600 text-lg mb-4">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            className="text-xl border h-10 border-blue-300 w-full p-2 mb-4 rounded-md"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="text-xl border h-10 border-blue-300 w-full p-2 mb-4 rounded-md"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-blue-600 text-xl h-10 w-full text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <Link
          href="/Authentication/ForgetPassword"
          className="text-xl text-blue-600 text-right block mt-4"
        >
          Forgot password?
        </Link>
        <div className="flex flex-row justify-center mt-4">
          <p className="text-xl text-gray-500 mr-4">Don't have an account?</p>
          <Link href="/Authentication/SignupPage" className="text-xl text-blue-600">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}