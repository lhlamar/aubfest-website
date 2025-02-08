"use client";
import { useState } from "react";

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "General Inquiry",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted:\n${JSON.stringify(formData, null, 2)}`);
    // TODO: Replace with an actual API call to handle form submission
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-6">
      <h2 className="text-5xl font-bold mb-6">Get Involved</h2>
      <p className="max-w-2xl text-lg text-center leading-relaxed mb-6">
        Want to be part of Aubfest? Whether you're an artist, vendor, or volunteer, we'd love to hear from you!
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-lg w-full bg-gray-900 p-6 rounded-lg shadow-lg">
        {/* Name */}
        <label className="block mb-2">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
        </label>

        {/* Email */}
        <label className="block mb-2">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
        </label>

        {/* Application Type Dropdown */}
        <label className="block mb-2">
          How would you like to be involved?
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Volunteer Application">Volunteer Application</option>
            <option value="Artist Submission">Artist Submission</option>
            <option value="Vendor Inquiry">Vendor Inquiry</option>
          </select>
        </label>

        {/* Message */}
        <label className="block mb-4">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about how you'd like to get involved!"
            className="w-full p-2 mt-1 h-24 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
