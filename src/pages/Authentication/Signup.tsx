import React, { useState } from "react";
import { useCreateUserMutation } from "../../redux/api/api";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import { useCreateUserMutation } from "../path/to/api"; // Adjust the import path based on your project structure

const Signup = () => {
  // Predefined user data
  const initialData = {
    name: "Ali",
    email: "ali@example.com",
    password: "123456",
    role: "VENDOR",
  };

  // State for form data
  const [formData, setFormData] = useState(initialData);
  const [createUser, { isLoading, isSuccess, isError, error }] =
    useCreateUserMutation();

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser(formData).unwrap();
      console.log("User created successfully");
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <fieldset className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Profile Section */}
            <div className="space-y-4 md:col-span-1">
              <h2 className="text-2xl font-semibold text-gray-800">
                Create Profile
              </h2>
              <p className="text-sm text-gray-600">
                Complete your profile information to personalize your account.
              </p>
            </div>
            {/* Form Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                >
                  <option value="VENDOR">Vendor</option>
                  <option value="CUSTOMER">Customer</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
              <div className="col-span-full">
                <button
                  type="submit"
                  className="w-full py-2 mt-4 text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </fieldset>
          {/* Display success or error messages */}
          {isSuccess && (
            <p className="text-green-600 mt-4">User created successfully!</p>
          )}
          {isError && error && (
            <p className="text-red-600 mt-4">
              Error:
              {
              // "data" in error && (error as FetchBaseQueryError).data?.message
                // ? (error as FetchBaseQueryError).data.message
                // : 
                "An error occurred"}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
