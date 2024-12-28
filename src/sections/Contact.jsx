import React from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import { config } from "../../config";

const Contact = () => {
  const formRef = React.useRef();
  const [loading, setLoading] = React.useState(false);

  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        config.EMAILJS_SERVICE_ID,
        config.EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Hanif",
          from_email: form.email,
          to_email: "hanifantoni2@gmail.com",
          message: form.message,
        },
        config.EMAILJS_PUBLIC_KEY
      );
      setLoading(false);
      toast.success("Your message has been sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setLoading(false);

      toast.error("Something went wrong, please try again");
    }
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const renderTextBtn = () => {
    if (loading) {
      return "Sending";
    }
    return "Send Message";
  };
  return (
    <section className="c-space my-20" id="contact">
      <Toaster richColors position="top-center" />
      <div className="relative min-h-screen items-center justify-center flex flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className={`absolute inset-0 min-h-screen ${
            isMobile ? "hidden" : ""
          }`}
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Increase my wealth so I can buy things that I like and you got
            things that you want 😁
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Hi, I'm interested on your works..."
                rows={5}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {renderTextBtn()}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
