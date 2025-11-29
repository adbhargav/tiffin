import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Contact.jsx
 * - Adds Framer Motion entrance & micro-interactions
 * - Interactive contact form with client-side validation + success state
 * - Accessible buttons, improved focus styles, lazy-loading map iframe
 *
 * Dependency:
 *   npm install framer-motion
 *
 * If you use Next.js (app/ router) add "use client" at the top of this file.
 */

const sectionVariant = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const validate = () => {
    const e = {};
    if (!formState.name.trim()) e.name = "Name is required";
    if (!formState.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formState.email)) e.email = "Enter a valid email";
    if (!formState.message.trim()) e.message = "Please enter a message";
    return e;
  };

  const handleChange = (e) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      return;
    }

    setStatus("sending");
    // Simulate async submit — replace with actual API call
    try {
      await new Promise((res) => setTimeout(res, 900));
      setStatus("success");
      setFormState({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("idle");
      // handle real error
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-green mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for orders, inquiries, or feedback
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            className="space-y-8"
            aria-labelledby="contact-info-heading"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 id="contact-info-heading" className="text-3xl font-bold text-primary-teal mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <ContactRow
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                  title="Phone"
                  body={<p className="text-gray-600">+1 (123) 456-7890</p>}
                />

                <ContactRow
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Email"
                  body={<p className="text-gray-600">info@tastytiffins.com</p>}
                />

                <ContactRow
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  title="Address"
                  body={
                    <p className="text-gray-600">
                      123 South Street<br />Tiffin City, TC 12345
                    </p>
                  }
                />

                <ContactRow
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  title="Service Hours"
                  body={
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 2:00 PM<br />
                      Saturday - Sunday: 8:00 AM - 1:00 PM
                    </p>
                  }
                />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-secondary-green mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <SocialIcon ariaLabel="Follow on X (Twitter)" />
                  <SocialIcon ariaLabel="Follow on Facebook" />
                  <SocialIcon ariaLabel="Follow on Instagram" />
                </div>
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-primary-teal to-secondary-green rounded-xl shadow-lg p-8 text-white"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 160 }}
            >
              <h2 className="text-3xl font-bold mb-4">Order via WhatsApp</h2>
              <p className="mb-6 text-lg">
                Place your order quickly and easily through WhatsApp. Our team will respond promptly to confirm your order.
              </p>

              <a
                href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20order%20tiffin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-accent-yellow text-secondary-green font-bold py-3 px-4 rounded-lg hover:bg-accent-aqua transition duration-200"
                aria-label="Chat with us on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Chat with us on WhatsApp
              </a>

              <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-6">
                <h3 className="font-bold text-lg mb-2">How to Order:</h3>
                <ol className="list-decimal pl-5 space-y-1 text-white">
                  <li>Click on the WhatsApp button above</li>
                  <li>Send us your order details</li>
                  <li>We'll confirm your order and delivery time</li>
                  <li>Pay via Cash on Delivery or Online Transfer</li>
                </ol>
              </div>
            </motion.div>
          </motion.section>

          {/* Map + Form Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-primary-teal mb-4 text-center">Find Us</h2>
              <div className="rounded-lg overflow-hidden h-72 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.997704789301!2d77.5946003148212!3d12.971598690856094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-secondary-green">Send Us a Message</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Name</span>
                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`mt-1 p-3 rounded-lg border ${errors.name ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary-teal`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">Email</span>
                  <input
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`mt-1 p-3 rounded-lg border ${errors.email ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary-teal`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Phone (optional)</span>
                <input
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="mt-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-teal"
                  placeholder="+91 98765 43210"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Message</span>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className={`mt-1 p-3 rounded-lg border ${errors.message ? "border-red-400" : "border-gray-200"} focus:outline-none focus:ring-2 focus:ring-primary-teal`}
                  placeholder="How can we help?"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
              </label>

              <div className="flex items-center justify-between gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-primary-teal text-white font-semibold py-3 px-6 rounded-lg shadow ${status === "sending" ? "opacity-80 pointer-events-none" : ""}`}
                  aria-live="polite"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </motion.button>

                {status === "success" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-medium">
                    Thanks! We'll get back to you shortly.
                  </motion.div>
                )}

                <a
                  href="mailto:info@tastytiffins.com"
                  className="text-sm text-gray-600 hover:underline"
                >
                  Or email us
                </a>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* Small helper components for clarity */
const ContactRow = ({ icon, title, body }) => (
  <div className="flex items-start">
    <div className="bg-primary-teal p-3 rounded-full mr-4 flex items-center justify-center">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-secondary-green mb-1">{title}</h3>
      <div>{body}</div>
    </div>
  </div>
);

const SocialIcon = ({ ariaLabel = "social", children = null }) => (
  <a
    href="#"
    className="bg-primary-teal text-white p-3 rounded-full hover:bg-accent-yellow transition duration-200"
    aria-label={ariaLabel}
  >
    {children ?? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016.9 4H3.1a2 2 0 00-1.097.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    )}
  </a>
);

export default Contact;