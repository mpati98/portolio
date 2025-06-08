import { useState } from "react";
import { RevealOnScroll } from "../utils/RevealOnScroll";
import emailjs from "emailjs-com";
import { LoadingScreen } from '../utils/LoadingScreen'

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = 'Customer'; 

export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e)
    // Email notification
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result)
        setFormData({ name: "", email: "", phone: "", message: "" });
    })
    .catch(() => alert("Oops! Something went wrong. Please try again."));
    console.log(import.meta.env.VITE_SERVICE_ID)

    // Create airtavle record
        try {
      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          },
          // The body for creating records expects 'records' as an array
          // and each record object must have a 'fields' property.
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: e.target.name.value, 
                  Email: e.target.email.value, 
                  Phone: e.target.phone.value,
                  Message: e.target.message.value
                  // Add other fields as needed, e.g., 'Description': 'Some text'
                },
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Airtable API errors usually come with an 'error' object
        const errorDetail = data.error?.message || 'Unknown error occurred.';
        throw new Error(`API Error: ${response.status} - ${errorDetail}`);
      }

    } catch (error) {
        console.log(error)
        alert("Something went wrong!");
    }finally {
      setLoading(false);
    }
  };

  return (
      <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
      >
    {!loading && <LoadingScreen onComplete = {() => {setLoading(true)}} />}{" "}
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="84xxxxxxxxx"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};