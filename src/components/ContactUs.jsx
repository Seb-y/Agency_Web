import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6177da87-b196-4601-a951-3b7ceb1b36d4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const formRef = React.useRef(null);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach Out To Us"
        description="We'd love to hear from you! Please reach out with any questions or inquiries."
      />
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        ref={formRef}
        onSubmit={async (event) => {
          await onSubmit(event);
          if (formRef.current) {
            formRef.current.reset();
          }
        }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-blue-500 focus-within:dark:border-blue-500">
            <img src={assets.person_icon} alt="" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none required"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email ID</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-blue-500 focus-within:dark:border-blue-500">
            <img src={assets.email_icon} alt="" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none required"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={6}
            id=""
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 focus-within:border-blue-500 focus-within:dark:border-blue-500 required"
            placeholder="Enter your message here"
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-113 transition-all"
        >
          Send Message <img src={assets.arrow_icon} alt="" width={18} />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
