import React, {useState} from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({email: "", message: ""});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    emailjs
      .send(
        "service_llpb4pr",
        "template_bdrc1zj",
        form,
        "-HC-1r045_s_wwLqn"
      )
      .then(
        () => {
          setSubmitted(true);
          setForm({email: "", message: ""});
          setLoading(false);
        },
        (err) => {
          setError("Failed to send message, please try again later.");
          console.error(err);
          setLoading(false);
        }
      );
  };

  if (submitted) {
    return <p className="text-green-600">Thank you for reaching out! I'll get back to you soon.</p>;
  }

  return (
    <form className="w-full max-w-md flex flex-col gap-4 px-5" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
        disabled={loading}
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 resize-none"
        disabled={loading}
      />
      {error && <p className="text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={`px-6 py-3 rounded-md text-white transition hover:scale-105
          ${loading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 hover:bg-gray-800"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
