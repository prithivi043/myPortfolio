import React, { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.error || "❌ Something went wrong.");
      }
    } catch (error) {
      setStatus("❌ Server error. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      <div className="w-full/4 md:w-64 px-6 py-10 rounded-lg bg-white/10 backdrop-blur-md shadow-xl border border-white/20 text-white">
        <h2 className="text-4xl font-bold text-center mb-6 text-yellow-300 tracking-wide mt-6">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-cyan-300 font-medium mb-2 text-sm tracking-wider">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/20 backdrop-blur-md text-white placeholder:text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2 text-sm tracking-wider">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/20 backdrop-blur-md text-white placeholder:text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-cyan-300 font-medium mb-2 text-sm tracking-wider">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-white/20 backdrop-blur-md text-black placeholder:text-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full border-white bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-300 transition-all m-6"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm mt-2 text-green-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
