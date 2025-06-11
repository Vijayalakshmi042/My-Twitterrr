"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginPage from "../LoginPage/page";

export default function ForgetPassword() {
  const [formData, setFormData] = useState("");
  const router=useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/forgotPassword", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Password changed! Please login.");
        setFormData({ email: "", password: "" });
        router.push("/LoginPage");
      }
      setMessage(result.message || result.error || "");
    } catch (error) {
      console.log(error);
      setMessage("An unexpected error occurred.");
    }
  };

return (
  <div className="bg-blue-300 p-10 text-center h-200 m-15">
    <h1 className="text-2xl text-amber-800 font-extrabold m-3">
      Forgot password!!!
    </h1>
    <form
      onSubmit={handleSubmit}
      className="grid grid-column-4 justify-center items-center"
    >
      <input
        type="email"
        placeholder="Email id"
        className="text-xl border-1 h-10 border-black m-4"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        className="text-xl border-1 h-10 border-black m-4"
        placeholder="Enter the New Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button
        type="submit"
        className="bg-blue-600 text-xl h-10 w-md m-4 border rounded-sm"
      >
        Change Password
      </button>
    </form>
  </div>
)}
